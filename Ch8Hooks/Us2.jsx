/** Create a prog to build react app having buttons to increment and decrement the number while clicking that respective button 
 * also increment of the number should be performed only if the number is less than 10 and decrement of number should be performed if 
 * the number is greater than 0
*/

import { useState } from "react";

export default function Us2(){
    const [count,setCount]=useState(0)

    function increment(){
        setCount(count+1)
    }
    function decre(){
        setCount(count-1)
    }
    return(
        <>
        <p> You Clicked button {count} times</p>
        <button onClick={increment}>Click</button>
        {count>0 && (
            <button onClick={decre}>Click Me</button>
        )}
        </>
    )
}

