import React, { useState } from "react";
import "./ProductDesc.css";

const ProductDesc = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const content = {
    tab1: "The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers. Only 65G2 is shown in the image for example purposes.All 2022 LG OLED models feature eco- friendly packaging.65C2 Stand model is at a minimum 39% lighter than the C1 series. More...",
    tab2: "around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers. Only 65G2 is shown in the image for example purposes.All 2022 LG OLED models feature eco- friendly packaging.65C2 Stand model is at a minimum 39% lighter than the C1 series. More...",
    tab3: "The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, ",
  };

  return (
    <>
      <div id="tab-container">
        <div className="tabs">
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => setActiveTab("tab1")}
          >
            <span>Description</span>
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => setActiveTab("tab2")}
          >
            <span>Specification</span>
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => setActiveTab("tab3")}
          >
            <span>Reviews</span>
          </button>
        </div>
        <div className="tab-content">
          <p>{content[activeTab]}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDesc;
