# Base required for most things
FROM node:16-buster-slim as base

WORKDIR /opt/app

RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential python dumb-init && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["dumb-init", "--"]

# Development, used for development only (defaults to watch command)
FROM base as development

CMD [ "npm", "run", "docker:watch"]

# Build stage for production
FROM base as build

COPY ./package.json package-lock.json /opt/app/

RUN npm install

COPY . /opt/app

RUN npm run build

# Production image used to  run the bot in production, only contains node_modules & dist contents.
FROM base as production

ENV NODE_ENV production

COPY --from=build /opt/app/dist /opt/app/dist
COPY --from=build /opt/app/node_modules /opt/app/node_modules
COPY --from=build /opt/app/package.json /opt/app/package.json

CMD [ "npm", "run", "start"]