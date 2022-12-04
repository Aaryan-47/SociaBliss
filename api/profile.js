const express=require('express')
const router=express.Router()
const ProfileModel=require('../models/ProfileModel')
const authMiddleWare=require('../middleware/authMiddleware')
const UserModel = require('../models/UserModel')
const FollowerModel = require('../models/FollowerModel')
const PostModel = require('../models/PostModel')
const authMiddleware = require('../middleware/authMiddleware')
const { newFollowerNotification, removeFollowerNotification } = require('../utilsServer/notificationActions')

//get the profile
router.get('/:username',authMiddleWare,async(req,res)=>{
    const {username}=req.params
    
    try{
    const user=await UserModel.findOne({username:username.toLowerCase()})
    
    if(!user){
        return res.status(404).send('User Not Found')
    }

    const profile=await ProfileModel.findOne({user:user._id}).populate('user')
    const profileFollowStats=await FollowerModel.findOne({user:user._id});

    return res.json({
        profile,
        followersLength:profileFollowStats.followers.length>0?profileFollowStats.followers.length:0,
        followingLength:profileFollowStats.following.length>0?profileFollowStats.following.length:0
    })
}
catch(error)
{
    console.error(error)
    return res.status(500).send(`Server Error`)
}
})

//get the posts
router.get('/posts/:username',authMiddleWare,async (req,res)=>{
  const {username}=req.params;
  try{
     const user=await UserModel.findOne({username:username.toLowerCase()})

     if(!user)
     {
        return res.status(404).send("User Not Found");
     }

     const posts=PostModel.find({user:user._id}).sort({createdAt:-1}).populate('user')
     return res.json(posts)
  }

  catch(error){
    console.error(error)
    return res.status(500).send(`Server Error`)
  }
})

//get the followers
router.get('/followers/:userId',authMiddleware,async(req,res)=>{
    const {userId}=req.params;
    try{
        const user=await FollowerModel.findOne({user:userId}).populate('followers.user')
        return res.json(user.followers)
    }
    
    catch(error){
       console.error(error)
       return res.status(500).send('Server Error')
    }
})

//get the following
router.get('/following/:userId',authMiddleware,async(req,res)=>{
    const {userId}=req.params;
    try{
        const user=await FollowerModel.findOne({user:userId}).populate('following.user')
        return res.json(user.following)
    }
    
    catch(error){
       console.error(error)
       return res.status(500).send('Server Error')
    }
})

//follow a user
router.post('/follow/:userToFollowId',authMiddleware,async(req,res)=>{

    const {userId}=req
    const {userToFollowId}=req.params
    try{

        const user=FollowerModel.findOne({user:userId})
        const userToFollow=FollowerModel.findOne({user:userToFollowId})

        if(!user||!userToFollow)
        {
            return res.status(404).send('User Not Found')
        }

        //check if user has not followed him before

        const isFollowing=user.following.length>0&&
        user.following.filter(following=>following.user.toString()===userToFollowId).length>0

        if(isFollowing)
        {
            return res.status(202).send('User already followed')
        }

        await user.following.unshift({user:userToFollowId})
        await user.save()

        await userToFollow.followers.unshift({user:userId})
        await userToFollow.save()

        await newFollowerNotification(userId,userToFollowId)

        return res.status(200).send("Success")

    }
    catch(error){
        console.error(error)
        return res.status('500').send('Server Error')
    }
})

//unfollow a user

router.put('/unfollow/:userToUnfollowId',authMiddleWare,async (req,res)=>{
    const{userId}=req
    const {userToUnfollowId}=req.params

    try{
        const user=FollowerModel.findOne({user:userId})
        const userToUnfollow=FollowerModel.findOne({user:userToUnfollowId})

        if(!user||!userToUnfollow)
        {
            return res.status(404).send('User Not Found')
        }

        const isFollowing=user.following.length>0&&
        user.following.filter(following=>following.user.toString()===userToUnfollowId).length>0

        if(isFollowing)
        {
            return res.status(202).send('User not followed previously')
        }

        const removeFollowing=user.following
                      .map(following=>following.user.toString()).indexOf(userToUnfollowId)
        
        await user.following.splice(removeFollowing,1)
        await user.save()

        const removeFollowers=userToUnfollow.followers.map(follower=>follower.user.toString()).indexOf(userId)

        await userToUnfollow.followers.splice(removeFollowers,1)
        await userToUnfollow.save()

        await removeFollowerNotification(userId,userToUnfollowId)

        return res.status(200).send('Success')

    }

    catch(error){
        console.error(error)
        return res.status('500').send('Server Error')
    }
})

//update profile



module.exports=router