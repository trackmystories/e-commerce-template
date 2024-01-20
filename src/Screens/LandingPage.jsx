import React from "react";
import AnticFooter from "../Components/LandingPageComponents/AnticFooter";
import Carousal from "../Components/LandingPageComponents/Carousal";
import About from "../Components/LandingPageComponents/About";
import Head from "../Components/LandingPageComponents/Head";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Head />
      <About />
      <Carousal />
      <AnticFooter />
    </div>
  );
};

export default LandingPage;
