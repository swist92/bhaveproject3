const router = require("express").Router();

// /api/kittens
router.use("/kittens", require("./kittens"));
router.use("/unsplash", require("./unsplash"));

module.exports = router;
