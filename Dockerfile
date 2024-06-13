# -- with following build the ng serve happens 
# -- which is not optimized for production

# FROM node:20.14.0
# WORKDIR /app
# RUN npm install -g @angular/cli
# COPY package.json package-lock.json ./
# RUN npm ci
# COPY . .
# EXPOSE 4200
# CMD [ "ng", "serve", "--host", "0.0.0.0"]


# with following build the production grade build happnes which is more optimied
# and nginx server being used to serve. 
FROM node:20.14.0 as build
WORKDIR /app

RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN ng build --configuration=production

FROM nginx:latest
COPY --from=build app/dist/navi-data /usr/share/nginx/html
COPY /nginx.conf  nginx/default.conf
EXPOSE 80

