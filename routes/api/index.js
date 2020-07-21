const router = require("express").Router();

// /api/
router.use("/inspiration", require("./inspiration"));
router.use("/compliments", require("./compliments"));
router.use("/users", require("./userApiRoutes"));

module.exports = router;
