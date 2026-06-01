// How can I fetch and display a single post by its ID?

import React,{useEffect,useState} from "react";

export default function Useffect3(){
    const[inst,setId]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(data=>data.json())
         .then(json=>setId(json))
    },[])

    return(
        <>
        
      {inst.map(mok=>(mok.id))}
        </>
    )
}

