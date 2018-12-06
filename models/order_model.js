const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true
    },
    orderedBy : {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true});

orderSchema.index({createdAt: 1},{expireAfterSeconds: 60*60*6})

module.exports = Order = mongoose.model('Order',orderSchema);