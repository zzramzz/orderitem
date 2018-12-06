const mongoose = require('mongoose');

const token = new mongoose.Schema({
    token : {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})