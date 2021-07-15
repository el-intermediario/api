//File path caller
const mongoose = require('require');
const { Schema } = mongoose;

//We define scheme for article
const articleSchema = new Schema({
  userId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'User',
  },
  categoryId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'Category',
  },
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    default: null,
  },
  date: {
    type: Number,
    default: null,
  },
  source: {
    type: String,
    default: null,
  },
  dropline: {
    type: String,
    default: null,
  },
  //copete
  crownn: {
    type: String,
    default: null,
  },
  dropline: {
    type: String,
    default: null,
  },
  author: {
    type: String, 
    default: null,
  },
  slug: {
    type: String, 
    default: null, 
  },
  image: {
    type: String,
    default: null,
  },
  related: {
    type: Array,
    type: array,
  },
  status: {
    type: Boolean,
    default: false,
  },
  created: {
    created: {type: Date, default: Date.now},
    updated: {type: Date},
  }
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;