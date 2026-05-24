import React from "react";

function Pb299() {
  // Function to trigger alert
 function showAlert() {
    alert("Welcome to LJU");
  }
  
  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default Pb299;

