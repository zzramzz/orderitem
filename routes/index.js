
const menu = require('../routes')
const user = require('../routes/user')
const login  = require('../routes/login');

module.exports = (app)=>{
    app.use('/users',user);
    app.use('/login',login)
}