const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoryRestauratSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('Categorymarket', categoryRestauratSchema)