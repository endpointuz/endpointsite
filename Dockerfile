FROM node:10.16-alpine

WORKDIR /usr/src

COPY ./build /usr/src
COPY ./public /usr/src

CMD ["node", "./build/server.js"]
