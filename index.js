const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3003
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

mongoose.connect("mongodb://localhost:27017/xyz")

const mySchema = new mongoose.Schema({
    name : { type : String, unique : true}
})
const Abc = mongoose.model('friend' , mySchema)
// const hii = new Abc({ name : "Maxi"})
//         .save()
//         .then(()=>console.log("connected"))

app.get("/friends",(req,res)=>{ // read
    Abc.find()
        .then(data => res.json(data))
})

app.post("/friends",(req,res)=>{  // create
    // console.log(req.body)
    const {name} = req.body
    const newData = new Abc ({name})
    newData.save()
        .then(data => res.json())
        .catch(err => res.send("The error is"+ err.message))
})

app.listen(PORT,()=>{
    console.log("Make n test APIs")
})