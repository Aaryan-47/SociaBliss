import {Icon,Message,Divider} from 'semantic-ui-react';
import {useRouter} from 'next/router';
import Link from 'next/link'

export const HeaderMessage=()=>{
  const router=useRouter();
  const checkSignUp=(router.pathname==='/signup')

  return(
    <Message 
    header={checkSignUp?"Get Started":"Welcome Again"} info
    icon={checkSignUp?"settings":"privacy"}
    content={checkSignUp?"Create a new Account":"Login with existing ID and password"}
    />

  );
};

export const FooterMessage=()=>{
    const router=useRouter();
    const checkSignUp=(router.pathname==='/signup')
  
    return(
        <>
      {checkSignUp ?(
      <>
       <Message attached="bottom" warning >
        <Icon name="help"/>
        Existing User ? <Link href="/login">Login Here</Link>
        </Message>
      </>
      ):(
      <>
       <Message attached="bottom" info>
         <Icon name="lock"/>
         <Link href="/reset">Forgot Password</Link>
       </Message>

       <Message attached="bottom" warning>
         <Icon name="help"/>
         New User? <Link href="/signup">Sign Up</Link>
       </Message>
      </>
      )}
   </>
    );
}