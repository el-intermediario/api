//file path caller
const mongoose = require('mongoose');
const { Schema } = mongoose;

const adSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: null,
  },
  type: { 
    type: String, 
    enum: ["normal","platinum","golds"],
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  status: { 
    type: Boolean, 
    default: false,
  },
});

const ad = mongoose.model("ad", adSchema);
module.exports = ad;