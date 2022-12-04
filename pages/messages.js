import axios from 'axios';
import {useState,useEffect,useRef} from 'react';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import io from 'socket.io-client'
import {Segment,Divider,Comment,Grid,Icon} from 'semantic-ui-react';
import ChatList from '../components/Chats/ChatList';
import ChatListSearch from '../components/Chats/ChatListSearch';
import {useRouter} from 'next/router'
import {NoMessages} from '../components/Layout/NoData'

function Messages({chatData})
{
    const[chats,setChats]=useState(chatData)
    const router=useRouter()

    const socket=useRef()
    useEffect(()=>{
        if(chats.length>0 && !router.query.message)
        {
            router.push(`/messages?message=${chats.messagesWith}`,undefined,{shallow:true})
        }

        if(!socket.current)
        {
            socket.current=io(baseUrl)
        }
      },[])
    
    return(
        <>
        <Segment padded basic size="large" style={{marginTop:"5px"}}>
          <Header icon="home" content="Go Back" onClick={()=>{router.push("/")}} style={{cursor:"pointer"}}/>
          <Divider hidden/>

          <div style={{marginBottom:"10px"}}>
           <ChatListSearch user={user} chats={chats} setChats={setChats}/>
           {chats.length>0 ? (<>
                 <Grid stackable>
                   <Grid.Column width={4}>
                     <Comment.Group size="big">
                        <Segment raised style={{overFlow:"auto",maxHeight:"32rem"}}>
                          {chats.map( (chat,i) =>(
                            <ChatList key={i} chat={chat} setChats={setChats}/>
                          )
                            )}
                        </Segment>
                     </Comment.Group>
                   </Grid.Column>   
                 </Grid>     
           </>) :(<>
           <NoMessages/>
           </>)}
          </div>
        </Segment>
        </>
    )

}

Messages.getInitialProps=async(ctx)=>
{
    try{
       const {token} =parseCookies(ctx);

       const res=await axios.get(`${baseUrl}/api/chat`,{headers:{Authorization:token}})

       return {chatData:res.data}
    }
    catch(error)
    {
        alert(error);
    }
}