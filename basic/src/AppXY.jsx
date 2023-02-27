import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  // const [x, setX] = useState("");
  // const [y, setY] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(e.clientX, e.clientY);
        // 수평으로만 이동 가능하게 하려면
        // setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      {/* <XY className="pointer" x={x} y={y} /> */}
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
