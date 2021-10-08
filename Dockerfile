FROM node:10.13-alpine
ENV VBUSIP 192.168.188.126
ENV VBUSPASSWORD vbus
ENV LOGGINGINTERVAL 10000
ENV HTTPPORT 3333
WORKDIR /usr/src/app
COPY json-live-data-server_docker/package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD [ "node", "json-live-data-server_docker/index.js" ]