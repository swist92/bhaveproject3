const router = require("express").Router();
const db = require("../../../models");

// GET - /api/compliments
router.get("/", async function (req, res) {
  try {
    res.json(await db.Compliment.find());
  } catch (err) {
    res.status(500).end();
  }
});

// GET - /api/compliments/:id
router.get("/:id", async function (req, res) {
  try {
    res.json(await db.Compliment.findById(req.params.id));
  } catch (err) {
    res.status(500).end();
  }
});

// POST - /api/compliments
router.post("/", async function (req, res) {
  console.log(req.body);
  try {
    res.json(await db.Compliment.create(req.body));
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

// PUT - /api/Compliments/:id
router.put("/:id", async function (req, res) {
  try {
    res.json(await db.Compliment.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
