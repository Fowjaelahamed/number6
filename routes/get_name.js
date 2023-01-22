const express=require("express")
const router=express.Router()

router.get("/",(req,res,next)=>{
    res.send("This is the get name page request")
})

module.exports=router