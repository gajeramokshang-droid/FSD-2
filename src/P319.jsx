import React from "react";

export default function P319(props){

    function age(mary){
        alert("Your product added")
    }
   return(
    <>
    {props.data.map((christ,index)=>(
        <div key={index}>
        <p>{christ.productname}</p>
        <button onClick={() => age(christ)}>
            Add to cart
          </button>
          </div> 
    ))}
    </>
   )
}