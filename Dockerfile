FROM node:latest

COPY package*.json ./
COPY storage ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["node", "dist/index.js"]