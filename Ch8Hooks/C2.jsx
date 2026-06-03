import { useContext } from "react";
import { FontStyleContext, FontSizeContext } from "./Pb382";

export default function C2() {
  // Consume the context values
  const fontStyle = useContext(FontStyleContext);
  const fontSize = useContext(FontSizeContext);

  // Apply styles inline to the heading
  const headingStyle = {
    fontStyle: fontStyle,
    fontSize: fontSize
  };

  return (
    <h1 style={headingStyle}>
      Full stack Development
    </h1>
  );
}
