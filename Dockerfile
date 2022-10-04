FROM registry.gitlab.com/fravega-it/arquitectura/gitlab-runner-node:12.14.0 AS build

ENV HOME=/opt/app NODE_ENV=development
WORKDIR $HOME

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run test \
    && npm run build-storybook

FROM nginx:alpine

ENV HOME=/opt/app

COPY --from=build $HOME/storybook-static /usr/share/nginx/html
