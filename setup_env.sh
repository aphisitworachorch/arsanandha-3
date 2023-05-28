#!/bin/bash
touch certs/origin-cert.pem
touch certs/private-key-cert.key
touch certs/origin-client-cert.pem
touch certs/dhparam.pem
touch certs/ca-bundle.pem

echo "$SSL_ORIGIN_CERT" >> certs/origin-cert.pem
echo "$SSL_PRIVATE_KEY" >> certs/private-key-cert.key
echo "$SSL_CLIENT_CERT" >> certs/origin-client-cert.pem
echo "$SSL_DHPARAM" >> certs/dhparam.pem
echo "$SSL_CA_BUNDLE" >> certs/ca-bundle.pem
