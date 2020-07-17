const router = require("express").Router();
const db = require("../../../models");

//localhost:8080/api/users/
// Matches with "/api/users"
router.post("/", async function (req, res) {
  try {
    res.json(await db.User.create(req.body));
  } catch (err) {
    res.status(500).end();
  }
});

router.get("/", async function (req, res) {
    try {
      res.json(await db.User.find());
    } catch (err) {
      res.status(500).end();
    }
  });

router.put("/random/inspiration", async function (req, res) {
    //get current user's id
    //get random quote
    //update current user with random quote
})  

module.exports = router;
