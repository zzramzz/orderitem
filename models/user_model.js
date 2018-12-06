const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    token : {
        type:Number
    }
})
module.exports = User = mongoose.model('User',userschema);
