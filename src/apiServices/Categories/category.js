const mongoose = require('mongoose');
const { Schema } = mongoose;

//We define scheme for category
const categorySchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  color: { 
    type: String,
    default: null,
  },
});

const category = mongoose.model('Category', categorySchema);
module.exports = category;
