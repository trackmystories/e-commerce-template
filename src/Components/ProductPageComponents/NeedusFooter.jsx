import React from "react";
import "./NeedusFooter.css";

const NeedUsFooter = () => {
  return (
    <div id="needus-footer-container">
      <div className="inner-container">
        <div className="inner-container-col">
          <span className="title">About us</span>
          <p className="about-us">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
        </div>
        <div className="inner-container-col">
          <span className="title">Products</span>
          <p>Furniture</p>
          <p>Conception</p>
          <p>Installation</p>
          <p>Advices</p>
          <p>Gift card</p>
        </div>
        <div className="inner-container-col">
          <span className="title">Rooms</span>
          <p>Living room</p>
          <p>Dining room</p>
          <p>Cooked</p>
          <p>Bedroom</p>
          <p>Bathroom</p>
          <p>Office</p>
          <p>Laundry</p>
          <p>Garage</p>
        </div>
        <div className="inner-container-col">
          <span className="title">Services</span>
          <p>Click and collect</p>
          <p>Conception</p>
          <p>Installation</p>
          <p>Advices</p>
          <p>Gift card</p>
        </div>
        <div className="inner-container-col">
          <span className="title">Contact us</span>
          <p>If you have any query, please contact us needus24@gmail.com</p>
          <p>California, USA</p>
          <p> +12012987481</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="policy">
        <p>Copyright. 2023 All Right Reserved</p>
      </div>
    </div>
  );
};

export default NeedUsFooter;
