FROM node:alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm install

COPY . .

EXPOSE 4173

RUN pnpm build

CMD ["pnpm", "preview"]

