FROM node:16-alpine as build-stage

LABEL version="1.0" 
LABEL description="Custom new Pokémon - Frontend React"
LABEL maintainer="alexcamposwd@gmail.com"

WORKDIR /usr/src/client

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE $REACT_LOCAL_PORT

CMD [ "npm", "start" ]
