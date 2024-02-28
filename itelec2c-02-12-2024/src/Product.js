import React, { useState } from "react";
function Product(props) {
  const [isRed, setIsRed] = useState(false);
  const toggleColor = () => {
    setIsRed(!isRed);
    console.log(!isRed);
  };
  const colorClass = isRed ? "red" : "black";

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          <label className={stockClass(props.productObj.quantity)}>
            {stock(props.productObj.quantity)}
          </label>
          <img src={props.productObj.picture} alt="Laptop" />
        </div>
        <div className="product-card-body">
          <p className="product-brand">{props.productObj.brand} </p>
          <h5 className="product-name">
            <a href="">{props.productObj.name}</a>
          </h5>
          <div>
            <span className="selling-price">${props.productObj.price} </span>
            <span className="original-price">
              ${props.productObj.origPrice}{" "}
            </span>
          </div>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>
            <a
              className="btn btn1"
              style={{ color: ` ${colorClass}` }}
              onClick={toggleColor}
            >
              <i className="fa fa-heart"></i>
            </a>
            <a href="" className="btn btn1">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

function stock(num) {
  var msg = "";
  if (num != 0) {
    msg = "In Stock";
  } else {
    msg = "Out of Stock";
  }
  return msg;
}

function stockClass(num) {
  var className = "";
  if (num != 0) {
    className = "stock bg-success";
  } else {
    className = "stock bg-danger";
  }
  return className;
}
