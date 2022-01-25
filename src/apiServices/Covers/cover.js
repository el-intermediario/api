const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const coverSchema = new Schema({
    created: {
        type: Number,
        default: parseInt(Date.now()/1000), 
    },
    featured: {
        type: Boolean, 
        default: false,
    },
    title: { 
        type: String,
        default: null,
    }, 
    layout: { 
        type: Array,
        default: [],
    },
    articlesOffset: { 
        type: Array,
        default: []
    },
    status: { 
        type: Boolean, 
        default: false,
    }
});

const Cover = mongoose.model('Cover', coverSchema); 
module.exports = Cover; 