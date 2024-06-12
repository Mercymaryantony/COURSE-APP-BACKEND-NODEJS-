const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app =express()
const {coursemodel} = require("./model/course")
app.use(cors())
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")
app.use(express.json())




app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.send("error")
    })
    
})

app.post("/add",(req,res)=>{
    let input = req.body
    let course = new coursemodel(input)
    console.log(course)
    course.save()
    res.json({"status":"ADD"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json("error")
        }
    )
})

app.post("/delete",(req,res)=>{
let input = req.body
coursemodel.findByIdAndDelete(input._id).then(
    (response)=>{
        res.json({"status":"success"})
    }
).catch((error)=>{
    res.json({"status":"error"})
})
})

app.listen(8080,()=>{
    console.log("server started")
})