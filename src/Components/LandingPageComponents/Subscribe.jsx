import React from "react";
import "./Subscribe.css";
import LearnMoreButtun from "./LearnMoreButtun";

const Subscribe = () => {
  return (
    <>
      <div id="subscribe">
        <div>
          <div className="left-container">
            <span className="title">Be aware of the latest trends</span>
            <span className="sub-title">
              Stay informed of new trends, but also of our various offers.
            </span>
          </div>
          <LearnMoreButtun />
        </div>

        <div className="right-container">
          <input class="input" placeholder="email@address.com" />

          <button class="btn">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
