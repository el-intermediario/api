const mongoose = require('require');
const { Schema } = mongoose; 

//We define scheme for costomer 
const customerSchema = new Schema({
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

const costomer = mongoose.model('customer', customerSchema);
module.exports = customer; 