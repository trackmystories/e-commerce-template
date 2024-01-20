import React from "react";
import "./About.css";
import LearnMoreButton from "./LearnMoreButton";

const About = () => {
  return (
    <div id="about">
      <div className="left-container">
        <span className="left-container-text">
          We stay by your side to design your projects
        </span>
        <LearnMoreButton />
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <span className="flex-title">Our Advices</span>
          <span className="flex-text">
            What if you took advantage of this rather special period to rethink
            your interior? You spend more time at home so you might as well feel
            good there.
          </span>
        </div>
        <div className="flex-item">
          <span className="flex-title">Click and Collect</span>
          <span className="flex-text">
            Adapted and contactless. Free from € 200 of purchases in stores
            offering the service.
          </span>
        </div>
        <div className="flex-item">
          <span className="flex-title">Conception Service</span>
          <span className="flex-text">
            Personalized service with an expert advisor for your interior and
            exterior decoration or layout projects.
          </span>
        </div>
        <div className="flex-item">
          <span className="flex-title">Installation Service</span>
          <span className="flex-text">
            Our furniture packaged in flat packs are designed for easy assembly.
            But you can call on our partner.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
