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
    type: Number,
  },
  status: {
    type: Boolean,
    default: true
  },
  inMenu: {
    type: Boolean,
    default: false
  }
});

const page = mongoose.model("Page", pageSchema);
module.exports = page;

