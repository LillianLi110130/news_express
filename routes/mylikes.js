const express = require("express");
const router = express.Router();
const db = require("./database");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, (req, res, next) => {
  const {
    user: { userId },
  } = req;
  db.getLikes(userId)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({ message: "查询失败！" });
    });
});

module.exports = router;
