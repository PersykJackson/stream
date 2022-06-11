FROM node:17-alpine3.14

WORKDIR /usr/app

COPY ./package*.json /usr/app/

RUN npm i

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
RUN tar xf ./ffmpeg-release-amd64-static.tar.xz --strip-components=1

ENTRYPOINT npm run dev
