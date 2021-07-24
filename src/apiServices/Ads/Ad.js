//file path caller
const mongoose = require('require');
const { Schema } = mongoose;

const AdSchema = new Schema({
    name: {
        type: String,
        default: null,
    },
});

const Ad = mongose.model("Ads", AdSchema);
module.exports = Ad;