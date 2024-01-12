import React from "react";
import skycycling from "../../assets/images/sports12.jpg";
import kayaking from "../../assets/images/kayaking-resized.jpg";
import pedelboat from "../../assets/images/pedelboat.png";

const activities = [
  {name: "Sky Cycling",image: skycycling,desc: "300 meters of skycycling above the pond with a fascinating view of the resourceful farm makes the ride adventurous."},
  {name: "Kayaking",image: kayaking,desc: "Kayaking in a large, well-kept pond that is appropriate for both children and seniors, complete with safety precautions and guide assistance."},
  {name: "Pedel Boat",image: pedelboat,desc: "Spending enjoyable time in a pedel boat with the family provides both physical and mental relief."},

]

function Adventures() {
  return (
    <div className="adventures-wrapper">
      {/* <h2>Adventures</h2> */}
      <div className="adventure-variety mt-5">
        {activities.map((act) => (
        <div class="adv-card card dark">
        <img src={act.image} class="card-img-top" alt="..." />
        <div class="adv-card-body card-body">
          <div class="text-section text-start">
            <h5 class="card-title">{act.name}</h5>
            <p class="card-text">
              {act.desc}
            </p>
            <p className="text-bold"><i class="bi bi-clock text-secondary"></i> &nbsp;  10:00 AM - 05:30 PM</p>
          </div>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default Adventures;
