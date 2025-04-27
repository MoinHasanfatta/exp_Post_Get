const express = require('express')
const app = express();

app.get("/",(req,res) =>{
    res.send('<h1> This is to know the Id</h1>')
})

app.get("/:id",(req,res)=>{
    res.send(`The user id is  ${req.params.id}`)
})

app.listen(3006,()=>{
    console.log("demo of getting id")
})