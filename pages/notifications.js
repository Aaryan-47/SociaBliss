import react from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import {parseCookies} from 'nookies';
import cookie from 'js-cookie';
import {Feed,Segment,Divider,Container} from 'semantic-ui-react'
import {NoNotifications} from '../components/Layout/NoData'
import LikeNotification from '../components/Notification/LikeNotification'
import CommentNotification from '../components/Notification/CommentNotification'
import FollowerNotification from '../components/Notification/FollowerNotification'


function Notification({notifications,errorLoading,user,userFollowStats})
{
   useEffect(()=>{
      const notificationRead=async()=>{
        try{
          await axios.post(`${baseUrl}/api/notifications`,{headers:{Authorization:cookie.get('token')}})
        }
        catch(error)
        {
          console.log(error)
        }
      }
      notificationRead()

   },[])

   const[loggedUserFollowStats,setUserFollowStats]=useState(userFollowStats)

   return(
    <>
     <Container style={{marginTop:"1.5rem"}}>
      {notifications.length>0 ?(<>
        <Segment color="teal" raised>
          <div style={{maxHeight:"40rem",overflow:"auto",height:"40rem",position:"relative",width:"100%"}}>

          </div>

          <Feed size="small">
            {notifications.map(notification => <>
            {notification.type==="newLike" && notification.post!==null && <LikeNotification user={user} notification={notification}/>}
            {notification.type==="newComment" && notification.post!==null && <CommentNotification user={user} notification={notification}/>}
            {notification.type==="newFollower" && notification.post!==null && <FollowerNotification notification={notification} loggedUserFollowStats={loggedUserFollowStats} setUserFollowStats={setUserFollowStats}/>}

            </>)}
          </Feed>

        </Segment>
      
      </>): <NoNotifications/> }
       <Divider hidden/>
     </Container>
    </>
   )
}

Notification.getInitialProps=async (ctx)=>
{
  try{
    const {token}=parseCookies(ctx);
    
    const res=await axios.get(`${baseUrl}/api/notifications`)
  }
  catch(error)
  {
    console.log(error)
  }
}

export default Notification