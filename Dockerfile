FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --only=development

COPY . .

RUN yarn build

FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]