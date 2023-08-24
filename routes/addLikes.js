const express = require("express");
const router = express.Router();
const db = require("./database");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, (req, res, next) => {
  const {
    body: { newsId },
    user: { userId },
  } = req;
  db.addLikes(userId, newsId)
    .then((v) => {
      return res.status(200).json({ message: "点赞成功！" });
    })
    .catch((err) => {
      return res.status(500).json({ message: "点赞失败！" });
    });
});

module.exports = router;
