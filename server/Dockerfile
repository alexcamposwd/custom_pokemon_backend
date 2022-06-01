FROM node:16-alpine as build-stage

LABEL version="1.0" description="node_ts_mongo  image"

WORKDIR /usr/src/server

COPY package.json ./
COPY tsconfig.json ./

COPY . ./

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]