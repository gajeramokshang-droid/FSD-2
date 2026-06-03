
import { useContext } from "react";
import { Fname,Lname } from "./Cc1.jsx";
export default function Cc2(){
    const fn=useContext(Fname);
    const ln=useContext(Lname);
    return(
        <>
        <h1>Parth {fn}{ln}</h1>
        </>

    )
}

