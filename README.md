# node-hello-world

A 'hello-world' REST-API for testing multi-arch images in docker (swarm mode).

## Endpoints

    GET /env
    GET /health?full=true
    POST /toggle-health

## Build docker images

    yarn run build

## Push docker images

    yarn run push

## Create and push multi-arch image

    DOCKER_USERNAME=user DOCKER_PASSWORD=secret yarn run push-multiarch
