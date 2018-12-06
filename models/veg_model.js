const mongoose = require('mongoose');

const vegSchema = new mongoose.Schema({
    title: {
        type: String,
        required()
    }
})
module.exports = Veg = mongoose.model('Veg', nonVeg);