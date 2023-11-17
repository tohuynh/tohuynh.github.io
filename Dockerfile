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

FROM base AS build
ENV NODE_ENV=production
RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --link nginx.conf /etc/nginx/nginx.conf
COPY --link --from=build usr/src/app/dist/ /usr/share/nginx/html
EXPOSE 8080