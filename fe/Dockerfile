FROM node:20-bookworm-slim as development

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN VITE_API_URL=http://localhost:8000/api npm run build

FROM caddy:2-alpine as production 
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=development /app/dist /srv