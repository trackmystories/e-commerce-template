import React from "react";
import "./Head.css";
import mainImg from "../../assets/main-img.png";
import arrowDown from "../../assets/arrow-down.svg";
import NavBar from "./NavBar";

const Head = () => {
  return (
    <div id="head">
      <NavBar />
      <div className="head-container">
        <div className="left-head">
          <div className="home-design-card">
            <span className="title">HOME DESIGN</span>
            <span className="sub-title">
              Elegance for Interiors & Exteriors
            </span>
            <span className="sub-text">
              We provide everyone with modern, trendy, quality furniture
            </span>
            <img src={arrowDown} alt="arrow" className="arrow" />
          </div>
        </div>
        <div className="right-head">
          <img src={mainImg} alt="main" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Head;
