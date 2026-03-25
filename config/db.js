const mongoose=require("mongoose")

const env=require("dotenv")
env.config()
const URL = process.env.MONGO_URI



mongoose.connect(URL)
.then(()=>{console.log("database connected...")})
.catch((e)=>{
    console.log("database not connected..")
})


module.exports=mongoose