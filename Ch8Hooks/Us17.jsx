//create react app to increase value by 1 while clicking on button increment and decrease value by 1 while clicking button decrement
//initialise value with zero use usereducer to perform this task
import { useReducer } from "react";
function reducer(state,action)
{
    if (action.type=="increment")
    {
        return state+1
    }
    else if (action.type=="decrement")
    {
        return state-1
    }
}
function Ur2()
{
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div align="center">
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>INC</button>
            <button onClick={()=>dispatch({type:"decrement"})}>DEC</button>
        </div>
    )
}
export default Ur2