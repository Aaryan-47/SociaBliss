const express=require('express')
const router=express.Router()
const authMiddleWare=require('../middleware/authMiddleware')
const NotificationModel=require('../models/NotificationModel');
const UserModel=require('../models/UserModel')

router.get('/',authMiddleWare,async(req,res)=>{
    try{
    const {userId}=req;

    const user=await NotificationModel.findOne({user:userId}).populate('notifications.user').populate('notifications.post');

    return res.json(user.notifications)
    }
    catch(error)
    {
        console.error(error)
        res.status(500).send('Server Error Occured');
    }
})

router.post('/',authMiddleWare,async(req,res)=>{
    try{
    const {userId}=req;

    const user=await UserModel.findById({userId})
    if(user.unreadNotif===true)
    {
        user.unreadNotif=false;
        await user.save();
    }
    return res.status(200).send("Read")
    }
    catch(error)
    {
        console.error(error)
        res.status(500).send('Server Error Occured');
    }
})

module.exports=router