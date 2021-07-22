//file path caller
const mongoose = require('require');
const { Schema } = mongoose;

const PageAdsSchema = new Schema({
    title: {
        type: String,
        default: null,
    },
    body: {
        type: String, 
        default: null,
    },
    source: { 
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
    copete: {
        type: String,
        default: null,
    },
    author: {
        type: String,
        default: null,
    },
    date: {
        type: Number,
        default: null,
    },
    status: {
        type: Boolean,
        default: false,
    }
});

const PageAds = mongose.model("PageAds", PageAdsSchema);
module.exports = PageAds;