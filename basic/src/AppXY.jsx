import React, { useState } from "react";
import "./AppXY.css";
import XY from "./components/XY";

export default function AppXY() {
  const [xmouse, setXmouse] = useState("");
  const [ymouse, setYmouse] = useState("");

  const handleMouseMove = (event) => {
    setXmouse(event.clientX);
    setYmouse(event.clientY);
  };

  return (
    <div className="container" onMouseMove={(e) => handleMouseMove(e)}>
      <XY className="pointer" xmouse={xmouse} ymouse={ymouse} />
    </div>
  );
}
