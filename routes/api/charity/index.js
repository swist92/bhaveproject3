const router = require("express").Router();
const axios = require("axios");
const url = require("url");
const { Router } = require("express");


// /api/cha

router.get("/charity/:search", function (req, res) {
    const params = new url.URLSearchParams({
        zipCode: " ",
        searchTerm: " ",

    });
    axios
        .get(
            `http://data.orghunter.com/v1/charitysearch?user_key=${accessKey}&searchTerm=${req.params.search}&zipCode=${req.params.search}rows=5`,
            {
                responseType: "json",
            }
        )
        .then(function ({ data }) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err);
        });
});

module.exports = router;
