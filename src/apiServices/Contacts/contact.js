const mongoose = require("mongoose");
const { Schema } = mongoose;

//We define schema for Contact
const contactSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  subject: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    default: null,
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;