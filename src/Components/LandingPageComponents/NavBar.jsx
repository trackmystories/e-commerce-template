import React from "react";
import "./NavBar.css";
import chat from "../../assets/chat.svg";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="company-name">Antic</div>
        <div className="nav-link">Products</div>
        <div className="nav-link">Rooms</div>
        <div className="nav-link">Services</div>
        <div className="nav-link">Inspirations</div>
      </div>

      <div className="icon">
        <img src={chat} alt="chat" />
      </div>
    </nav>
  );
};

export default NavBar;
