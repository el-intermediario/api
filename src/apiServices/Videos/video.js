const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
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
});

const video = mongoose.model('Video', videoSchema);
module.exports = video;