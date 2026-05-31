// Create a React function component named File1 that receives two props, productName and price.
// The component should display the product name and price. Additionally, add a button labeled "Add to cart" to the component.
// When the button is clicked onClick event triggered and an alert should be displayed with the message "Your Product is Added to cart!".

    import React from "react"
    import P319 from './P319.jsx'

    export default function Pb319(){
        const christ=[{
            productname:"Mug",
            price:"$100"
        },
        {
            productname:"Castle",
            price:"10Million"
        }
    ]
    return(
        <>
        <P319 data={christ}/>
        </>
    )
    }