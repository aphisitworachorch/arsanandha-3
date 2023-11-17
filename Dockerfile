# Use a large Node.js base image to build the application and name it "build"
FROM node:lts-alpine as build

RUN apk update && \
    apk add --update git && \
    apk add --update openssh


# Exact same steps as before
WORKDIR /app

COPY . .

RUN npm cache clean --force
RUN npm install --platform=linux --arch=x64
RUN npm run build



# Create a new Docker image and name it "prod"
FROM node:lts-alpine as prod

WORKDIR /app

# Copy the built application from the "build" image into the "prod" image
# This will only copy whatever is in the .output folder and ignore useless files like node_modules!
COPY --from=build /app/.output /app/.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

# Start is the same as before
CMD ["node", ".output/server/index.mjs"]