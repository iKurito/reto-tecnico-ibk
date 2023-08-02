FROM node:16-alpine

WORKDIR /usr/src/app

# Copy only the necessary files for installing dependencies
COPY package.json ./

# Install production dependencies using Yarn
RUN yarn install

# Copy the rest of the app's files
COPY . .

# Define the command to start your Node.js app
CMD ["node", "app.js"]
