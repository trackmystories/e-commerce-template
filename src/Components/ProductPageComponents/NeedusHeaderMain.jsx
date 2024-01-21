import React from "react";
import "./NeedusHeaderMain.css";
import logo from "../../assets/needus.png";
import heart from "../../assets/heart.png";
import cart from "../../assets/cart.png";
import search from "../../assets/search.png";

const NeedusHeaderMain = () => {
  return (
    <div id="needus-main">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="input-container">
        <div className="search-container">
          <input type="text" className="search-input" />
          <div className="img-container">
            <img src={search} alt="search" />
          </div>
          <select className="category-select">
            <option value="">Select a Category</option>
            <option value="electronics">Electronics</option>
            <option value="apparel">Apparel</option>
            <option value="home-goods">Home Goods</option>
            <option value="toys">Toys</option>
          </select>
          <div className="ls-text-cont">
            <span>Login | Signup </span>
          </div>
        </div>
      </div>
      <div>
        <img src={heart} alt="heart" />
        <img src={cart} alt="cart" className="cart" />
      </div>
    </div>
  );
};

export default NeedusHeaderMain;
