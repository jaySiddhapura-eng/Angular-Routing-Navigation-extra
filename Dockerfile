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
# FROM node:20.14.0 as build
# WORKDIR /app

# RUN npm install -g @angular/cli
# COPY package.json package-lock.json ./
# RUN npm ci
# COPY . .
# RUN ng build --configuration=production

# FROM nginx:latest
# COPY --from=build app/dist/navi-data /usr/share/nginx/html
# EXPOSE 8080

### STAGE 1: Build ###
# We label our stage as ‘builder’
FROM node as builder
COPY package.json package-lock.json ./
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run ng build -- --prod --output-path=dist
### STAGE 2: Setup ###
FROM nginx
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
