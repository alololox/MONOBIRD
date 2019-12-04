#!/bin/bash

docker build -t nextjsapp .

docker run --rm -d -p 7080:3000 --name cdp nextjsapp

echo "Docker up at http://localhost:7080"