const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");
// const controller=require("../controllers/userController");

//########## create schema ##########
const userSchema=new mongoose.Schema({
    firstname:{type:String,required:[true,"FirstName field required"]},
    lastname:{type:String,required:[true,"LastName field required"]},
    email:{
        address:{type:String,required:[true,"Email field required"],unique:[true,"Email already exists"],
        validate(value){
            if(!validator.isEmail(value)){throw new Error("Invalid email");}
            }
        },
    verified:{type: Boolean,default: false }
    },
    password:{type:String,required:[true,"Password field required"],
        minlength: [7,"Password should be at least 7 chars long"]},
    confirmpassword:{type:String,required:true},

    signedUpAt:{type:Date,default:Date.now()},
})


userSchema.pre("save",async function(next){
    if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
    this.confirmpassword=undefined;
    }
    next();
})

//########## create collections ##########
const User=new mongoose.model('User',userSchema);   
module.exports=User; 
