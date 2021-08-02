const mongoose = require('require');
const { Schema } = mongoose; 

//We define scheme for costomer 
const costomerSchema = new Schema({
    userId: {
        type: String,
        default: null,
    },
    typeId: {
        type: String, 
        default: null,
    }, 
    numberId: {
        type: Number,
        default: null,
    },
    firstName: { 
        type: String,
        default: null,
    }, 
    lastName: { 
        type: String,
        default: null, 
    },
});

const costomer = mongoose.model('costomer', costomerSchema);
module.exports = costomer; 