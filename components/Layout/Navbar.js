import React from "react";
import {Menu,Container,Icon} from 'semantic-ui-react';
import Link from 'next/link';
import  { useRouter } from "next/router";

function Navbar() {

  const router=useRouter()
 const CheckActive=(route)=>{
  return router.pathname===route
 }
  return( 
  <div>
     <Menu fluid borderless>
      <Container text>
      <Link href="/login">
      <Menu.Item active={CheckActive('/login')}>
        <Icon size="large" name="sign in"/>Login</Menu.Item>
      </Link>
      <Link href="/signup">
      <Menu.Item active={CheckActive('/signup')}>
      <Icon size="large" name="signup"/>Sign Up</Menu.Item>
      </Link>
      </Container>
     </Menu>
  </div>);
}

export default Navbar;
