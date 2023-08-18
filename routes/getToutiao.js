const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function (req, res, next) {
  const { category } = req.query;
  axios
    .get(
      `https://m.toutiao.com/list/?ac=wap&format=json_raw&tag=${category}&as=A175ADC1C1BAE7E&cp=5D118A3E877E8E1&_signature=f60bLAAAIr6R60RntmQLRn-tGz`
    )
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
