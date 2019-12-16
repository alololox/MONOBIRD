#!/bin/bash

echo "Stopping all apps"
pkill dotnet

pkill node

echo "Stopping Arc Gateway"
docker stop arc-gateway