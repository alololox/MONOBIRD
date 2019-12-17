#!/bin/bash

cd microservices/Fake.PIM
dotnet run &

cd ../Api.Pdp
dotnet run &

cd ../../apps/cdp
npm install
ASSET_PREFIX=http://localhost:3001  PORT=3001 npm run dev &

cd ../pdp
npm install
ASSET_PREFIX=http://localhost:3002 PORT=3002 npm run dev &

# cd $HOME/repos/landing-pages
# npm run dev &

cd $HOME/repos/MONOBIRD/gateway
docker-compose up
