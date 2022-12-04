import React,{createRef} from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container,Visibility,Sticky,Grid,Ref,Divider,Segment } from "semantic-ui-react";
import nprogress from 'nprogress';
import router,{useRouter} from "next/router";
import SideBar from './SideBar';
import Searchs from './Search';

function Layout({children,user}) {
  const contextRef=createRef();
  const router=useRouter()
  const messageRouter=router.pathname==="/messages"

  router.onRouteChangeStart=()=> nprogress.start();
  router.onRouteChangeComplete=()=> nprogress.done();
  router.onRouteChangeError=()=> nprogress.done();
  return (
    <>
      <HeadTags />
       {user?(<>
         <div style={{marginLeft:"1rem",marginRight:"1rem"}}>
           <Ref innerRef={contextRef}>
             <Grid>
              {!messageRouter ?(
                <>
                <Grid.Column floated="left" width={2}>
               <Sticky>
                 <SideBar user={user}/> 
               </Sticky>
              </Grid.Column>
              <Grid.Column width={10}>
                <Visibility ref={contextRef}>
                 {children}
                </Visibility>
              </Grid.Column>
              <Grid.Column floated="left"width={4}>
               <Sticky context={contextRef}>
                 <Segment basic>
                  <Searchs/>
                 </Segment>
               </Sticky>
              </Grid.Column>
                </>
              ) :(
                <>
                 <Grid.Column floated="left" width={1}/>
                   
                 <Grid.Column width={15}>
                  {children}
                </Grid.Column>
                </>
              ) }
             </Grid>
           </Ref>
         </div>
       </>):(
        <>
           <Navbar />
           <Container text style={{paddingTop:"1rem"}}>
             {children}
           </Container>
           </>
       )}
     
    </>
  );
}

export default Layout;
