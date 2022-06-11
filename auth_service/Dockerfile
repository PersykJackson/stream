FROM node:17-alpine3.14

WORKDIR /usr/app

COPY ./package.json /usr/app/package.json
COPY ./package-lock.json /usr/app/package-lock.json

RUN npm i

ENTRYPOINT npm run dev
