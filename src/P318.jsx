import React from "react";

export default function P318(props){
     const people=props.data.filter(age=>age>60)
    return(
        <>
       {people.map((age,index)=>({age}))}
        </>
    )
}