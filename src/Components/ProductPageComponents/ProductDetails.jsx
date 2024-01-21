import React, { useState } from "react";
import "./ProductDetails.css";

import starSelected from "../../assets/product/starSelected.png";
import starUnselected from "../../assets/product/starUnselected.png";

const ProductDetails = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <div id="product-details">
        <div className="property">
          Brand: <span className="value">LG</span>
        </div>
        <div className="property">
          Model: <span className="value">OLED42C2PSA</span>
        </div>
        <div className="property">
          Availability: <span className="value">Only 2 in Stock</span>
        </div>
      </div>
      <div className="title">
        LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
      </div>
      <div className="rating">
        {[1, 2, 3, 4].map((star) => (
          <img
            key={star}
            src={star <= rating ? starSelected : starUnselected}
            alt={`Star ${star}`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
      <div className="features-list">
        <div>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</div>
        <div>
          Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
        </div>
        <div>Hands-free Voice Control, Always Ready</div>
        <div>
          Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
        </div>
        <div>Eye Comfort Display: Low-Blue Light, Flicker-Free</div>
      </div>
    </div>
  );
};

export default ProductDetails;
