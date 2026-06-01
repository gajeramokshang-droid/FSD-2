/** Wap initially button text should be hide while clicking on it button text should be changed to show 
 *  and text react js hooks will not be shown and vice versa
 */

import { useState } from "react";

export default function Us5(){
    const[hidetext,setHide]=useState("React js hooks");
    const[buttontext,setButtonText]=useState("Hide");
    function showhide(){
        if(buttontext=='Hide'){
            setButtonText("show");
                setHide("")
        }
        else{
            setButtonText("Hide");
            setHide("React js hook")
        }
                
    }
    return(
        <>
        <button onClick={showhide}>{buttontext}</button>
        <h1>{hidetext}</h1>
        </>
    )
}