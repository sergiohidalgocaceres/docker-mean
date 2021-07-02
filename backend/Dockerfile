FROM node:12.4.0-alpine

ARG baseDir="backend"

RUN apk update && apk add bash 

WORKDIR /app

COPY ${baseDir}/package*.json ./

RUN npm install

COPY ${baseDir}/ .

CMD [ "npm", "start" ]