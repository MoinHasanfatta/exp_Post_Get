const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3003
const friendRoute = require ('./route/friendRoute')
app.get("/",(req,res)=>{
    res.send("Home Page")
})
mongoose.connect("mongodb://localhost:27017/xyz")
app.use("/friends", friendRoute)
app.listen(PORT,()=>{
    console.log("Make n test APIs")
})