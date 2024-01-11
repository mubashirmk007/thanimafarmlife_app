import React, { useEffect, useState } from "react";
import aboutImg from "../../assets/images/frontside-resized.jpg";

const About = () => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    const onScrollElement = () => {
      let section = document.getElementsByClassName("about-wrapper")[0];
      let top = window.scrollY;
      let offset = section?.offsetTop;
      let height = section?.offsetHeight;
      if (top >= offset && top < offset + height) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };

    window.addEventListener("scroll", onScrollElement);
    return () => window.removeEventListener("scroll", onScrollElement);
  }, []);

  return (
    <div id="about" className="about-wrapper">
      <div className="about-container">
        <div className={`about-content ${position ? "animate-up" : ""}`}>
          <h2>Thanima Farm Life represents the great Outdoors!</h2>
          <p>
            Tucked away in a sleepy hamlet near the Kerala – Tamil Nadu border
            this green heaven is a slice of Kerala in its entirety with its
            swaying coconut and arecanut palms, abundant fruit trees, paddy
            fields, water bodies and unique stay options.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className={`about-image  ${position ? "animate-right" : ""}`}>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
