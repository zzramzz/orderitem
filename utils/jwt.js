const jwt = require('jsonwebtoken');
const config = require('../config')

module.exports = function generateTokens(userId,isAdmin) {
    return jwt.sign({ _id: userId , isAdmin }, config.jwtsecret, { expiresIn: '1d' });
}
