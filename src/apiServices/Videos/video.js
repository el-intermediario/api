const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: {
        type: String, 
        default: null,
    }, 
    type: {
        type: String, 
        enum: ['url', 'embed'],
        require: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String, 
        default: null,
    }, 
});

const Video = mongoose.module('Video', videoSchema);
module.exports = Video; 