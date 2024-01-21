import React from "react";
import "./ProductPage.css";
import NeedUsFooter from "../Components/ProductPageComponents/NeedusFooter";
import ProductSubscribe from "../Components/ProductPageComponents/ProductSubscribe";
import RelatedProducts from "../Components/ProductPageComponents/RelatedProducts";
import ProductDesc from "../Components/ProductPageComponents/ProductDesc";
import Product from "../Components/ProductPageComponents/Product";

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <Product />
      <ProductDesc />
      <RelatedProducts />
      <ProductSubscribe />
      <NeedUsFooter />
    </div>
  );
};

export default ProductPage;
