const mongoose = require('mongoose');
const { Schema } = mongoose; 

//We define scheme for costomer 
const customerSchema = new Schema({
    userId: {
        type: Schema.Type.ObjectId,
        ref: 'User',
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

const customer = mongoose.model('Customer', customerSchema);
module.exports = customer; 