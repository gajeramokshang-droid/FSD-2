import React,{useState,useEffect} from 'react'

// How can I fetch and display a list of users from an API in React?

export default function Useffect2(){
    const[users,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(json=>setUser(json))
    },[]);

    return(
        <>
        {users.map(mokshang=>(mokshang.name)+(mokshang.email))}
        </>
    )
}

