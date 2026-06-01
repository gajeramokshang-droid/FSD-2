/** Use state Syntax */
/** CH8 Hooks */
/**  Write a prog to build react app having a button which increase count by 1 while clicking on it. */

import { useState } from "react";

export default function Us1(){
    const [count /**Current stat */,setCount /**function to update */]=useState(0);  /**Initial state 0 */

    function handlecount(){
        setCount(count+1)
    }
    return(
        <>
        <p> You Clicked {count} times</p>
        <button onClick={handlecount}>Click here</button>
        </>
    )
}

 