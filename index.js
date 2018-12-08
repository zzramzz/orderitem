require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');
const db = require('./utils/db');

const app = express();

winston.add (new (winston.transports.File)({ filename: 'logfile.log' }));
winston.add(new (winston.transports.MongoDB)({db:'mongodb://localhost:27017/order', level:'info'}))


process.on('uncaughtException',(ex)=>{
    console.log('We got an Uncaught exception');
    winston.error(ex.message,ex);
    process.exit(1);

})


process.on('uncaughtRejection',(ex)=>{
    console.log('We got an Uncaught Rejection');
    winston.error(ex.message,ex)
    process.exit(1);
})

db(app);
middlewares(app);
routes(app);

module.exports = app;