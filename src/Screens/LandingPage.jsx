import React from "react";
import AnticFooter from "../Components/LandingPageComponents/AnticFooter";
import Carousal from "../Components/LandingPageComponents/Carousal";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Carousal />
      <AnticFooter />
    </div>
  );
};

export default LandingPage;
