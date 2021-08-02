const mongoose = require('require');
const { Schema } = mongoose; 

//We define scheme for cards 
const cardSchema = new Schema({
    token: {
        type: String, 
        default: null,
    }, 
    customerId: { 
        type: String, 
        default: null, 
    },
    lastFour: {
        type: String,
        default: null,
    },
    lastSix: {
        type: String,
        default: null,
    },
    brand: {
        type: String,
        default: null,
    }

});

const card = mongoose.model('card', cardSchema);
module.exports = card; 