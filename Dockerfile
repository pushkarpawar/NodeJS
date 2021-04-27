FROM node:6-alpine 
EXPOSE 80
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD npm start
