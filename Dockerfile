FROM node:alpine
COPY . /App
WORKDIR /App
CMD npm i && npm start 