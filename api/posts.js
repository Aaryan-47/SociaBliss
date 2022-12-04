const express=require('express')
const router=express.Router();
const authMiddleWare=require('../middleware/authMiddleware')
const UserModel=require('../models/UserModel')
const FollowerModel=require('../models/FollowerModel')
const ProfileModel=require('../models/ProfileModel');
const PostModel = require('../models/PostModel');
const uuid=require('uuid').v4
const {newLikeNotification,removeLikeNotification,newCommentNotification,removeCommentNotification}=require('../utilsServer/notificationActions')

router.post('/',authMiddleWare,async(req,res)=>{
  const {text,location,picUrl}=req.body;
  if(text.length<1)
  return res.status(401).send("Atleast 1 character is required")

  try{
    const newPost={user:req.userId,text}
    if(location)
    newPost.location=location
    if(picUrl)
    newPost.picUrl=picUrl

    const post=await new PostModel(newPost).save()

    return res.json(post._id)
  }
  catch(error)
  {
    return res.status(401).send("Server Error")
  }
})

router.get('/',authMiddleWare,async(req,res)=>{
    const {pageNumber}=req.query

    const number=Number(pageNumber);
    const size=8;
    try{
        let posts;

        if(number===1){
         posts=await PostModel.find().limit(size).sort({createdAt:-1}).populate("user").populate("comments.user")
        return res.json(posts)
        }
        else
        {
            const skips=size*(number-1)
            posts=await PostModel.find().skip(skips).limit(size).sort({createdAt:-1}).populate("user").populate("comments.user")
        }
    }
    catch(error)
    {
        return res.status(401).send("Server Error")
    }
})

router.get('/:postId',authMiddleWare,async(req,res)=>{
    try{
        const posts=await PostModel.findById(req.params.postId)

        if(!posts)
        {
            return res.status(401).send("Post Not Found")
        }
        return res.json(posts)
    }
    catch(error)
    {
        return res.status(401).send("Server Error")
    }
})

//Like a Post

router.post('/like/:postId',authMiddleWare,async(req,res)=>{
    try{
       const{postId}=req.params;
       const {userId}=req;

       const post =await PostModel.findById(postId);

       const isLiked=post.likes.filter(like=>like.user.toString()===userId).length>0
       if(isLiked)
       {
        return res.status(401).send("Post already liked")
       }
       await post.likes.unshift({user:userId})
       await post.save();
       //sending the notification

       if(post.user.toString()!==userId)
       {
        await newLikeNotification(userId,postId,post.user.toString())
       }


       return res.status(200).send("Post Liked")
    }
    catch(error)
    {
        return res.status(401).send("Server Error")
    }
})
//unlike a post
router.post('/unlike/:postId',authMiddleWare,async(req,res)=>{
    try{
       const{postId}=req.params;
       const {userId}=req;

       const post =await PostModel.findById(postId);

       const isLiked=post.likes.filter(like=>like.user.toString()===userId).length===0
       if(isLiked)
       {
        return res.status(401).send("Post not liked before")
       }
       const index=post.likes.map(like=>like.user.toString()).indexOf(userId);
       await post.likes.splice(index,1)
       await post.save();

       if(post.user.toString()!==userId)
       {
        await removeLikeNotification(userId,postId,post.user.toString())
       }

       return res.status(200).send("Post Liked")
    }
    catch(error)
    {
        return res.status(401).send("Server Error")
    }
})

//get all likes
router.get("/like/:postId",async(req,res)=>{
    try{
       const {postId}=req.params;

       const {userId}=req;

       const post=await PostModel.findById(postId).populate("likes.user")
       if(!post)
       {
        return res.status(404).send("Post Not Found");
       }

       return res.status(200).json(post.likes)
       

    }
    catch(error)
    {
        return res.status(500).send("Server Error")
    }
})

//create a comment

router.post('/comment/:postId',authMiddleWare,async(req,res)=>{
    try{
        const{postId}=req.params;
        const{text}=req.body;
        if(text.length<1)
        return res.status(401).send("Comment should be of atleast 1 character")

        const post=await PostModel.findById(postId);

        if(!post)
        return res.status(401).send("Post not found");

        const newComment={
            _id:uuid(),
            text,
            user:req.userId,
            date: Date.now()
        }

        await post.comments.unshift(newComment)
        await post.save()

        if(post.user.toString()!==userId)
       {
        await newCommentNotification(postId,newComment._id,userId,post.user.toString(),text)
       }

        return res.status(200).json(newComment._id)

    }
    catch(error)
    {
      res.status(401).send("Server Error")
    }
})

//delete a comment

router.delete('/:postId/:commentId',authMiddleWare,async(req,res)=>{
    try{
     const{postId,commentId}=req.params;
     const{userId}=req;

     const post=await PostModel.findById(postId)
     if(!post)
     return res.status(404).send("Post Not found")

     const comment= post.comments.find(comment=>comment._id===commentId)
     if(!comment)
     return res.status(404).send("Comment not found")

     const user=await UserModel.findById(userId)
     if(comment.user.toString()!==userId)
     {
       if(user.role==='root')
       {
         const indexOf=post.comments.map(comment=>comment._id).indexOf(commentId);
         await post.comments.splice(indexOf,1);
         await post.save();
         res.status(200).send("Deletd Succesfully")
       }
       else
       {
        res.status(401).send("Unauthorized")
       }
     }
     const indexOf=post.comments.map(comment=>comment._id).indexOf(commentId);
     await post.comments.splice(indexOf,1);
     await post.save();

     if(post.user.toString()!==userId)
       {
        await removeCommentNotification(postId,newComment._id,userId,post.user.toString(),text)
       }

     res.status(200).send("Deletd Succesfully")
    }

    catch(error)
    {
        res.status(401).send("Some error occured")
    }
})





module.exports=router