// Create a React app with two components using functional component: 
// Parent and Child. Use useContext to pass two colors from the Parent 
// component to the Child component. The Child component should display 
// the received color as its background(red) and other color(green) on its font 
// to display “Welcome to LJU”.

import { useState,useContext, createContext } from "react";
import P378 from './P378.jsx'

export const Color=createContext();

export default function Pb378(){
    return(
        <>
        <Color.Provider value='WEST'>
           <P378/>
        </Color.Provider>
        </>
    )
}

