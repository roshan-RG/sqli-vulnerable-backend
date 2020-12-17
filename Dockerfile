FROM node:lts-alpine3.12
WORKDIR /app

COPY . /app

RUN cd /app; npm install

CMD ["npm", "start"]

EXPOSE 8080

