#!/bin/bash
touch certs/origin-cert.pem
touch certs/private-key-cert.key

echo "$SSL_ORIGIN_CERT" >> certs/origin-cert.pem
echo "$SSL_PRIVATE_KEY" >> certs/private-key-cert.key
