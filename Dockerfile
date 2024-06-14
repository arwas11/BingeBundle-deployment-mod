# Base image to start from
FROM node:20.7-alpine

# Two arguments: First is the path outside the image to copy into the image
# Second is the path inside the image
WORKDIR /src/app

# Sets the working directory
COPY . /src/app/

# Run command
RUN npm install -g @angular/cli

RUN npm install

# Opens a specific port on the host machine 
EXPOSE 4200

# Command to run after the image is built
CMD [ "ng", "serve" ]