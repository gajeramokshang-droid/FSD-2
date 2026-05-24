// Create React app to pass color(red), background color(yellow), font size(25px) and font style(italic) as properties to component and apply css to 
// "Lj Students" text written in p tag. use Props


export default function Pb306(){
    const Jesus={
        color:'yellow',
        fontSize:"25px",
        fontStyle:"italic",
    }
    return(
        <>
        <p style={Jesus}>Christ is King</p>
        </>
    )
}