# syntax=docker/dockerfile:1
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG ENV_MODE
RUN npm run build:${ENV_MODE}
EXPOSE 3000
CMD [ "npm", "start" ]