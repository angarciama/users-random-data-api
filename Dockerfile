#Build
FROM node:18.16.1-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Production
FROM node:18.16.1-alpine AS production

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]