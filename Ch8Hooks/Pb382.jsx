// Create a React app with three components: parent component P.js and two 
// child
// components C1.js, C2.js.
// Use useContext hook to pass fontStyle and fontSize from the Parent 
// component P.js to
// the Child component C2.js.
// In Child component C1.js import child component C2.js .
// In C2.js display “Full stack Development” text in h1 heading with above 
// mentioned
// fontStyle and fontSize using context.

import { createContext,useContext} from "react";
import C1 from "./C1";

// Create and export the contexts
export const FontStyleContext = createContext();
export const FontSizeContext = createContext();

export default function Pb382() {
  return (
    <FontStyleContext.Provider value="italic">
      <FontSizeContext.Provider value="40px">
        <C1 />
      </FontSizeContext.Provider>
    </FontStyleContext.Provider>
  );
}
