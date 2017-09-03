#!/usr/bin/env bash

VERSION=2.0.0

docker push panitz/node-hello-world-amd64:${VERSION}
docker push panitz/node-hello-world-arm:${VERSION}
