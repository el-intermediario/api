//file path caller
const mongoose = require('require');
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

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
