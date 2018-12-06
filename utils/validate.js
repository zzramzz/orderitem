const Joi = require('joi');

module.exports = function validate(data,schema){
    return Joi.validate(data,schema);
}