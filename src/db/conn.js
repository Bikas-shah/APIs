const mongoose=require("mongoose");
//########## create database ##########
mongoose.connect("mongodb://localhost:27017/user")
.then(()=>{
    console.log("Connection success..");
}).catch((err)=>{
    console.log(err,"No connection..");
});
