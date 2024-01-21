import React, { useState, useEffect } from "react";
import "./RelatedProducts.css";
import RelatedFolderCard from "./RelatedFolderCard";

import img1 from "../../assets/product/img1.png";
import img3 from "../../assets/product/img5.png";
import img4 from "../../assets/product/img6.png";

const RelatedProducts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = [
    {
      id: 1,
      imgSrc: img1,
      buttonText: "Add to cart",
      desc: "Sony BRAVIA XR Android Tv",
      price: "$800.22",
      status: "new",
    },
    {
      id: 2,
      imgSrc: img4,
      buttonText: "Add to cart",
      desc: "Mi P1 Smart Android HD TV",
      price: "$400",
      status: "discount",
    },
    {
      id: 3,
      imgSrc: img3,
      buttonText: "Add to cart",
      desc: "Konka OLED Android Tv",
      price: "$700",
      status: "hot",
    },
    {
      id: 4,
      imgSrc: img4,
      buttonText: "Add to cart",
      desc: "TCL Roku Android Tv",
      price: "$800",
      status: "warranty",
    },
  ];

  const displayedProducts = isMobile ? products.slice(0, 2) : products;

  return (
    <div id="related-products">
      <div className="related-container">
        <span>Related Products</span>
        <div className="products">
          {displayedProducts.map((product) => (
            <RelatedFolderCard
              key={product.id}
              imgSrc={product.imgSrc}
              buttonText={product.buttonText}
              desc={product.desc}
              price={product.price}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
