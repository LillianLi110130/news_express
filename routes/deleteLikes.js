const express = require("express");
const router = express.Router();
const db = require("./database");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, (req, res, next) => {
  const {
    body: { newsId },
    user: { userId },
  } = req;
  db.deleteLikes(userId, newsId)
    .then((data) => {
      return res.status(200).json({ message: data });
    })
    .catch((err) => {
      return res.status(500).json({ message: "取消点赞失败！" });
    });
});

module.exports = router;
