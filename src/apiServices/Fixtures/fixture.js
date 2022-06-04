const mongoose = require('mongoose');
const { Schema } = mongoose;

const fixtureSchema = new Schema({
  lastMatchs: {
    type: Array,
    default: [],
  },
  nextMatchs: {
    type: Array,
    default: [],
  },
  parameters: {
      type: Array,
      default: []
  },
  status: { 
    type: Boolean, 
    default: true,
  },
  created: {
    type: Number,
    default: parseInt(Date.now()/1000),
  },
});

const fixture = mongoose.model('Fixture', fixtureSchema);
module.exports = fixture;