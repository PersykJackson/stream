FROM node:17-alpine3.14

WORKDIR /usr/app

COPY ./package*.json /usr/app/

RUN npm i

ENTRYPOINT npm run dev
