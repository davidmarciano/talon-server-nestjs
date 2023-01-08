<h1>Talon server with NestJS</h1>

## Description

The application is running on port `8080`, make sure this port is free to use before you start the app. <br />
Before running the app you should install the `node_modules`, see `Installation` section. <br />
After that you should configure the `.env` parameters, I will send it to you privately. <br />
The app has tested on dev environment, please run `npm start` in order to run it.

## Installation

```bash
$ npm install
```

## Environment Variables
```bash
MONGO_USER=""
MONGO_PASS="" 
MONGO_CLUSTER=""
MONGO_DB_NAME=""
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
