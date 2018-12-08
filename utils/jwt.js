const jwt = require('jsonwebtoken');
const config = require('../config')

module.exports = function generateTokens(userId) {
    return jwt.sign({ _id: userId }, config.jwtsecret, { expiresIn: '1d' });
}
