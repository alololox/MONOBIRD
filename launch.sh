#!/bin/bash

cd apps/cdp
ASSET_PREFIX=http://localhost:3001 npm run build && PORT=3001 npm run start &

cd ../pdp
ASSET_PREFIX=http://localhost:3002 npm run build && PORT=3002 npm run start &

cd ../..
cp gateway/.env .
sed -i.bak "s/CDP_PAGES_ORIGIN=.*/CDP_PAGES_ORIGIN=host.docker.internal:3001/g" .env
sed -i.bak "s/PDP_ORIGIN=.*/PDP_ORIGIN=host.docker.internal:3001/g" .env
rm .env.bak
ENV_FILE=../.env docker-compose -f gateway/docker-compose.yml up


trap "exit" INT TERM
trap "kill 0" EXIT
