#################### Development Image ####################

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

RUN yarn \
    && yarn cache clean

COPY --chown=nodejs:nodejs . /home/nodejs

RUN yarn run build

CMD [ "npm", "start" ]

#################### Production Image ####################

FROM nginx:1.15.2 as production

RUN addgroup --gid 999 nginx

RUN adduser --gecos \
    --disabled-password \
    --uid 999 \
    --gid 999 \
    nginx

USER nginx

WORKDIR /home/nginx

COPY --from=build /app/dist /home/nginx/www
COPY --from=build /app/index.html /home/nginx/www/index.html

COPY nginx.conf /etc/nginx/

CMD [ "nginx", "-g", "daemon off;" ]
