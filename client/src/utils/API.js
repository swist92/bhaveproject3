import axios from "axios";

export default {
  // Insert user into database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
};
