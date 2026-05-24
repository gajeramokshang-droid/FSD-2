/** create a react appl using props to pass an obj from 1 component tot another component
 *    1.  create a parent component examp1.jsx
 *    2.  create an obj named details contain student name and university name(Oklahoma)
 *    3.  pass a detail obj to child compon example2.jsx in child compo receive the obj using props and display student name and university
 *        in browser
 */

import React from 'react';
import Examp2 from './Examp2';

function Examp1(){
    return(
        <>
        {
             <Examp2 name='Thaddeus' university='Oklahoma'/> 
        }
        </>
    )
}

export default Examp1