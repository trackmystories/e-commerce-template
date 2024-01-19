import React, { useState } from "react";
import "./Carousal.css";
import Subscribe from "./Subscribe";

// Carousal images
import image1 from "../../assets/carousal/1.png";
import image2 from "../../assets/carousal/2.png";
import image3 from "../../assets/carousal/3.png";
import image4 from "../../assets/carousal/4.png";
import image5 from "../../assets/carousal/5.png";
import image6 from "../../assets/carousal/6.png";

//SVG Arrows
import leftArrow from "../../assets/carousal/left-arrow.svg";
import rightArrow from "../../assets/carousal/right-arrow.svg";

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6];

  // Adjust currentIndex on button press
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div>
        <Subscribe />
      </div>

      <div id="carousal">
        <div className="carousel-container">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
            }}
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
          </div>
        </div>

        <div className="inspiration-container">
          <span className="inspiration">Inspirations</span>

          <div className="inspiration-container-row">
            <span className="paragragh">
              Our experts are keen to stay on top of trends in order to offer
              you new inspirations for your interior and exterior every day.
              Remember that to inspire you we have to inspire ourselves and we
              want to share that with you.
            </span>

            <div class="hidden">
              <div>
                <img
                  src={leftArrow}
                  className="left-arrow"
                  alt="Left Arrow"
                  onClick={() => updateIndex(currentIndex - 1)}
                />

                <img
                  src={rightArrow}
                  className="right-arrow"
                  alt="Right Arrow"
                  onClick={() => updateIndex(currentIndex + 1)}
                />
              </div>

              <div className="off-each">01/05</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
