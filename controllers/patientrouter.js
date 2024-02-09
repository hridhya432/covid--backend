const express=require("express")
const patientmodel = require("../model/patientmodel")
const router=express.Router()
const bcrypt=require("bcryptjs")
hashedPasswordGenerator=async(pass)=>{
    const salt = await bcrypt.generate(10)
    return bcrypt.hash(pass salt)
}

router.get("/signup",async(req,res)=>{
    let(data)=("data",req.body)
    let password=req.body.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
       let patient = new  patientmodel(data)
    let result =await patient.save()
        
}
    )

        console.log(data)
   
    res.json({
        status:"success"
    })
})


router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data =await usermodel.find({"email":email})
    if(!data){
            return res.json(
               { status :"invalid user"}
            )
    }
    console.log(data)
    let dbpassword=data.password
    let  inputpassword=eq.body.password
    console.log(dbpassword) 
    console.log(inputpassword)
    const match =await bcrypt

    
})




module.exports=router