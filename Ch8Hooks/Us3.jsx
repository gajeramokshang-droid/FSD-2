/** wap to build react app having button by clicking on" modified this text button" text should be changed to updatd text and vice-verse */

import { useState } from "react";

export default function Us3(){
    const[user,setUser]=useState("Modified this text")
    function jesus(){
        if(user=='Modified this text'){
            setUser("Christ is king")
        }
        else{
            setUser("Modify the text")
        }
    }
    return(
        <>
        <button onClick={jesus} style={{backgroundColor:"red",color:'white',fontSize:"16px"}}>{user}</button>
        </>
    )
}

