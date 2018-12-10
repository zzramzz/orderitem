const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        lowercase:true,
    },
    category : {
        type : String,
        enum:['veg','non-veg'],
        required:true,
        lowercase:true,
        trim : true
    },
    day: {
        type: String,
        required: true,
        enum:['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
        lowercase:true,
        trim : true
    },

})
module.exports = Food = mongoose.model('Food', foodSchema);