FROM node:8.1.3-alpine

MAINTAINER Thorsten Panitz

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000

HEALTHCHECK --interval=5s  --timeout=3s CMD wget -O - localhost:3000/health || exit 1

CMD [ "yarn", "start" ]
