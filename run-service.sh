#!/bin/bash

if [ -z "$1" ]; then
   echo "Please provide a service name"
   exit 1
else
    USER_ID=$(id -u):$(id -g) docker-compose up $1
fi
