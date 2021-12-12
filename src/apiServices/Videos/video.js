const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;


const videoSchema = new Schema({
  _id: Number,
  title: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    enum: ['url', 'embed'],
    require: true,
  },
  created: {
    type: Number,
    default: parseInt(Date.now()/1000),
  },
  category: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null
  },
  mimetype: {
    type: String,
    default: null
  },
  thumbnail: {
    type: String,
    default: null
  },
  inHome: {
    type: Boolean,
    default: true
  }
}, {
  _id: false
});

videoSchema.plugin(autoIncrement, {id: 'video', inc_field: '_id'});

const video = mongoose.model('Video', videoSchema);
module.exports = video;