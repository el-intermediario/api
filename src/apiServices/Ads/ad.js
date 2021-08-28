//file path caller
const mongoose = require('mongoose');
const { Schema } = mongoose;

const adSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  type: {
    type: String, 
    enum: ['normal', 'platinum', 'gold'],
    require: true,
    default: "normal", 
  },
  image: {
    type: String,
    default: null,
  },
  dateStart: {
    type: Number, 
    default: Date.now,
  },
  dateEnd: {
    type: Number,
    default: Date.now,
  },
  position: {
    type: String, 
    enum: ["header","urgent","modal","main", "main2", "main3", "sidebar"],
  },
  section: {
    type: String, 
    enum: ["home","deportes","interes_general","politica"],
  },
  status: { 
    type: Boolean, 
    default: false,
  }
});

const ad = mongoose.model('Ad', adSchema);
module.exports = ad;