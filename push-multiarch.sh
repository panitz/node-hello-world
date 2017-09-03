#!/usr/bin/env bash

manifest-tool --username ${DOCKER_USERNAME} --password ${DOCKER_PASSWORD} push from-spec node-hello-world-manifest.yml
