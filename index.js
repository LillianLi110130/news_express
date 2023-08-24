const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

const getNews = require("./routes/getNews");
const getDetail = require("./routes/getDetail");
const register = require("./routes/register");
const login = require("./routes/login");
const addLikes = require("./routes/addLikes");
const getLikes = require("./routes/getLikes");
const deleteLikes = require("./routes/deleteLikes");
const getStars = require("./routes/getStars")
const deleteStars = require("./routes/deleteStars")

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/getnews", getNews);

app.use("/getdetail", getDetail);

app.use("/register", register);

app.use("/login", login);

app.use("/addlike", addLikes);

app.use("/getlike", getLikes);

app.use("/deletelike", deleteLikes);

app.use("/getstars", getStars);

app.use("/deletestars", deleteStars);

app.listen(port, () => {
  console.log("listening");
});
