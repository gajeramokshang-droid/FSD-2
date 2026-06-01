/** wap to build react app having a heading lj university in red color by clicking on change color button to blue change the color of text to blue */


import { useState } from "react";

export default function Us3(){
    const[user,setUser]=useState("Modified this text")
    const[color,setColor]=useState("blue")
    function jesus(){
        if(user=='Modified this text'){
            setColor('red')
        }
        else{
            setUser("Modify the text")
            setColor("blue")
        }
    }
    return(
        <>
        <button onClick={jesus} style={{backgroundColor:color,color:'white',fontSize:"16px"}}>{user}</button>
        </>
    )
}