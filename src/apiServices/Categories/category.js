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
  politics: { 
    type: String,
    default: null,
  },
  sport: {
    type: String,
    default: null,
  },
  economy: {
    type: String, 
    default: null,
  },
  police: {
    type: String, 
    default: null, 
  },
  society: {
    type: String,
    default: null,
  },
  national: {
    type: String,
    default: null,
  },
  province: {
    type: String, 
    default: null,
  },
  world: {
    type: String,
    default: null, 
  },

});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
