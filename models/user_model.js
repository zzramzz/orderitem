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
    // token :{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Token'
    // },
    // isVerified : {
    //     type:Boolean,
    //     default :false
    // },
    isAdmin :{
        type :Boolean,
        default : false
    }
})
module.exports = User = mongoose.model('User',userschema);
