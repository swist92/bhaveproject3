const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  sleepy: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);



 