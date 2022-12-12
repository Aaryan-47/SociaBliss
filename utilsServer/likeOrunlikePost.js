const UserModel =require('../models/UserModel')
const PostModel =require('../models/PostModel')
const {newLikeNotification,removeLikeNotification}=require('../utilsServer/notificationActions')


const likeOrUnlikePost=async(postId,userId,like)=>{
  try{
    const post=PostModel.findById(postId)
    if(!post)
    {
        return {error:"Post Not Found"}
    }
    if(like)
    {
        const isLikedBefore=post.likes.filter(like=>like.user.toString()===userId).length>0
        if(isLikedBefore)
        {
            return {error:"Post Liked Before"}
        }
        await post.likes.unshift({user:userId})
        await post.save()

        if(post.user.toString()!==userId) //no notification is sent if u like your own post
        {
            await newLikeNotification(userId,postId,post.user.toString())
        }
    }
    else
    {
        const isNotLikedBefore=post.likes.filter(like=>like.user.toString()===userId).length===0
        if(isNotLikedBefore)
        {
            return {error:"Post not liked before"}
        }
        else
        {
            const indexOf=post.likes.map(like=>like.user.toString()).indexOf(userId)

            await post.likes.splice(indexOf,1)
            await post.save()

            if(post.user.toString()!==userId) //no notification is sent if u like your own post
        {
            await removeLikeNotification(userId,postId,post.user.toString())
        }
        }
    }

    const user=await UserModel.findById(userId)
    const {name,profilePicUrl,username}=user

    return {success:true,name,profilePicUrl,username,PostByUserId:post.user.toString()}

  }
  catch(error)
  {

  }
}

module.exports=likeOrUnlikePost