const router = require("express").Router();

router.get("/:search", function (req, res) {
    axios
        .get(
            `https://api.unsplash.com/search/photos?query=${req.params.search}&client_id=${accessKey}`,
            {
                responseType: "json",
            }
        )
        .then(function (result) {
            console.log();
            axios({
                method: "GET",
                url: result.data.results[0].urls.regular, // replace with img url that comes back from unsplash package
                responseType: "stream",
            }).then(function (response) {
                response.data.pipe(res);
            });
        });
});

module.exports = router;