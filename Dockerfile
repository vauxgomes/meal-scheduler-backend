# Base dependency
FROM node:16

# Create app directory
WORKDIR /usr/app

# INSTALL app dependencies
COPY package*.json ./
RUN npm install --silent

# BUNDDLE app source (copying code)
COPY . .

# ENV:NODE
ENV NODE_ENV=staging
ENV PORT=3333
ENV TIME_ZONE=America/Fortaleza

# ENV:Encrypting
ENV HASH_SALT=10

# ENV:Database
ENV DB_HOST=meal-db
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=VBDp8dsAbv6Utu926jWX
ENV DB_DATABASE=meal_db

# ENV:Token
ENV TK_KEY=E8LCmFh2sVmzFFaXx
ENV TK_EXP=8h

# PORT
EXPOSE $PORT

# Run command
CMD [ "node", "src/server.js" ]