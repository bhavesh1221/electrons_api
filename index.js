const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const port = process.env.PORT || 3000;
const appiData = require("./data.json")
const postData = require("./postdata.json")
app.get("/", (req,res) => {
    res.send("helooo guuuyyyjjjjjjj")
})
app.get("/list", (req,res) => {
    res.send(appiData)
})
app.post("/show", (req,res) => {
    res.json("data has been posted successfully")
})
app.listen(port, () => {
    console.log("i am live baby");
})