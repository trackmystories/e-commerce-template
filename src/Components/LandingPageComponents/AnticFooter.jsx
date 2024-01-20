import React from "react";
import "./AnticFooter.css";
import planetImage from "../../assets/img.png";
import LearnMoreButtun from "./LearnMoreButton";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/Linkedin.svg";
import twitter from "../../assets/Twitter.svg";

const AnticFooter = () => {
  return (
    <div id="antic-footer-container">
      <div className="inner-container">
        <div className="inner-container-antic">
          <span className="logo-text">antic</span>
        </div>
        <div className="inner-container-col">
          <span className="title">About</span>
          <p>Our story</p>
          <p>Our store</p>
          <p>Our partners</p>
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
          <span className="title">About</span>
          <p>Our story</p>
          <p>Our stores</p>
          <p>Our partners</p>
        </div>
        <div className="inner-container-col">
          <span className="title">We respect our planet</span>
          <div className="our-planet-img-container">
            <img className="our-planet-img" src={planetImage} alt="Planet" />
            <div className="paragragh-container">
              <span>
                We’re taking positive steps to reduce our impact on the planet.
                For us, that means retailing responsibly. We’ve set a number of
                goals to get us there.
              </span>
            </div>
            <div class="cta">
              <LearnMoreButtun onClick={() => console.log("Button clicked!")} />
            </div>
          </div>
        </div>
      </div>

      <div className="connect">
        <img className="icon" src={facebook} alt="facebook" />
        <img className="icon" src={twitter} alt="twitter" />
        <img className="icon" src={linkedin} alt="linkedin" />
        <img className="icon" src={instagram} alt="instagram" />
      </div>

      <div className="policy-container">
        <span>© 2021 Agence Dnd</span>
        <div className="policy-inner-container">
          <span className="policy-inner-container-text">Privacy policy</span>
          <span className="policy-inner-container-text">Term of service</span>
          <span className="policy-inner-container-text">Language</span>
        </div>
      </div>
    </div>
  );
};

export default AnticFooter;
