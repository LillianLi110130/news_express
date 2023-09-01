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
const myLikes = require("./routes/mylikes");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/getnews", getNews);

app.use("/api/getdetail", getDetail);

app.use("/api/register", register);

app.use("/api/login", login);

app.use("/api/addlike", addLikes);

app.use("/api/getlike", getLikes);

app.use("/api/deletelike", deleteLikes);

app.use("/api/mylikes", myLikes);

app.listen(port, () => {
  console.log("listening");
});
