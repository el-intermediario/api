//File path caller
const mongoose = require('require'); 
const {Schema} = mongoose; 

//We define scheme for article
const articleSchema = new Schema({
    userId: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        default: null
    }, 
    body: {
        type: String,
        default: null
    },
    date: {
        type: Number, 
        default: null
    }, 
    image: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: null
    }
})

const Articles = mongoose.model('Articles', articleSchema);
module.exports = Articles; 


