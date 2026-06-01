// Write a program to build React app to perform the tasks as asked below using useState hook.• Add three buttons “Change Text”, 
// “Change Color”, “Hide/Show”.• Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.•
//  By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. • By clicking on 
//  “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while 
//  double clicking on the button.• Initially button text should be “Hide”. While clicking on it the button text 
//  should be changed to “Show” and text “React Js Hooks” will not be shown 
import { useState } from "react";

export default function Pb356() {
  const [text, setText] = useState("Christ is King");
  const [color, setColor] = useState("red");
  const [buttonText, setButtonText] = useState("Hide");
  const [hide, setHide] = useState("React js hook");

  function text11() {
    setText("Jesus is in me");
  }

  function colorss() {
    setColor("blue");
  }

  function showhide() {
    if (buttonText === "Hide") {
      setButtonText("Show");
      setHide("");
    } else {
      setButtonText("Hide");
      setHide("React js hook");
    }
  }

  return (
    <>
      {/* Display the text with dynamic color */}
      <p style={{ color }}>{text}</p>

      {/* Display the hide state */}
      <p>{hide}</p>

      {/* Buttons */}
      <button onClick={text11}>Text Change</button>
      <button onClick={colorss}>Change color</button>
      <button onClick={showhide}>{buttonText}</button>
    </>
  );
}
