const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        phoneno:String,
        pincode:String,
        address:String,
        password:String,
        email:String
        

    }
)
module.exports=mongoose.model("patient",patientSchema)