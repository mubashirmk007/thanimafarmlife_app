import React from "react";
import skycycling from "../../assets/images/sports1.jpg"
import kayaking from "../../assets/images/kayaking-resized.jpg"
import pedelboat from "../../assets/images/pedelboat.png"

function Adventures() {
  return (
    <div className="adventures-wrapper">
        <h2>Adventures</h2>
      <div className="adventure-variety">
          <div
            style={{ backgroundImage: `url(${skycycling})`,height:'400px', backgroundSize: 'cover' }}
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
          <div
            style={{ backgroundImage: `url(${kayaking})`,height:'400px', backgroundSize: 'cover' }}
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
          <div
            style={{ backgroundImage: `url(${pedelboat})`,height:'400px', backgroundSize: 'cover' }}
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
    </div>
  );
}

export default Adventures;
