import axios from "axios";

export default {
  // Get username and inspiration
  // Write the axios GET call to "/api/users" and grab the data
  // Whatever you name this function, you'll call in the HivePublic component like API.<name of function here>
  // Insert user into database
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  getRandomInspiration: function () {
    return axios.get("/api/inspiration");
  },
  getCompliments: function () {
    return axios.get("/api/compliments");
  },
  createCompliment: function (complimentData) {
    return axios.post("/api/compliments", complimentData);
  },
};
