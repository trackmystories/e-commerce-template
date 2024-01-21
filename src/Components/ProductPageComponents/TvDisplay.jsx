import React from "react";
import "./TvDisplay.css";

import tv1 from "../../assets/product/tv1.png";
import tv2 from "../../assets/product/tv2.png";
import tv3 from "../../assets/product/tv3.png";
import tv4 from "../../assets/product/tv4.png";
import tv5 from "../../assets/product/tv5.png";

const TvDisplay = () => {
  return (
    <div id="tv-display">
      <div className="vertical-images">
        <div className="img-container">
          <img src={tv1} alt="TV 1" />
        </div>
        <div className="img-container">
          <img src={tv2} alt="TV 2" />
        </div>
        <div className="img-container">
          <img src={tv3} alt="TV 3" />
        </div>
        <div className="img-container">
          <img src={tv4} alt="TV 4" />
        </div>
      </div>
      <div className="large-image">
        <img src={tv5} alt="TV 5" />
      </div>
    </div>
  );
};

export default TvDisplay;
