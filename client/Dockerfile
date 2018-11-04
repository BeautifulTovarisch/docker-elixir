FROM node:8.12.0 as dev

WORKDIR /app

RUN chown -R node:node /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY --chown=node:node . /app

RUN yarn run build

USER node

CMD [ "npm", "start" ]

# Production Image

FROM nginx:1.15.2 as production

RUN addgroup --gid 999 nginx

RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    nginx

USER nginx

WORKDIR /home/nodejs

COPY --from=build /app/dist /home/nginx/www
COPY --from=build /app/index.html /home/nginx/www/index.html

COPY nginx.conf /etc/nginx/

CMD [ "nginx", "-g", "daemon off;" ]
