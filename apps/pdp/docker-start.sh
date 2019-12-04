#!/bin/bash

docker build -t nextjsapp .

docker run --rm -d -p 9080:3000 --name pdp nextjsapp

echo "Docker up at http://localhost:9080"