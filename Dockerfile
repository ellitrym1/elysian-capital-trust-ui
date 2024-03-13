FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf.template /etc/nginx/nginx.conf.template

EXPOSE 80

CMD ["sh", "-c", "envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/default.conf && nginx -g 'daemon off;'"]