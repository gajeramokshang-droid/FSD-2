// Write a program to create function based ReactJS app having an array of 6 people having mentioned age [70,83,38,65,49,94]
//  and display list of people whose age is greater than 60 using filter method. Also display total count of people whose age is greater
//   than 60 on the same page. Use props

import React from "react";
import P318 from './P318.jsx'

export default function Pb318(){
   age=[70,83,38,65,49,94]
   return(
    <>
    <P318 data={age}/>
    </>
   )
}