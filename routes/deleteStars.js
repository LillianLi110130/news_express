const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/veriftToken");
const database = require("./database");

router.get("/", verifyToken, (req, res, next) => {
  const {
    user: { userId },
    query: { newsId },
  } = req;
  database
    .deleteStars(userId, newsId)
    .then((data) => {
      return res.status(200).json({message: data});
    })
    .catch((error) => {
      return res.status(500);
    });
});
module.exports = router;
