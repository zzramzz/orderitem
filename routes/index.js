
const menu = require('./menu');
const user = require('./user');
const login  = require('./login');
const order = require('./order');
const logout  = require('./logout');


module.exports = (app)=>{
    app.use('/users',user);
    app.use('/login',login);
    app.use('/menu',menu);
    app.use('/order',order);
    app.use('/logout',logout);

}