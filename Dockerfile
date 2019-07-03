FROM node:10.16-alpine

WORKDIR /usr/src

COPY ./ /usr/src

RUN npm install
RUN npm run build

CMD ["node", "./build/server.js"]
