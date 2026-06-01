// Write a program to build React app having text and button to show and hide the text

import { useState } from "react";

export default function Pb360(){
    const[buttontext,setButtontext]=useState("Hide");
    const[hide,setHide]=useState("React js hook");

    function showhide(){
        if(buttontext==='Hide'){
            setButtontext("show");
            setHide("")
        }
        else{
            setButtontext("Hide")
            setHide("React Js ")
        }
    }

    return(
        <>
         <p>{hide}</p>
        <button onClick={showhide}>{buttontext}</button>
        </>
    )
}

// buttontext → stores the current label of the button ("Hide" or "Show").

// hide → stores the text that should be displayed ("React js hook" or empty string).

// setButtontext and setHide are functions React gives you to update those values.