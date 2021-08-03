const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  phoneArea: {
    type: Number,
    default: null
  },
  typeId: {
    type: String,
    default: null
  },
  numberId: {
    type: Number,
    default: null
  },
  gender: {
    type: String,
    default: null
  },
  birthday: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  status: {
    type: Boolean,
    default: false
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
