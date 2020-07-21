const router = require("express").Router();
const axios = require("axios");
const url = require("url");
const { Router } = require("express");

// /api/inspiration
router.get("/", function (req, res) {
  const params = new url.URLSearchParams({
    t: "Happiness, Meditation",
    maxR: "1",
    size: "medium",
  });
    axios
    .get(
      "https://healthruwords.p.rapidapi.com/v1/quotes/?" + params.toString(),
      {
        headers: {
          "x-rapidapi-host": "healthruwords.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.RAPID_API_KEY,
          useQueryString: true,
        },
      }
    )
    .then(function ({ data }) {
      console.log(data);
      res.json(data)
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
