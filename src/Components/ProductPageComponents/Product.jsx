import React from "react";
import "./Product.css";
import TvDisplay from "./TvDisplay";
import ProductDetails from "./ProductDetails";

const Product = () => {
  return (
    <>
      <div id="product">
        <div className="left-container">
          <TvDisplay />
        </div>
        <div className="right-container">
          <div>
            <ProductDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
