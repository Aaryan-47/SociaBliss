import {useState,useEffect,useRef} from 'react';
import {HeaderMessage, FooterMessage} from '../components/common/WelcomeMessage.js'
import CommonInput from '../components/common/CommonInput.js'
import ImageDrop from '../components/common/ImageDrop.js'
import {Form,Message,Segment,Divider,Button} from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl.js';
import{registerUser,loginUser} from '../utils/authUser'
import uploadPic from '../utils/uploadPicToCloudinary'
import axios from 'axios';
function Signup()
{
    const[userDetails,setuserDetails]=useState({name:"",password:"",email:"",bio:"",facebook:"",youtube:"",twitter:"",insta:""})
    const[showSocial,setshowSocial]=useState(false)
    const[showPassword,setshowPassword]=useState(false)
    const[usernameLoading,setusernameLoading]=useState(false)
    const[username,setusername]=useState('')
    const[errorMsg,seterrorMsg]=useState(false)
    const[usernameAvailable,setusernameAvailable]=useState(true)
    const[formLoading,setformLoading]=useState(false)
    const[submitDisable,setsubmitDisable]=useState(true)

    const[media,setmedia]=useState(null)
    const[mediaPreview,setmediaPreview]=useState(null)
    const[highlighted,sethighlighted]=useState(false)
    const inputRef=useRef();

    const{name,password,email,bio}=userDetails

    const handle=async (e)=>{
      e.preventDefault()
      setformLoading(true)
      let profilePicUrl;
      if(media!==null)
      {
        profilePicUrl=await uploadPic(media);
      }
      if(media!==null&&!profilePicUrl)
      {
        setformLoading(false);
        return seterrorMsg("Error Uploading Image")
      }

      await registerUser(userDetails,profilePicUrl,seterrorMsg,setformLoading)
    }

    const Change=(e)=>{
      const{name,value,files}=e.target
      if(name==="file")
      {
        setmedia(files[0])
        setmediaPreview(URL.createObjectURL(files[0]))
        //console.log(mediaPreview)
      }
      setuserDetails(prev=>({...prev,[name]:value}))
    }

    useEffect(()=>{
     const Check=Object.values({name,email,bio,password}).every(item=>Boolean(item))
     console.log(Check)
     Check?setsubmitDisable(false):setsubmitDisable(true)
    },[userDetails])

    const CheckUsername=async ()=>{
      setusernameLoading(true);
      try{
      const res=await axios.get(`${baseUrl}/api/signup/${username}`)
      if(errorMsg!==null)
      seterrorMsg(null)
      if(res.data==='Available')
      {
        //console.log("lauda")
       setusernameAvailable(true);
       setuserDetails(prev=>({...prev,username:username}))
      }
    }
    catch(error){
      seterrorMsg("Username Not Available")
      setusernameAvailable(false)
      console.log(error)
    }
    setusernameLoading(false)
    }

    useEffect(()=>{
     if(username==="")
     {
      setusernameAvailable(false);
     }
     else
     {
      CheckUsername()
     }
    },[username])

    return(
        <>
        <HeaderMessage/>
         <Form loading={formLoading} error={errorMsg!==null} onSubmit={handle} >
           <Message
           error
           heading="Error!!"
           content={errorMsg}
           onDismiss={()=>seterrorMsg(null)}
           />
           <Segment>
            <ImageDrop highLighted={highlighted} sethighLighted={sethighlighted} inputRef={inputRef} Change={Change}
            mediaPreview={mediaPreview} setmediaPreview={setmediaPreview}/>
           <Form.Input 
           label="name" placeholder="Name" required
           name="name"
           value={name} fluid icon="user" 
           iconPosition="left" 
           onChange ={Change}/>

           <Form.Input 
           label="Email" placeholder="Email" 
           value={email} fluid icon="envelope"
           name="email"
           type="email" 
           iconPosition="left" 
           onChange ={Change}/>

           <Form.Input 
           label="password" placeholder="Password" required
           name="password"
           value={password} fluid icon={{name:"eye",link:true,circular:true,onClick:()=>setshowPassword(!showPassword)}}
           iconPosition="left"
           type={showPassword?"text":"password"} 
           onChange ={Change}/>

           <Form.Input 
           loading={usernameLoading}
           error={!usernameAvailable}
           label="Username" placeholder="Username" required
           value={username} fluid icon={usernameAvailable?"check":"close"}
           iconPosition="left"
           type={showPassword?"text":"password"} 
           onChange ={e=>{
            setusername(e.target.value)
           }}/>

           <CommonInput userDetails={userDetails} showSocial={showSocial} setshowSocial={setshowSocial} Change={Change}/>

           <Divider/>
           <Button content="Submit" type="submit" color="orange" disabled={submitDisable||!usernameAvailable} icon="signup"/>
           </Segment>
         </Form>


        <FooterMessage/>
        </>
    )
}

export default Signup;