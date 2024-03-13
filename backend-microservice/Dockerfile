FROM node:18.15.0-alpine3.17

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js" ]
