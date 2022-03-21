## Backend API

# Getting Started with Javascript MongoDB App

This project was built with 
- [NodeJS](https://nodejs.dev/).
- [ExpressJS] (https://expressjs.com/)
- [Mongoose] for MongoDB (https://mongoosejs.com/)

## Available Scripts

In the project directory, you can start the api with:

### `npm start`


The project is dependant on MongoDB Atlas and will require the following `env` variables to run
`
### MONGO_DB
### MONGO_USER
### MONGO_PASS
`

## Available Endpoints

`/`           - home directory
`/event/:id`  - single event listing
`/events`     - all available events