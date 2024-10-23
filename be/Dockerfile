FROM node:20-bookworm-slim as development

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]


FROM node:20-bookworm-slim as production

WORKDIR /app

COPY package.json ./

RUN npm install --only=production

COPY --from=development /app/dist ./dist

CMD ["node", "dist/index.js"]