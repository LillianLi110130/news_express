const express = require("express")
const router = express.Router();
const Database = require("./database")

router.get('/', function(req, res, next){
    // res.send("123")
    console.log("123");
    new Database().getData(res);
})

module.exports = router;