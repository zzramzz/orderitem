const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    food: {
        type: String,
        required: true
    },
    foodId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    },
    category: {
        type: String,
        required: true
    },
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

orderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 6 })

module.exports = Order = mongoose.model('Order', orderSchema);