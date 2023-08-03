# Stage 1: Build the Angular app
FROM node:16 as build-stage

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

WORKDIR /app/packages/stencil-library

RUN npm install

WORKDIR /app/packages/angular-workspace

RUN npm install

WORKDIR /app/packages/stencil-library

RUN npm run build

WORKDIR /app/packages/angular-workspace

RUN npx ng build component-library

RUN npm run build --prod

# Stage 2: Serve it using Ngnix
FROM nginx:stable-alpine

COPY --from=build-stage /app/packages/angular-workspace/dist/angular-workspace /usr/share/nginx/html

COPY ./packages/angular-workspace/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80