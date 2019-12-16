#!/bin/bash

cd apps/cdp
npm install
ASSET_PREFIX=http://localhost:3001  PORT=3001 npm run dev &

cd ../pdp
npm install
ASSET_PREFIX=http://localhost:3002 PORT=3002 npm run dev &

#moved to compose for now. 
#cd ../..
#cp gateway/.env .
#sed -i.bak "s/CDP_PAGES_ORIGIN=.*/CDP_PAGES_ORIGIN=host.docker.internal:3001/g" .env
#sed -i.bak "s/PDP_ORIGIN=.*/PDP_ORIGIN=host.docker.internal:3002/g" .env
#rm .env.bak
#ENV_FILE=../.env docker-compose -f gateway/docker-compose.yml up


#trap "exit" INT TERM
#trap "kill 0" EXIT
