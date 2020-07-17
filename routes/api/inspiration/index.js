const router = require("express").Router();
const axios = require("axios");
const url = require("url");
const { Router } = require("express");

// /api/inspiration
router.get("/inspiration", function (req, res) {
const params = new url.URLSearchParams({
  id: "731",
  t: "Wisdom",
  maxR: "1",
  size: "medium",
});
axios
  .get("https://healthruwords.p.rapidapi.com/v1/quotes/?" + params.toString(), {
    headers: {
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      "x-rapidapi-key": "e7df6dd91amsh2bd5a3e23fc34d3p141f97jsn1585984069f0",
      useQueryString: true,
    },
  })
  .then(function ({ data }) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

})


module.exports = router;




