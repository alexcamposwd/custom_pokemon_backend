FROM node:16-alpine as build-stage

WORKDIR /usr/src/client

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE $REACT_LOCAL_PORT

CMD [ "npm", "start" ]