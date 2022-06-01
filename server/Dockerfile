FROM node:16-alpine as build-stage

LABEL version="1.0" 
LABEL description="Custom new Pokémon - Backend Api"
LABEL maintainer="alexcamposwd@gmail.com"

WORKDIR /usr/src/server

COPY package.json ./
COPY tsconfig.json ./

COPY . ./

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
