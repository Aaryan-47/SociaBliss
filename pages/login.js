import react from 'react';
import {HeaderMessage, FooterMessage} from '../components/common/WelcomeMessage.js'
import {Form,Message,Segment,Divider,Button} from 'semantic-ui-react';
import{loginUser} from '../utils/authUser'
function Login()
{
  const [user,setuser]=react.useState({email:"",password:""})
  const [submitDisable,setsubmitDisable]=react.useState(true)
  const[formLoading,setformLoading]=react.useState(false)
  const{email,password}=user;
  const[showPassword,setshowPassword]=react.useState(false)
  const[errorMsg,seterrorMsg]=react.useState(false)

  react.useEffect(()=>{
    const Check=Object.values({email,password}).every(item=>Boolean(item))
    Check?setsubmitDisable(false):setsubmitDisable(true)
  })

  const Change=(e)=>{
    const{name,value}=e.target
    setuser(prev=>({...prev,[name]:value}))
  }

  const handle=async (e)=>{
    e.preventDefault()
    await loginUser(user,seterrorMsg,setformLoading)
  }

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

           <Divider/>
           <Button content="Submit" type="submit" color="orange" disabled={submitDisable} icon="sign in"/>
        </Segment>
      </Form>


    <FooterMessage/>
    </>
  )
}

export default Login;