# get an apline image with node installed
FROM node:17-alpine

# version of node I am using
ENV NODE_VERSION 17.0.1

# create a working dir
WORKDIR web_frontend

# setup and install all packages
COPY package*.json /

RUN npm install

# copies everything that has not been ignored
COPY . .

# expose port for communication
EXPOSE 3000

CMD ["npm start"]
