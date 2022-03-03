# ================ #
#    Base Stage    #
# ================ #

FROM node:16-buster-slim as base

WORKDIR /opt/app

ENV HUSKY=0
ENV CI=true

RUN apt-get update && \
    apt-get upgrade -y --no-install-recommends && \
    apt-get install -y --no-install-recommends build-essential python3 libfontconfig1 dumb-init && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# ------------------------------------ #
#   Conditional steps for end-users    #
# ------------------------------------ #

# Enable one of the following depending on whether you use yarn or npm, then remove the other one
# COPY --chown=node:node yarn.lock .
# COPY --chown=node:node package-lock.json .

# If you use Yarn v3 then enable the following lines:
# COPY --chown=node:node .yarnrc.yml .
# COPY --chown=node:node .yarn/ .yarn/

# If you have an additional "tsconfig.base.json" file then enable the following line:
# COPY --chown=node:node tsconfig.base.json tsconfig.base.json

# If you require additional NodeJS flags then specify them here
ENV NODE_OPTIONS="--enable-source-maps"

# ---------------------------------------- #
#   End Conditional steps for end-users    #
# ---------------------------------------- #

COPY --chown=node:node package.json .
COPY --chown=node:node tsconfig.json .

RUN sed -i 's/"prepare": "husky install\( .github\/husky\)\?"/"prepare": ""/' ./package.json

ENTRYPOINT ["dumb-init", "--"]

# =================== #
#  Development Stage  #
# =================== #

# Development, used for development only (defaults to watch command)
FROM base as development

ENV NODE_ENV="development"

USER node

CMD [ "npm", "run", "docker:watch"]

# ================ #
#   Builder Stage  #
# ================ #

# Build stage for production
FROM base as build

RUN npm install

COPY . /opt/app

RUN npm run build

# ==================== #
#   Production Stage   #
# ==================== #

# Production image used to  run the bot in production, only contains node_modules & dist contents.
FROM base as production

ENV NODE_ENV="production"

COPY --from=build /opt/app/dist /opt/app/dist
COPY --from=build /opt/app/node_modules /opt/app/node_modules
COPY --from=build /opt/app/package.json /opt/app/package.json

RUN chown node:node /opt/app/

USER node

CMD [ "npm", "run", "start"]
