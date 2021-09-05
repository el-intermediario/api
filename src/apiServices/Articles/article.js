const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

//We define scheme for article
const articleSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
  },
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
  category: {
    type: Object,
    default: null
  },
  date: {
    type: Number,
    default: Date.now,
  },
  source: {
    type: String,
    default: null,
  },
  featured: {
    type: Boolean,
    default: false,
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
  section: {
    type: String,
    enum: ["santa_cruz", "patagonia", "argentina"],
    required: true,
  },
  tags: {
    type: Array,
    default: []
  },
  counter: {
    type: Number,
    default: 0, 
  },
  created: {type: Number, default: Date.now()},
  updated: {type: Number, default: Date.now()},
});

const model = mongoose.model("Article", articleSchema);
module.exports = model;