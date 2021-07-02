FROM node:12.18.1-alpine3.9 as BUILD

ARG baseDir="frontend"

RUN mkdir /app

WORKDIR /app

COPY ${baseDir}/package*.json ./

RUN npm install

COPY ${baseDir}/ .

ARG configuration=production
RUN npm run build --configuration=${configuration}

FROM nginx:alpine

COPY --from=BUILD /app/dist/frontend /usr/share/nginx/html

COPY --from=BUILD /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]