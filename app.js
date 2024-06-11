const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app =express()
const {courseproduct} = require("./model/course")
app.use(cors())

app.listen(8080,()=>{
    console.log("server started")
})
app.use(express.json())

app.get("/view",(req,res)=>{
    res.send("VIEW")
})

app.post("/add",(req,res)=>{
    res.send("ADD")
})

app.search("/search",(req,res)=>{
    res.send("SEARCH")
})