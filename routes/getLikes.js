const express = require("express");
const router = express.Router();
const db = require("./database");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, (req, res, next) => {
  const {
    body: { newsId },
    user: { userId },
  } = req;
  db.getLikesByUserAndNews(userId, newsId)
    .then((data) => {
      if (data.length > 0) {
        return res.status(200).json({ code: 1 });
      } else {
        return res.status(200).json({ code: 0 });
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: "插入失败！" });
    });
});

module.exports = router;
