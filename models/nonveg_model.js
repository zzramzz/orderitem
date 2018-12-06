const mongoose = require('mongoose');

const nonVegSchema = new mongoose.Schema({
    title: {
        type: String,
        required()
    }
})
module.exports = NonVeg = mongoose.model('NonVeg', nonVegSchema);