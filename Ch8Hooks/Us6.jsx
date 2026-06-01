/** wap having a button which changes img by clicking on it */

import { useState } from "react"; 
import img1 from './download (4).jfif'; 
import img2 from './download (3).jfif';

export default function Us6(){      
    const [image, setImage] = useState(img1);
    
    function ahmad(){         
        setImage(img2);     
    }     
    
    return(         
        <>         
        <img src={image}  />
        
        <button onClick={ahmad}>Click it</button>         
        </>     
    ); 
}
