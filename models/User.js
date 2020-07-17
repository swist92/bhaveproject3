const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },
  inspiration: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("User", UserSchema);
