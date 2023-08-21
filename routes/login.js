const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("./database");

const secretKey = "110130";

router.post("/", (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  database
    .getUser(username)
    .then((data) => {
      if (data.length === 0) {
        return res.status(401).json({ message: "找不到该用户名" });
      } else {
        const user = data[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return res.status(401).json({ message: "用户名或密码错误" });
          } else {
            const token = jwt.sign({ userId: user.id }, secretKey, {
              expiresIn: "1h",
            });
            return res.status(200).json({ token });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(500).json("登录失败");
    });
});

module.exports = router