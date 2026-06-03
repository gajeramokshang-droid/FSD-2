/** to perform the following task create one main file name cc1.jsx and other two component file c1.jsx and c2.jsx pass 
 * first name and last namefrom cc1.jsx to cc2.jsx file and display welcome first name,last name in browser
 */

import React, { createContext } from 'react';
import Cc2 from './Cc2.jsx';

export const Fname = createContext();
export const Lname = createContext();

export default function Cc1() {
  return (
    <>
      <Fname.Provider value="Mokshang">
        <Lname.Provider value="Gajera">
          <Cc2 /> 
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
}

