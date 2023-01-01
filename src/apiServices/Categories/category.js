const mongoose = require('mongoose');
const { Schema } = mongoose;

//We define scheme for category
const categorySchema = new Schema({
  type: {
    type: String,
    default: null,
  },
  data: {
    type: Array,
    default: [],
  },
});

const category = mongoose.model('Category', categorySchema);
module.exports = category;
