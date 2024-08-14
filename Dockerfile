FROM cgr.dev/chainguard/wolfi-base:latest

WORKDIR /app

RUN apk update && apk add \
    nodejs \
    npm

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

