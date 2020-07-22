const router = require("express").Router();
const axios = require("axios");
const url = require("url");
const { Router } = require("express");



// /api/cha

router.get("/", function (req, res) {
    console.log("sjs");
    const params = new url.URLSearchParams({
        zipCode: " ",

    });
    axios
        .get(
            `http://data.orghunter.com/v1/charitysearch?user_key=b791a1a4ede819dd04a895166984238e&zipCode=85028&rows=5`,
            {
                responseType: "json",
            }
        )
        .then(function (data) {
            // res.json(data);
            console.log(JSON.stringify(
                data.data, 4));


            res.json(
                data.data.data

            )


            // res.json(JSON.stringify(
            //     data.data)
        }).catch(function (err) {
            console.log(err);
        });
});

// router.get("/", async function (req, res) {
//     try {
//       res.json(await );
//     } catch (err) {
//       res.status(500).end();
//     }
//   });

// GET - /api/charity/:id
// router.get("/:id", async function (req, res) {
//     try {
//       res.json(await );
//     } catch (err) {
//       res.status(500).end();
//     }
//   });

//   // POST - /api/charity
//   router.post("/", async function (req, res) {
//     try {
//       res.json(req.body));
//     } catch (err) {
//       res.status(500).end();
//     }
//   });

//   // PUT - /api/charity/:id
//   router.put("/:id", async function (req, res) {
//     try {
//       res.json(await db.charity.findByIdAndUpdate(req.params.id, req.body));
//     } catch (err) {
//       res.status(500).end();
//     }
//   });

//   module.exports = router;

module.exports = router;