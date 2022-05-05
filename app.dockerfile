FROM node:14.19

WORKDIR /app

COPY ["package.json", "server.js", "./"]

RUN npm install --no-cache

COPY . .

EXPOSE 9090

CMD [ "node", "server.js" ]