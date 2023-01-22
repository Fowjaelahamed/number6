const express=require("express")
  
const getNameroute=require("./routes/get_name.js");
const sasveUserRoute=require("./routes/save_user.js");

const app=express()
  
// Handling routes request
app.use("/get_name",getNameroute);
app.use("/save_user",sasveUserRoute);
app.listen((3000),()=>{
    console.log("Server is Running")
})