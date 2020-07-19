const router = require("express").Router();

// /api/
router.use("/inspiration", require("./inspiration"));
router.use("/activity", require("./activity"));
router.use("/users", require("./userApiRoutes"));

module.exports = router;
