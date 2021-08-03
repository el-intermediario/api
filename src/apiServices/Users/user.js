const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: setPassword
  },
  role: {
    type: String,
    default: "editor",
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

const model = mongoose.model("User", UserSchema);

module.exports = model;
