const UserModel=require('../models/UserModel');
const express=require('express')
const router=express.Router();
const authMiddleWare=require('../middleware/authMiddleware')

router.get('/:searchText',authMiddleWare,async(req,res)=>{
   const{searchText}=req.params;

   const{userId}=req;
   if(searchText.length===0)
   return
   try{
     let pattern=new RegExp(`^${searchText}`)
     const result=await UserModel.find({name:{$regex:pattern,$options:"i"}})

     const sentResults=result.length>0 && result.filter(res => res._id.toString()!== userId)
     res.json(sentResults)
   }
   catch(error)
   {
    return res.status(401).send("Server Error")
   }
})

module.exports=router