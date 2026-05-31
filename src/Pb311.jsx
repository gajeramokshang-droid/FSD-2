// Create react app to pass product image, name and price as properties from one component to another component. 
// Add an array of objects with pic, name and price properties of 2 products. Display Image name and price of the products in browser using map method.
import React from 'react';
import img1 from './Christ_in_the_Wilderness_-_Ivan_Kramskoy_-_Google_Cultural_Institute';
import img2 from './christtheredeemer';

export default function Pb311(){
    const jesus=[{
        name:"Jesus Christ",
        pic:img1
    },
    {
        name:"Mokshang",
        pic:img2
    }
]

return(
    <>
        {jesus.map((p,index)=>(
              <div key={index}>
       
           <p> Name:{p.name} </p>
           <img src={p.pic}/>
           </div>
        ))}
  
    </>
)
}