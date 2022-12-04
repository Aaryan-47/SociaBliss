const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/authMiddleware');
const ChatModel=require('../models/ChatModel')

router.get('/',authMiddleware,async(req,res)=>{
    try{
    const {userId}=req;
    const user=await ChatModel.find({user:userId}).populate('chats.messagesWith');

    let sendChats=[]

    if(user.chats.length>0)
    {
        sendChats=user.chats.map(chat =>({
          messagesWith:chat.messagesWith._id,
          name:chat.messagesWith.name,
          profilePicUrl:chat.messagesWith.profilePicUrl,
          lastMessage:chat.messages[chat.messages.length-1].msg,
          date:chat.messages[chat.messages.length-1].date
        }))
    }

    return res.json(user.chats)

    }

    catch(error)
    {
        res.status(500).send('Server Error')
    }
})

module.exports=router