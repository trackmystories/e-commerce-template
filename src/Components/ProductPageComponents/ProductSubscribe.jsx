import React from "react";
import "./ProductSubscribe.css";

const ProductSubscribe = () => {
  return (
    <div id="product-subscribe">
      <div className="left-container">
        <span className="title">Join our newsletter and get offers</span>
        <span className="subtitle">Sign up our newsletter</span>
      </div>
      <div className="right-container">
        <input className="input" placeholder="Enter your email" />
        <button className="btn">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default ProductSubscribe;
