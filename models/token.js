const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    token : {
        type: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    jwtToken: {
        type: String
    }

})

module.exports = Token = mongoose.model('Token', tokenSchema);