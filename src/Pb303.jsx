// Create React app to pass student name, roll number, t1 marks and t2 marks of 2 students to component and read the information and display in table format. Use Props.
import React from "react";
import P303 from './P303';
export default function Pb303(){
    const data=[{
        name:"Jesus Christ",
        rollnumber:1,
        t1marks:25,
        t2marks:24
    },{
          name:"Mokshang",
        rollnumber:2,
        t1marks:20,
        t2marks:21
    }]
    return(
        <>
        <P303 store={data}/>
        </>
    )
}