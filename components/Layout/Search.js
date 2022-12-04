import react from 'react';
import {useState,useEffect } from 'react'
import {List,Search,Image} from 'semantic-ui-react'
import axios from 'axios';
import cookie from 'js-cookie';
import Router from 'next/router';
import baseUrl from '../../utils/baseUrl'

function Searchs()
{
    const[text,settext]=useState("");
    const [loading,setloading]=useState(false)
    const [results,setresults]=useState([])

    const handleChange=async(e)=>{
        const{value}=e.target;
        settext(value)
        setloading(true)
        try{
           const token=cookie.get("token");
           const res=await axios.get(`${baseUrl}/api/search/${value}`,{headers:{Authorization:token}})
           if(res.data.length===0)
             return setloading(false)
        
            setresults(res.data)
            //console.log(results)
        } 
        catch(error)
        {
         console.log("Error Searching");
        }
        setloading(false)
        
    }
    return(
        <>
         <Search onBlur={()=>{results.length>0&&setresults([])
         loading&&setloading(false)
        settext('')
          }} 
         loading={loading} 
         value={text}
         resultRenderer={ResultRenderer} 
         results={results} 
         onSearchChange={handleChange} 
         minCharacters={1}
         onResultSelect={(e,data)=>{
            Router.push(`/${data.result.username}`)
         }}>
         </Search>
        </>
    )
}

const ResultRenderer=({_id,profilePicUrl,name})=>{
    //console.log(props)
    return (
        <List key={_id}>
            <List.Item>
                <Image src={profilePicUrl} alt="Profile" avatar/>
                <List.Content header={name} as="a"/>
            </List.Item>
        </List>
    )
}

export default Searchs;
