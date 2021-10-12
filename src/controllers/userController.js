
const User=require("../models/users");

// ############## GET ######### 
getUser=async(req,res)=>{
    try{
        const getData=await User.find();
        res.status(201).send(getData);
    }catch(e){res.status(400).send(e)}
}

// ############## POST ######### 
createUser=async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;

        if(password===cpassword){

        const user=new User(req.body);
        const createUser=await user.save()
        res.status(201).send("User is successfully registered");
    }else{res.status(201).send("Password are not matching");}
    }catch(err){res.status(400).send(err);}
}


module.exports = { getUser, createUser};
