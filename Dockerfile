FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g next
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
