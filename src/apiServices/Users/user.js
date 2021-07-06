const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new mongoose.Schema({
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
    default: "customer",
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
