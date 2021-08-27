//file path caller
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema({
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    default: null,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: false
  },
  keywords: {
    type: Array,
    default: [],
  },


});

const page = mongoose.model("Page", pageSchema);
module.exports = page;

