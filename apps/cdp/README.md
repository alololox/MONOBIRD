# MONOBIRD

MONO REPO

## CDP NextJS Application

This NextJS application will represent the CDP application of the MONO REPO.

## Steps

1. npm install
2. npm run build
3. npm run start
4. Go to http://localhost:4000

## Dockerize

1. Create Docker image

> docker build -t nextjsapp .

2. Create and run our container

> docker run --rm -d -p 7080:3000 --name cdp nextjsapp

3. Go to http://localhost:7080

### Start/stop scripts

Start

> ./docker-start.sh

Stop

> ./docker-stop.sh
