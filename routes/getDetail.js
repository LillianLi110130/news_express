const express = require("express");
const router = express.Router();
const axios = require("axios");
// const verifyToken = require("../middlewares/veriftToken")

router.get("/", function (req, res, next) {
  const { itemid } = req.query;
  axios
    .get(
      `https://m.toutiao.com/i${itemid}/info/?_signature=mvD7gBATx-10tqTLvd1hNJrw-5&i=6706312322090009092`
    )
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
