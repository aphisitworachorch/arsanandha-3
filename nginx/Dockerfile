# Base image
FROM alpine:latest AS builder

# Install dependencies
RUN apk --no-cache add \
    git \
    build-base \
    cmake \
    perl \
    perl-utils \
    perl-ipc-run

# Clone the Quiche repository
RUN git clone --recursive https://github.com/cloudflare/quiche.git

# Build Quiche
WORKDIR /quiche
RUN cargo build --release --features pkg-config-meta

# Build NGINX with Quiche module
FROM nginx:latest

# Install additional dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libssl-dev \
    libpcre3-dev \
    zlib1g-dev

# Copy Quiche library from the builder stage
COPY --from=builder /quiche/target/release/libquiche.so /usr/local/lib/libquiche.so

# Download NGINX source code
RUN wget http://nginx.org/download/nginx-1.21.0.tar.gz && \
    tar -xzvf nginx-1.21.0.tar.gz

# Configure NGINX with Quiche module
WORKDIR /nginx-1.21.0
RUN ./configure --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_v3_module \
    --with-openssl=../quiche/deps/boringssl \
    --add-dynamic-module=../quiche/extras/nginx && \
    make modules

# Copy the Quiche module shared object file
RUN cp objs/*.so /etc/nginx/modules/


COPY ../nginx.conf /etc/nginx/nginx.conf
COPY ../certs /etc/nginx/certs

# Update NGINX configuration to enable the Quiche module
RUN sed -i '/^http {/a \    quiche off;' /etc/nginx/nginx.conf

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]