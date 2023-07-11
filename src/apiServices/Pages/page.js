const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const pageSchema = new Schema({
  idShort: Number,
  title: {
    type: String,
    default: null,
  },
  body: {
    type: String,
    default: null,
  },
  bodyHtml: {
    type: String,
    default: null
  },
  status: {
    type: Boolean,
    default: true
  },
  slug: { 
    type: String, 
    slug: "title" 
  },
  updated: {
    type: Number,
    default: parseInt(Date.now()/1000)
  },
});

pageSchema.plugin(autoIncrement, {id: 'page', inc_field: 'idShort'});

const page = mongoose.model("Page", pageSchema);
module.exports = page;

