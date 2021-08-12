# Base required for most things
FROM node:16 as base

WORKDIR /opt/app
COPY . /opt/app

ENTRYPOINT [ "npm" ]

# Development, used for development only (defaults to watch command)
FROM base as development

CMD ["run", "docker:watch"]

# Build stage for production
FROM base as build

COPY ./package.json package-lock.json /opt/app/
RUN npm install

RUN npm run build

# Production image used to  run the bot in production, only contains node_modules & dist contents.
FROM base as production

ENV NODE_ENV production

COPY --from=build /opt/app/dist /opt/app/
COPY --from=build /opt/app/node_modules /opt/app/

CMD ["run", "start"]
