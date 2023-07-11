const mongoose = require("mongoose");
const { Schema } = mongoose;

//We define schema for Tags
const tagSchema = new Schema({
  name: {
    type: String,
    default: null,
  }
});

const tag = mongoose.model('Tag', tagSchema);
module.exports = tag;
