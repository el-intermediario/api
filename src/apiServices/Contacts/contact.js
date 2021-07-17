//File path caller
const mogoose = require("require");
const { Schema } = mogoose;

//We define schema for Contact
const contactSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  subject: {
    type: String,
    default: null
  },
  message: {
    type: String,
    default: null
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Contact = mogoose.model('Contact', contactSchema);
module.export = Contact;