import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      <div>{showProducts && <Products />}</div>
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
