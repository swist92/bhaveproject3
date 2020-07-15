const router = require("express").Router();

// /api/
router.use("/inspiration", require("./inspiration"));
router.use("/unsplash", require("./unsplash"));

module.exports = router;
