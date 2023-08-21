const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const database = require("./database");

router.post("/", (req, res, next) => {
  try {
    const { username, password } = req.body;
    database.getUser(username).then((data) => {
      if (data.length > 0) {
        return res.status(409).json({ message: "用户名已存在" });
      } else {
        bcrypt.hash(password, 10).then((value) => {
          database
            .addUser(username, value)
            .then((v) => {
              return res.status(200).json({ message: "成功注册！" });
            })
            .catch((err) => {
              console.log(err);
              return res.status(500).json({ message: "注册失败" });
            });
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "注册失败" });
  }
});

module.exports = router;
