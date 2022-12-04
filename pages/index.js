import react from 'react';
import axios from 'axios';
import CreatePost from '../components/Post/CreatePost'
import CardPost from '../components/Post/CardPost'
import {Segment} from 'semantic-ui-react'
import {parseCookies} from 'nookies'
import {NoPosts} from '../components/Layout/NoData'
import baseUrl from '../utils/baseUrl';
import {PostDeleteToastr} from '../components/Layout/Toastr'
import InfiniteScroll from 'react-infinite-scroll-component';
import {PlaceHolderPosts,EndMessage} from '../components/Layout/PlaceHolderGroup'
import cookie from 'js-cookie';

function Index({user,postsData,errorLoading})
{
  const [posts,setPosts]=react.useState(postsData);
  const[showToastr,setshowToastr]=react.useState(false)
  const[hasMore,sethasMore]=react.useState(true)
  
  const[pageNumber,setpageNumber]=react.useState(2)

    react.useEffect(()=>{
     document.title=`Welcome ${user.name.split(' ')[0]}`
     console.log(posts)
    },[])

    react.useEffect(()=>{
      showToastr&& setTimeout(()=>setshowToastr(false),3000)
    },[showToastr])

    if(posts.length===0||errorLoading)
    {
      console.log(posts)
      return(
        <>
        <NoPosts/>
        <CreatePost user={user} setPosts={setPosts}/>
        </>
      )
    }

    const fetchDataOnScroll=async()=>{
       try{
          const res=await axios.get(`${baseUrl}/api/posts`,{headers:{Authorization:cookie.get('token')},params:{pageNumber}})

          if(res.data.length===0)
          {
            sethasMore(false)
          }
          setPosts(prev=>[...prev,...res.data])
          setpageNumber(prev=>prev+1)

       }
       catch(error)
       {
        alert('Error Fetching Posts')
       }
    }
  return(
    <>
    {showToastr&&<PostDeleteToastr/>}
    <Segment>
    <CreatePost user={user} setPosts={setPosts}/>
    
    {posts.map(post => (
            <CardPost
              key={post._id}
              post={post}
              user={user}
              setPosts={setPosts}
              setShowToastr={setshowToastr}
            />
          ))}
    </Segment>
    </>
  )
}

Index.getInitialProps=async (ctx)=>
{
  try{
    const{token}=parseCookies(ctx)
    const res=await axios.get(`${baseUrl}/api/posts`,{
      headers:{Authorization:token},
      params:{pageNumber:1}
    });
    return {postsData:res.data};
  }
  catch(error)
  {
    return {errorLoading:true}
  }
}

export default Index;