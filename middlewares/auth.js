const genJwt= require('../utils/jwt');
const jwt = require('jsonwebtoken');
const config = require('../config')

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');
    try {
        const decoded = jwt.verify(token, config.jwtsecret)
        req.user = decoded;
        console.log(decoded)
        next();

    }
    catch (ex) {
        next(ex);
    }
}