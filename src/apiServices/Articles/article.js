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
<<<<<<< HEAD
    type: String,
    default: null,
  },
  dropline: {
    type: String,
    default: null,
  },
  //copete
  crownn: {
=======
    type: String,
    default: null,
  },
  dropline: {
>>>>>>> 682207f81d10cd0d917f31332287bbf024ddc558
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
<<<<<<< HEAD
    type: Array,
=======
    type: array,
>>>>>>> 682207f81d10cd0d917f31332287bbf024ddc558
  },
  status: {
    type: Boolean,
    default: false,
  },
<<<<<<< HEAD
  created: {
    created: {type: Date, default: Date.now},
    updated: {type: Date},
  }
});

const Article = mongoose.model('Article', articleSchema);
=======
  created: { type: Date, default: Date.now },
  updated: { type: Date },
});

const Article = mongoose.model("Article", articleSchema);
>>>>>>> 682207f81d10cd0d917f31332287bbf024ddc558
module.exports = Article;
