import React from "react";
import skycycling from "../../assets/images/sports1.jpg"
import kayaking from "../../assets/images/kayaking.JPG"
import pedelboat from "../../assets/images/pedelboat.png"

function Adventures() {
  return (
    <div className="adventures-wrapper">
        <h2>Adventures</h2>
      <div className="stay-variety">
        <div class="flip-card">
          <div
            style={{ backgroundImage: `url(${skycycling})` }}
            class="flip-card-front"
          >
            <div class="inner">
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${skycycling})` }}
            class="flip-card-back"
          >
            <div class="inner">
              <h3>Sky Cycling</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                voluptatum eius quam debitis, sit amet sunt neque ipsum?
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div
            style={{ backgroundImage: `url(${kayaking})` }}
            class="flip-card-front"
          >
            <div class="inner"></div>
          </div>
          <div
            style={{ backgroundImage: `url(${kayaking})` }}
            class="flip-card-back"
          >
            <div class="inner">
              <h3>Kayaking</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                voluptatum eius quam debitis, sit amet sunt neque ipsum?
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div
            style={{ backgroundImage: `url(${pedelboat})` }}
            class="flip-card-front"
          >
            <div class="inner"></div>
          </div>
          <div
            style={{ backgroundImage: `url(${pedelboat})` }}
            class="flip-card-back"
          >
            <div class="inner">
              <h3>Pedel boat</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                voluptatum eius quam debitis, sit amet sunt neque ipsum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adventures;
