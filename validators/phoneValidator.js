const Joi = require('joi');
const validate = require('../utils/validate');

const schema = {
    phone: Joi.number()
        .required()
        .min(10)    
}

module.exports = function (req, res, next) {
    validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err.details[0].message))
}