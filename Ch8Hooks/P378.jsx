import { useContext } from "react";
import {Color} from './Pb378.jsx';
import img1 from './kanye.jfif'
export default function Pb378(){
    const color=useContext(Color);
    return(
        <>
         <div>
        <div style={{color:color,color:"blue",textAlign:"center"}}>
            <h1>KANYE {color}</h1>
        </div>
        </div>
    <form>
        <img src={img1} alt="Kanye" style={{alignItems:"center",padding:"20px",textAlign:"center",display:'flex',justifyContent:"center"}} /> 
        <body style={{backgroundColor:"red"}}>
        </body>
        </form>
        </>
    )
}

// <form style={{backgroundColor: "red", padding: "10px", textAlign: 'center'}}> 
// <img src={img1} alt="Kanye" /> 
// </form> 