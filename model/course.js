const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "title":{type:String,required:true},
    "desc":String,
    "date":String,
    "date":String,
    "du":{type:String,required:true},
    "tr":{type:String,required:true}
})
let coursemodel = mongoose.model("course",schema)
module.exports = {coursemodel}