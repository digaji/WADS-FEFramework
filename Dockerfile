FROM node:lts-alpine

WORKDIR /app

COPY ./fe-framework/package.json /app
COPY /fe-framework/package-lock.json /app
RUN npm install --silent

COPY ./fe-framework /app

EXPOSE 3000

CMD ["npm", "start"]