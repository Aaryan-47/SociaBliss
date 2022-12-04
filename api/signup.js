const express=require('express')
const router=express.Router();
const UserModel=require('../models/UserModel')
const FollowerModel=require('../models/FollowerModel')
const NotificationModel =require('../models/NotificationModel')
const ProfileModel=require('../models/ProfileModel')
const ChatModel=require('../models/ChatModel')
const isEmail=require('validator/lib/isEmail')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

router.get("/:username",async (req,res)=>{
   const {username}=req.params;
   console.log(username)
   try{
       if(username.length<1)
       {
        return res.status(401).send("Invalid Name");
       }
    const usern=await UserModel.findOne({username:username.toLowerCase()})
    if(usern)
    return res.status(401).send("Username Already Taken");
    else
    {
       return res.status(200).send("Available")
    }
   }
   catch{
    console.log(err);
    return res.status(401).send("Some Error Occured")
   }
})

router.post('/',async(req,res)=>{
  const{name,email,username,password,bio,facebook,twitter,insta}=req.body.user;
  try
  {
     if(!isEmail(email))
     return res.status(401).send("Invalid Email")
     if(password.length<6)
     return res.status(401).send("Password length should be a minimum of 6 letters")
     try
     {
        const Check=await UserModel.findOne({email:email.toLowerCase()})
        if(Check)
        return res.status(401).send("Email already exists");

     }
     catch{
        return res.status(401).send("Some Error Occured");
     }

     const user=new UserModel({name,email:email.toLowerCase(),username:username.toLowerCase(),password,profilePic:req.body.profilePicUrl})
     user.password= await bcrypt.hash(password,10)
     await user.save()

     let profileField={}
     profileField.user=user._id;
     profileField.bio=bio;
     profileField.social={};
     if(facebook)
     profileField.social.facebook=facebook;
     if(twitter)
     profileField.social.twitter=twitter;
     if(insta)
     profileField.social.insta=insta;

     await new ProfileModel(profileField).save();
     await new FollowerModel({user:user._id,followers:[],following:[]}).save()
     await new NotificationModel({user:user._id,notifications:[]}).save();
     await new ChatModel({user:user._id,chats:[]}).save()
    const payload={userId:user._id}
    jwt.sign(payload,process.env.jwtSecret,{expiresIn:"1d"},(err,token)=>{
        if(err)
        throw err;
        res.status(200).json(token)

    })

  }
  catch{
    res.status(401).send("Some Error Occured")
  }

})


module.exports= router;