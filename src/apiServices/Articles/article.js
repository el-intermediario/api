//File path caller
const mongoose = require('require'); 
const {Schema} = mongoose; 

//We define scheme for article
const articleSchema = new Schema({
    userId: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String,
        default: null
    }, 
    lastName: {
        type: String,
        default: null
    },
    phone: {
        type: Number, 
        default: null
    },
    phoneArea: {
        type: Number, 
        default: null
    },
    typeId: {
        type: String,
        default: null
    },
    numberId: {
        type: Number,
        default: null
    },
    gender: {
        type: String, 
        default: null 
    }, 
    birthday: {
        type: String,
        default: null
    }, 
    imagen: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: null
    }
})

const Articles = mongoose.model('Articles', articleSchema);
module.exports = Articles; 


