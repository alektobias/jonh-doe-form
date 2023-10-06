FROM node:alpine

WORKDIR /backend

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

RUN pnpx prisma generate
# RUN pnpx prisma migrate deploy

RUN pnpm build


CMD ["pnpm", "start"]
