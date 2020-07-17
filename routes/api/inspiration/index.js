const router = require("express").Router();

// router.get("/:search", function (req, res) {
//     axios

const unirest = require("unirest");

const req = unirest("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/");

req.query({
	"id": "731",
	"t": "Wisdom",
	"maxR": "1",
	"size": "medium"
});

req.headers({
	"x-rapidapi-host": "healthruwords.p.rapidapi.com",
	"x-rapidapi-key": "e7df6dd91amsh2bd5a3e23fc34d3p141f97jsn1585984069f0",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

