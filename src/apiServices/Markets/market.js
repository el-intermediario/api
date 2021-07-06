const mongoose = require('mongoose');

const { Schema } = mongoose;

const polygonSchema = new Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
    required: true
  }
});

// Define schema for todo items
const marketschema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  phone: {
    type: Number,
  },
  phoneArea: {
    type: Number,
  },
  email: {
    type: String,
    required: true
  },
  logo: {
    type: String,
  },
  image: {
    type: String,
  },
  keyword: {
    type: String,
  },
  methods: {
    type: Array,
    default: ['cash']
  },
  deliveryDelay: {
    type: Array,
    default: [30, 45]
  },
  deliveryPrice: {
    type: Number,
    default: 0
  },
  ratio: polygonSchema,
  status: {
    type: Boolean,
    default: false
  },
  created: {
    type : Number,
    default: parseInt(Date.now()/1000)
  },
  updated: {
    type : Number,
    default: parseInt(Date.now()/1000)
  }
});

module.exports = mongoose.model('Market', marketschema);