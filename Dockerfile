FROM node:19.6-bullseye-slim AS base

WORKDIR /usr/src/app
COPY package*.json ./

FROM base AS dev
# Use cache mount to speed up install of existing dependencies
RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]