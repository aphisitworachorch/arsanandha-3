#!/bin/bash

touch .env

echo "AP_API_ENDPOINT=$AP_API_ENDPOINT" >> .env
echo "AUTH_ORIGIN=$AUTH_ORIGIN" >> .env
echo "NEXTAUTH_URL=$NEXTAUTH_URL" >> .env
echo "SECRET=$SECRET" >> .env
echo "SPOTIFY_CLIENT_ID=$SPOTIFY_CLIENT_ID" >> .env
echo "SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET" >> .env
echo "SPOTIFY_CALLBACK_URL=$SPOTIFY_CALLBACK_URL" >> .env