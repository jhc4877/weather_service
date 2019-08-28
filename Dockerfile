FROM node:10
COPY . .
RUN npm install
EXPOSE 3000
WORKDIR /
 
CMD node app.js