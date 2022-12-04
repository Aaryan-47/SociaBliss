const express=require('express')
const router=express.Router()
const UserModel=require('../models/UserModel.js')
const FollowerModel=require('../models/FollowerModel.js')
const NotificationModel=require('../models/NotificationModel')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const authMiddleware =require('../middleware/authMiddleware')

router.get('/',authMiddleware,async(req,res)=>{
 const {userId}=req;
 try{
  const user=await UserModel.findById(userId)
  const userStats=await FollowerModel.findOne({user:userId})

  return res.status(200).json({user,userStats})
 }
 catch(error)
 {
  return res.status(501).send("Server Error")
 }
})

router.post('/',async(req,res)=>{
    const{email,password}=req.body.user
    console.log(password)
    try
    {
      const user=await UserModel.findOne({email:email.toLowerCase()}).select("+password");
      if(!user)
      {
        return res.status(401).send("Invalid Credentials");
      }
      const checkPassword=await bcrypt.compare(password,user.password);
      if(!checkPassword){
      return res.status(401).send("Invalid Credentials");
      }

      const checkWhetherNotificationExists=await NotificationModel.findOne({user:user._id})
      if(!checkWhetherNotificationExists)
      {
        await new NotificationModel({user:user._id,notifications:[]}).save()
      }
      const payload={userId:user._id}
      jwt.sign(payload,process.env.jwtSecret,{expiresIn:"1d"},(err,token)=>{
        if(err)
        throw err;
        return res.status(200).json(token);
      })
    }
    catch{
      console.log(err);
    }
})

module.exports=router