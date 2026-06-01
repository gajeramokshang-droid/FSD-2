/** useReducer */

/** Write react component to increase value by 5 while clicking on btn initialize value with 20 
 * use usereducer to perform the task.
 */

import { useReducer } from "react";

function reducer(state,action){
    return state+action
}

export default function Ur16(){
    const[state,dispatch]=useReducer(reducer,20)
    return(
        <div align='center'>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Click Me</button>
        </div>
    )
}
