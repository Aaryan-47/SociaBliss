import {Form,Segment,Image,Icon,Header} from 'semantic-ui-react';

function ImageDrop({
    highLighted,
    sethighLighted,
    inputRef,
    Change,
    mediaPreview,
    setmediaPreview,
    setMedia
})
{
   // console.log(mediaPreview)
   return(
    <>
    <Form.Field>
        <Segment placeholder basic secondary>
           <input type="file"
           accept="image/*"
           style={{display:"none"}}
           onChange={Change}
           name="file"
           ref={inputRef}/>
           
           <div>
            {mediaPreview===null?(<>
             <Segment color={highLighted?"green":""} placeholder basic>
                <Header icon>
                    <Icon name="file image outline" style={{cursor:"pointer"}} onClick={()=> inputRef.current.click()}/>
                    Drag and Drop or Browse your System
                </Header>
             </Segment>
            </>):(<>
              <Segment color="green">
                <Image src={mediaPreview} size="meduim" centered style={{cursor:"pointer"}} onClick={()=>inputRef.current.click()}></Image>
              </Segment>
            </>)}
           </div>
        </Segment>
    </Form.Field>
    </>
   )
}

export default ImageDrop;