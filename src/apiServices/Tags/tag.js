//File path caller
const mongoose = require("require");
const { Schema } = mongoose;

//We define schema for Tags
const tagSchema = newSchema({
  name: {
    type: String,
    default: null,
  }
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
