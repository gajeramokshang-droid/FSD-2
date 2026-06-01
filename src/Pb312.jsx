// Create react app using function component to pass background color(green), font size(50px) font style(italic),
// text transform(uppercase) as properties to Example .js component and apply css to “This is an React Application” text
//  written in h1 tag in Example2.js component. Use props.

import React from "react";
import P312 from "./P312.jsx";

export default function Pb312(){
    return(
        <>
        <P312    style={{
          color: "green",
          fontSize: "50px",
          fontStyle: "italic",
          textTransform: "uppercase"
        }}/>
        </>
    )
}