#!/usr/bin/env bash

VERSION=2.0.0

docker build -t panitz/node-hello-world-amd64:${VERSION} -f dockerfiles/amd64/Dockerfile .
docker build -t panitz/node-hello-world-arm:${VERSION} -f dockerfiles/arm/Dockerfile .
