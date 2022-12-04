import axios from 'axios';
import bcrypt from 'bcryptjs'
import baseUrl from './baseUrl';
import catchErrors from './catchErrors';
import cookie from 'js-cookie';
import Router from 'next/Router';

export const registerUser=async (user,profilePicUrl,setError,setLoading)=>{
    setLoading(true)
    try
    {
      const res=await axios.post(`${baseUrl}/api/signup`,{user,profilePicUrl})
      setToken(res.data)
    }
    catch(error){
    setError(catchErrors(error))
    }
    setLoading(false);

}

export const loginUser=async (user,setError,setLoading)=>{
    setLoading(true)
    try
    {
      const res=await axios.post(`${baseUrl}/api/auth`,{user})
      setToken(res.data)
    }
    catch(error){
    setError(catchErrors(error))
    }
    setLoading(false)

}

export const redirectUser=(ctx,location)=>{
  if(ctx.req)
  {
    ctx.res.writeHead(302,{Location:location})
    ctx.res.end()
  }
  else
  {
    Router.push(location)
  }
}

export const logOut=(email)=>{
  cookie.set("userEmail",email)
  cookie.remove("token")
  Router.push('/login')
  Router.reload();
}

const setToken=(token)=>{
   cookie.set("token",token);
   Router.push("/");
}