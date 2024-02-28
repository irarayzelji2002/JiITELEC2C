import "./../App.css";
import Product from "./Product";
import Cart from "./Cart";
import { data } from "../data.js";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const motorList = data.map((motor) => (
    <Product
      motorObj={motor}
      setCartCount={setCartCount}
      cartCount={cartCount}
    />
  ));
  const newRelease = data.filter((motor) => motor.year >= 2022);
  const newMotorList = newRelease.map((motor) => (
    <Product
      motorObj={motor}
      setCartCount={setCartCount}
      cartCount={cartCount}
    />
  ));

  return (
    <div className="App">
      <h1>Motors For Sale</h1>
      <div>{newMotorList}</div>
      <Cart cartCount={cartCount} />
      {/* <img
        style={{ maxHeight: "300px", objectFit: "cover" }}
        src="https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/5e14280082ae4.jpg"
      />
      <h3>Views: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button> */}
    </div>
  );
}

export default App;
