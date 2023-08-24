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
    .getStarsByUserAndNews(userId, newsId)
    .then((data) => {
      if (data.length === 0) {
        return res.status(200).json({ code: 0 });
      } else {
        return res.status(200).json({ code: 1 });
      }
    })
    .catch((error) => {
      return res.status(500);
    });
});
module.exports = router;
