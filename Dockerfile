FROM node:22-alpine AS build

#AS aliasname

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#Nginx instance/server

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","g","daemon off;"]

# docker build -t frontend-app .
# docker run -d -p 3009:80 --name frontend frontend-app
#docker logs CONTAINERID

