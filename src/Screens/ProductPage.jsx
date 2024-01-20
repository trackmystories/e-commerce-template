import React from "react";
import "./ProductPage.css";
import NeedUsFooter from "../Components/ProductPageComponents/NeedusFooter";
import ProductSubscribe from "../Components/ProductPageComponents/ProductSubscribe";
import RelatedProducts from "../Components/ProductPageComponents/RelatedProducts";

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <RelatedProducts />
      <ProductSubscribe />
      <NeedUsFooter />
    </div>
  );
};

export default ProductPage;
