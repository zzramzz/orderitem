
const menu = require('../routes')
const user = require('../routes/user')

module.exports = (app)=>{
    app.use('/users',user);
}