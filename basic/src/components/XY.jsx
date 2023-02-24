import React, { useState } from "react";

export default function XY(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ left: props.xmouse, top: props.ymouse }}
      ></div>
    </>
  );
}

// onMouseMove = {handleMove}
