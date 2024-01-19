import React from "react";
import "./LearnMoreButton.css";

const LearnMoreButtun = ({ onClick }) => {
  return (
    <div id="learn-more-container">
      <span className="learn-more" onClick={onClick}>
        Learn More
      </span>
    </div>
  );
};

export default LearnMoreButtun;
