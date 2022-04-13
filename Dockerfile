# Base dependency
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# INSTALL app dependencies
COPY package*.json ./
RUN npm install

# BUNDDLE app source (copying code)
COPY . .

EXPOSE 3333
CMD [ "node", "src/server.js" ]