//file path caller
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
});

const Ad = mongoose.model("Ad", AdSchema);
module.exports = Ad;