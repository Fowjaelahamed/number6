const express=require("express")
const router=express.Router()

router.post("/",(req,res,next)=>{
    res.send("This is the save_user page request")
})
  
module.exports=router