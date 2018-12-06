const mongoose = require('mongoose');

const dailySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum:['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
        lowercase:true,
        trim : true
    },
    veg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veg'
    },
    nonVeg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NonVeg'
    }

})
module.exports = DailyFood = mongoose.model('DailyFood', dailySchema);