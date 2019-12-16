# MONOBIRD

MONO REPO

## PDP NextJS Application

This NextJS application will represent the PDP application of the MONO REPO.

## Dependencies

Depends on PDP and PIM microservices to be running. Make sure to start those 2 servers before running this.

## Steps

1. Update/install Node modules
   `npm install`

2. Start App
   `npm run dev`

3. Go to http://localhost:{PORT}/market/country/language/shop/6202 where default {PORT}=3000

## Dockerize

1. Create Docker image
   `docker build -t nextjsapp .`

2. Create and run our container
   `docker run --rm -d -p 9080:3000 --name pdp nextjsapp`

3. Go to http://localhost:9080/shop

### Docker Start/stop scripts

Start: `./docker-start.sh`
Stop: `./docker-stop.sh`

.
