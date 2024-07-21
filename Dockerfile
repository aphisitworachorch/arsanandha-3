ARG NODE_VERSION="lts"

# change with the Linux Alpine version of your choice
ARG ALPINE_VERSION="3.20"

# Use a large Node.js base image to build the application and name it "build"
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN apk update && \
    apk add --update git && \
    apk add --update openssh && \
    apk add --no-cache python3 py3-pip


# Exact same steps as before
WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm run build

# Create a new Docker image and name it "prod"
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as prod

WORKDIR /app

USER node

# Copy the built application from the "build" image into the "prod" image
# This will only copy whatever is in the .output folder and ignore useless files like node_modules!
COPY --from=build /app/.output /app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

# Start is the same as before
CMD ["node", "server/index.mjs"]