import React, { useEffect, useRef } from "react";

function WeeklyUpdate() {
  const weeklyUpdateRef = useRef(null);

  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters(valueDisplays);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(weeklyUpdateRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounters = (valueDisplays) => {
    valueDisplays.forEach((valueDisplay) => {
      let interval = 5000;
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      console.log(endValue, "endValue");
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };
  return (
    <div id="weekly-update" ref={weeklyUpdateRef} className="week-head-wrapper">
      <div className="week-head">
        <h2>Weekly Footsteps..</h2>
      </div>
      <div className="week-wrapper">
        <div className="week-container">
          <i class="bi bi-people-fill"></i>
          <span className="num" data-val="1200">
            000
          </span>
          <span className="text">People Visited</span>
        </div>
        <div className="week-container">
          <i class="bi bi-cake-fill"></i>
          <span className="num" data-val="5">
            000
          </span>
          <span className="text">Events</span>
        </div>
        <div className="week-container">
          <i class="bi bi-star-fill"></i>
          <span className="num" data-val="57">
            000
          </span>
          <span className="text">5 Stars</span>
        </div>
      </div>
    </div>
  );
}

export default WeeklyUpdate;
