FROM node:10.6.0-alpine

LABEL Aurelien PERRIER <a.perrier89@gmail.com>

# Move workdir
WORKDIR /srv/app

# Bundle app source
COPY . .

# Install packages
RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "start"]