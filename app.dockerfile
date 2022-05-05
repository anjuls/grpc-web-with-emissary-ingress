FROM node:14.19

WORKDIR /app

COPY ["package.json", "server.js", "./"]

RUN npm install --no-cache --production

COPY . .

EXPOSE 9090

CMD [ "node", "server.js" ]