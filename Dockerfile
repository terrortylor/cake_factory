FROM node:8.12.0
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /usr/src/cake-factory
WORKDIR /usr/src/cake-factory
COPY . .

RUN npm run build

# Install `serve` to run the application.
RUN npm install -g serve

CMD serve -s build

EXPOSE 3000
