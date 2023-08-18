const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const queryRouter = require("./routes/query")
const getNews = require("./routes/getToutiao")

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/query", queryRouter);

app.use("/getnews", getNews);

app.listen(port, ()=>{
    console.log('listening');
})
