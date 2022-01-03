//file path caller
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const adSchema = new Schema({
  idShort: Number,
  name: {
    type: String,
    default: null,
  },
  type: {
    type: String, 
    enum: ['normal', 'basic', 'premium', 'featured'],
    require: true,
    default: "normal", 
  },
  image: {
    type: String,
    default: null,
  },
  video: {
    type: String,
    default: null,
  },
  dateStart: {
    type: Number, 
    default: parseInt(Date.now()/1000),
  },
  dateEnd: {
    type: Number,
    default: parseInt(Date.now()/1000),
  },
  position: {
    type: String, 
    enum: ["header","urgent","modal","main", "main2", "main3", "sidebar"],
    default: 'main'
  },
  section: {
    type: String, 
    enum: ["home","deportes","interes_general","politica"],
  },
  size: {
    type: String, 
    enum: ["810x100","390x312","1080x840","350x250", "970x250"],
  },
  status: { 
    type: Boolean, 
    default: false,
  }
});

adSchema.plugin(autoIncrement, {id: 'ad', inc_field: 'idShort'});

const ad = mongoose.model('Ad', adSchema);
module.exports = ad;