import React from "react";

export default function P307(props){
    return(
        <>
        {props.data.filter((p)=>{
            if(p.age<=40){
                return true
            }
        }).map((p,index)=>(
            <p key={index}>{p.name}{p.age}</p>
        ))}
        </>
    )
}

