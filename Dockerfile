FROM node:16
WORKDIR /src
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
EXPOSE 3000
RUN npm install
CMD ["npm","start"]
