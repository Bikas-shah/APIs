const express=require("express");
const User=require("../models/users");
const router=new express.Router();
const {getUser}=require("../controllers/userController");
const {createUser}=require("../controllers/userController");

//############### GET #################
router.get("/users",getUser);

//############### POST #################
router.post("/users",createUser);



module.exports=router;

