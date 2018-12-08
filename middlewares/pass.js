const config = require('../config')

module.exports = function (req, res, next) {
    if(req.body.pass!==config.pass) return res.status(401).send('Password incorrect')
    next();
}