import {Form,Button,Message,Segment,TextArea, Divider} from 'semantic-ui-react';

function CommonInput({userDetails:{bio,facebook,twitter,insta},Change,showSocial,setshowSocial})
{
   return(
    <>
     <Form.Field
     required
     control={TextArea}
     name="bio"
     label="Bio"
     value={bio}
     onChange={Change}
     placeholder="bio"/>
    
    <Button content="Add Social Links" color="red" icon="at" type="button" onClick={()=>setshowSocial(!showSocial)}/>
    {showSocial&&<>
    <Divider/>
    <Form.Input
     icon="facebook f"
     iconPosition='left'
     name="facebook"
     value={facebook}
     onChange={Change}/>

    <Form.Input
     icon="twitter"
     iconPosition='left'
     name="twitter"
     value={twitter}
     onChange={Change}/>

    <Form.Input
     icon="instagram"
     iconPosition='left'
     name="insta"
     value={insta}
     onChange={Change}/>
     
     <Message icon="attention" info size="small" header="Social Media Links are optional"/>
    
    </>}
    </>
   )
}

export default CommonInput

