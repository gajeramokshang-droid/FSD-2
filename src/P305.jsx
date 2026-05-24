// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from the array and display all remaining digits of the 
// array [3,5,11,4,17,8,21,2,26,13,8]. Pass values as props.

import React  from "react";

export default function P305(props){
    return(
        <>
        {props.data.filter(p=>{
            if(p<10){
                return false
            }
            else{
                return true;
            }
        }
        ).map((p,index)=>(
            <div key={index}>{p}</div>
        ))}
        </>
    )
}

