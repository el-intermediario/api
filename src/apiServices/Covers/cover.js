const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const coverSchema = new Schema({
    created: {
        type: Number,
        default: null, 
    },
    featured: {
        type: Boolean, 
        default: false,
    },
    title: { 
        type: String,
        default: null,
    }, 
    content: { 
        type: Array,
        default: [],
    }, 
    ids: {
        type: Array, 
        default: [],
    },
});

const Cover = mongoose.model('Cover', coverSchema); 
module.exports = Cover; 