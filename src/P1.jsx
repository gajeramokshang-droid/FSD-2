/** create a react application usingh props to diaplay student details
    1.  create a parent component p1.jsx 
    2.  pass the following data to child component p2.jsx using props data is studentname,rollno and marks
    3.  in child component display student details and increse marks by 1 and display updated marks
 */

/* Passing props to the components */

import React from 'react';
import P2 from './P2';

function P1() {
  return (
    <>
      <P2 name='Thaddeus' roll='1' marks={99} />
    </>
  );
}

export default P1;
