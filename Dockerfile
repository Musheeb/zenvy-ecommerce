FROM node:24
#start building my image using an existing Node.js image.

WORKDIR /app
#create or set the working directory in the container.

COPY package*.json ./
#This copies your package-related JSON files from your local machine into the container. Here * is called a wildcard.

RUN npm install
#Installs all the dependencies that are listed in the package.json file. It runs when we execute "docker build"

COPY . .
#First . -> copy everything from my currently working directory.
#Second . -> copy it into the current working directory inside the container.

EXPOSE 5173
#This indicates that your application inside the container intends to use this port.

CMD [ "npm", "run", "dev" ]
#When someone starts a container from this image, run this command. It runs when we execute "docker run"