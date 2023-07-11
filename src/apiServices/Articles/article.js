const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


//We define scheme for article
const articleSchema = new Schema({
  idShort: Number,
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
  },
  bodyData: {
    type: String,
    default: ''
  },
  category: {
    type: Object,
    default: null
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
    type: Object,
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
  gallery: {
    type: Array,
    default: []
  },
  counter: {
    type: Number,
    default: 0, 
  },
  created: {type: Number},
  updated: {type: Number},
});

articleSchema.plugin(autoIncrement, {id: 'article', inc_field: 'idShort'});

const model = mongoose.model("Article", articleSchema);
module.exports = model;