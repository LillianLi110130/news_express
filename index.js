const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const queryRouter = require("./routes/query")
const getNews = require("./routes/getNews")
const getDetail = require("./routes/getDetail")

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/query", queryRouter);

app.use("/getnews", getNews);

app.use("/getdetail", getDetail);

app.listen(port, ()=>{
    console.log('listening');
})
