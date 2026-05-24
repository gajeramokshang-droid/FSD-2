// Write react js script to perform the tasks as asked below.Add an array of objects which contains name and age of people. 
// Apply filter to find people with age less than 40. And display name of all people using map function. Use props.

import React from "react";
import P307 from './P307';

export default function Pb307(){
    const Joseph=[{
        name:"St.Joseph",
        age:40
    }]
    return(
        <>
        <P307 data={Joseph}/>
        </>
    )
}