const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');

const  middlewares = require('./middlewares');
const routes = require('./routes');
const db = require('./utils/db');

const app = express();

db(app);
middlewares(app);
routes(app);

module.exports = app;