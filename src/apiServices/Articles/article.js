const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

//We define scheme for article
const articleSchema = new mongoose.Schema({
  /*
  userId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'User',
  },*/
  /*
  categoryId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'Category',
  },*/
  title: {
    type: String,
    default: null,
    required: true
  },
  body: {
    type: String,
    default: null,
    required: true
  },
  date: {
    type: Number,
    default: Date.now,
  },
  source: {
    type: String,
    default: null,
  },
  dropline: {
    type: String,
    default: null,
  },
  copete: {
    type: String,
    default: null,
  },
  author: {
    type: String, 
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  related: {
    type: Array,
  },
  status: {
    type: Boolean,
    default: false,
  },
  slug: { 
    type: String, 
    slug: "title" 
  },
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
});

const model = mongoose.model("Article", articleSchema);
module.exports = model;