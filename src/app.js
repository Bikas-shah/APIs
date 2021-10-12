const express=require("express")
require("../src/db/conn");
const User=require("../src/models/users");
const routerUser=require("../src/routes/allroutes");
const controller=require("../src/controllers/userController");

const app=express();

app.use(express.json());

app.use(routerUser);

app.listen(8000,()=>{
    console.log("listening to port 8000");
})

