import React, { useState, useEffect } from "react";

function Product({ motorObj, setCartCount, cartCount }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function setAddCart() {
    setAddedToCart(!addedToCart);
    console.log(!addedToCart);
    if (addedToCart === false) {
      setCartCount(cartCount + 1);
    } else {
      setCartCount(cartCount - 1);
    }
  }
  return (
    <div>
      <h1>{motorObj.brand}</h1>
      <h2>{motorObj.model}</h2>
      <p>
        <b>Year Model: </b>
        {motorObj.year}
      </p>
      <p>
        <b>Color: </b>
        {motorObj.color}
      </p>
      <p>
        <b>Engine Size: </b>
        {motorObj.engineSize}
      </p>
      <p>
        <b>Top Speed: </b> {motorObj.topSpeed}
      </p>
      <p>
        <b>Features: </b>
        {motorObj.features.map((feature, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {feature}
            {index !== motorObj.features.length - 1 && ", "}
          </span>
        ))}
      </p>
      <p>
        <b>Price:</b> {motorObj.price}
      </p>
      <button
        onClick={() => setAddCart()}
        className={`${addedToCart === true ? "added" : ""}`}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
