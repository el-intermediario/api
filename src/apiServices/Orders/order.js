const moongose = require('mongoose');
const { Schema } = moongose; 

const orderSchema = new Schema({
    id: {
        type: String,
        default: null,
    }, 
    description: {
        type: String,
        default: null,
    },
    dateEnd: {
        type: String,
        default: Date.now,
    },
    paymentId: {
        type: String, 
        default: null,
    }, 
    name: { 
        type: String,
        default: null,
    },
});

const order = moongose.model('Order', orderSchema);
moduele.exports = order;
