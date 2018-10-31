FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy app source code
COPY . /usr/src/app

# Expose port and start application
EXPOSE 8080
CMD [ "node", "index.js" ]