import react,{useState} from 'react'
import {Modal,Image,Card,Icon,Divider} from 'semantic-ui-react'
import PostComments from './PostComments'
import CommentInputField from './CommentInputField';
import Link from 'next/link'
import calculateTime from '../../utils/calculateTime'
import LikesList from './LikesList';

function NoImageModel({post,user,setlikes,likes,isLiked,comments,setComments})
{
    console.log("Haule")
  return(
    <>
     <Card fluid>
            <Card.Content>
                <Image floated="left" avatar src={post.user.profilePicUrl}/>
                <Card.Header>
                    <Link href={`/${post.user.username}`}>
                        <a >{post.user.name}</a>
                    </Link>
               </Card.Header>

              <Card.Meta>
                {calculateTime(post.createdAt)}
              </Card.Meta>
              {post.location && <Card.Meta content={post.location}/>}
              <Card.Description style={{fontSize:"18px",letterSpacing:"0.1px" ,wordSpacing:"0.35px"}}>
                {post.text}
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <Icon name={isLiked?"heart":"heart outline"} color="red" style={{cursor:"pointer"}} 
              onClick={()=>likePost(post._id,user._id,setlikes,isLiked?false:true)}/>
              
           <LikesList postId={post._id} trigger= {likes.length>0&&(
                <span className="spanLikesList">{`${likes.length} ${likes.length>1?"likes":"like"}`}</span>
              )}/>

            <Divider hidden/>

            <div style={{overflow:"auto",height:"60px",marginBottom:"8px"}}>
            {comments.length>0&&comments.map((comment,i)=>(
                <PostComments key={comment._id} comment={comment} postId={post._id} user={user} setComments={setComments}/>)
            )}
            </div>

            <CommentInputField user={user} postId={post._id} setComments={setComments}/>
            </Card.Content>
        </Card>
    </>
  )
}

export default NoImageModel
