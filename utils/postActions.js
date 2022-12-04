import axios from 'axios';
import baseUrl from './baseUrl';
import catchErrors from './catchErrors';
import cookie from 'js-cookie';

const Axios = axios.create({
  baseURL: `${baseUrl}/api/posts`,
  headers: { Authorization: cookie.get("token") }
});

export const submitNewPost = async (
    text,
    location,
    picUrl,
    setPosts,
    setNewPost,
    setError
  ) => {
    try {
      const res = await Axios.post("/", { text, location, picUrl });
  
      setPosts(prev => [res.data, ...prev]);
      setNewPost({ text: "", location: "" });
    } catch (error) {
      const errorMsg = catchErrors(error);
      setError(errorMsg);
    }
  };

export const deletePost=async(postId,setPosts,setShowToastr)=>
{
  try{
     await Axios.delete(`/${postId}`)
     setPosts(prev=>prev.filter(post=>post._id!==postId))
     setShowToastr(true)
  }
  catch(error)
  {
    console.log(error)
  }
};

export const likePost=async(postId,userId,setlikes,like=true)=>{
   try{
    if(like)
    {
      await Axios.post(`/like/${postId}`);
      setlikes(prev=>[...prev,{user:userId}])
    }
    else if(!like)
    {
      await Axios.put(`/unlike/${postId}`);
      setlikes(prev=>prev.filter(like.user!==userId))
    }
   }
   catch(error)
   {
    alert(catchErrors(error))
   }
}

export const postComment=async(postId,user,text,setComments,setText)=>{
  try{
     const res=await Axios.post(`/comment/${postId}`,{text});

     const newComment={
      _id:res.data,
      user,
      text,
      date:Date.now()
     }
     console.log(newComment)
     setComments(prev=>[newComment,...prev])
     setText("");

  }
  catch(error)
  {
    console.log(error)
  }
}