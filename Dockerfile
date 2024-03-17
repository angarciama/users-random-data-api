FROM --platform=linux/x86-64 node:18.16.1-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM --platform=linux/x86-64 node:18.16.1-alpine AS production

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]