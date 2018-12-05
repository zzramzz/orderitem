const mongoose = require('mongoose');
const config= require('../config');
module.exports = (app)=>{
app.mdb = config.mdb

mongoose.connect(app.mdb,{useNewUrlParser : true})
const db = mongoose.connection;

db.on('connecting', () => {
    console.log('connecting to MongoDB...');
  });

  db.on('error', (error) => {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
  });
  
  db.on('connected', () => {
    app.enable('mongodb');
    console.log('MongoDB connected!');
  });
  
  db.once('open', () => {
    console.log('MongoDB connection opened!');
  });
  
  db.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });
  
  db.on('disconnected', () => {
    app.disable('mongodb');
    console.log('MongoDB disconnected!');
    setTimeout(()=>{mongoose.connect(app.mdb, { server: { auto_reconnect: true } } )},500)
  });
  
  

}