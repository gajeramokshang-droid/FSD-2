// Write a program to build React app having 2 input number fields (Number 1 and Number 2) 
// and display the entered value on the same page. And then click on add button to calculate
//  the addition of two numbers. Display the addition in h2 tag.  useState

import { useState } from "react";

export default function AddNumbers() {
  // Step 1: create states for both numbers and the sum
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  // Step 2: function to add numbers
  function handleAdd() {
    setSum(Number(num1) + Number(num2));
  }

  return (
    <>
      <h1>Add Two Numbers</h1>

      <input type="number" placeholder="Number 1"  onChange={(e) => setNum1(e.target.value)}/>
      <br/>

      <input type="number" placeholder="Number 2"  onChange={(e) => setNum2(e.target.value)}/>
      <br />

      {/* Show entered values */}
      <p>Number 1 entered: {num1}</p>
      <p>Number 2 entered: {num2}</p>

      {/* Button */}
      <button onClick={handleAdd}>Add</button>

      {/* Show result */}
      <h1>Sum:{sum}</h1>
    </>
  );
}
// onChange={(e) => setNum1(e.target.value)} → updates the state whenever you type