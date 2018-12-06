const Joi = require('joi');
const validate = require('../utils/validate');

const schema = {
    name: Joi.string()
        .required()
        .min(3),
    phone: Joi.number()
        .required()
        .min(9)    
}

module.exports = function (req, res, next) {
    validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err.details[0].message))
}