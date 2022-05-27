FROM node:16.14-alpine AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --only=production

FROM node:16.14-alpine
RUN apk add dumb-init

ENV NODE_ENV production

USER node

WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

EXPOSE 8080

CMD ["dumb-init", "node", "src/server.js"]
