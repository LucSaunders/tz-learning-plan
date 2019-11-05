# Use the latest LTS version 10 of node available from the Docker Hub
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Ensure package.json & package-lock.json are both copied where available (npm@5+)
COPY package*.json ./

RUN npm install
# For production: RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
