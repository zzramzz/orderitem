const express = require('express');
const error = require('./error')
module.exports = (app) =>{
    app.use(express.json());

    //put this error middleware at the end
    app.use(error)
}