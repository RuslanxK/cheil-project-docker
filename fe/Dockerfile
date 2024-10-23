FROM node:20-bookworm-slim as development

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ARG VITE_API_URL
RUN VITE_API_URL=${VITE_API_URL} npm run build

FROM caddy:2-alpine as production 
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=development /app/dist /srv