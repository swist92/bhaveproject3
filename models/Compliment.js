const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComplimentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  userTwo: {
    type: String,
    required: true,
  },
  compliment: {
    type: String,
    required: true,
  
  },
  //   sub: {
  //     type: String,
  //     required: true,
});

module.exports = mongoose.model("Compliment", ComplimentSchema);
