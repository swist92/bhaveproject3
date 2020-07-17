const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bhavedb"
);

const userSeed = [
  {
      username: "swist",
      email: "sarahwist107@gmail.com",
      sub: "a6e97faa-594d-4937-b532-2f7ddf67c6d7"
  },
  {
      username: "hfolk25",
      email: "hfolk25@gmail.com",
      sub: "fae0baf6-9f83-481d-b398-738524fcac5f"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });