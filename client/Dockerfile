FROM node:8.12.0 as dev

RUN addgroup --gid 999 nodejs

RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    nodejs

USER nodejs

WORKDIR /home/nodejs

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY --chown=nodejs:nodejs . /home/nodejs

RUN yarn run build

CMD [ "npm", "start" ]

# Production Image

FROM nginx:1.15.2-alpine

COPY --from=build /home/nodejs/dist /home/nodejs/www
COPY --from=build /home/nodejs/index.html /home/nodejs/www/index.html

COPY nginx.conf /etc/nginx/

CMD [ "nginx", "-g", "daemon off;" ]
