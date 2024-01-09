import React, { useEffect } from "react";
import fruit from "../../assets/images/fruit.JPG";
import nalukettu from '../../assets/images/nalukettufrontside.jpg'
import houseboat from "../../assets/images/houseboat.png"
import room from "../../assets/images/nalukettu-rooms.jpg"
import nadumuttam from "../../assets/images/nadumuttam.jpg"
import pool from "../../assets/images/nalukettu-pool.png"




function StayPckages() {
  useEffect(() => {
    let filter_btn = document.querySelectorAll(".filter-btn");
    let tab_items = document.querySelectorAll(".tab-item");

    for (let i = 0; i < filter_btn.length; i++) {
      filter_btn[i].addEventListener("click", function () {
        for (let j = 0; j < filter_btn.length; j++) {
          filter_btn[j].classList.remove("active");
        }
        let select_tab = filter_btn[i].getAttribute("data-tab");
        filter_btn[i].classList.add("active");
        for (let t = 0; t < tab_items.length; t++) {
          document.querySelector(".tab-filter-item-container").style.height =
            tab_items[t].scrollHeight + "px";
          if (tab_items[t].classList.contains(select_tab)) {
            tab_items[t].classList.add("select_tab");
          } else {
            tab_items[t].classList.remove("select_tab");
          }
        }
      });
    }

    for (let th = 0; th < tab_items.length; th++) {
      document.querySelector(".tab-filter-item-container").style.height =
        tab_items[th].scrollHeight + "px";
    }
  });

  return (
    <div id="stay" className="stay-wrapper mt-5">
      <h2>Stay</h2>
      <div class="container"></div>
      <div class="container">
        <div class="tab-container stay-wrapper">
          <div class="tab-filter-container">
            <li class="filter-btn active" data-tab="web-design">
              <ion-icon name="desktop-outline"></ion-icon>
              Naluekettu
            </li>
            <li class="filter-btn" data-tab="web-development">
              <ion-icon name="logo-nodejs"></ion-icon>
              House Boat Stay
            </li>
            <li class="filter-btn" data-tab="ettukettu">
              <ion-icon name="logo-nodejs"></ion-icon>
              Ettukettu
            </li>
          </div>
          <div class="tab-filter-item-container">
            <div class="tab-item web-design select_tab nalu-kettu">
              <div style={{backgroundImage:`url(${nalukettu})`}} className="nalukettu-wrapper">
                 <h1>Nalukettu</h1>
              </div>
            </div>
            <div class="tab-item web-development">
            <div style={{backgroundImage:`url(${houseboat})`}} className="nalukettu-wrapper">
                 <h1>House Boat</h1>
              </div>
            </div>
            <div class="tab-item ettukettu">
            <div style={{backgroundImage:`url(${houseboat})`}} className="nalukettu-wrapper">
                 <h1>Ettukettu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="stay-variety">
      <div class="flip-card">
      <div style={{backgroundImage:`url(${room})`}} class="flip-card-front">
        <div class="inner">
          {/* <img src="https://i.imgur.com/C9DWUDi.png" class="icon" /> */}
          {/* <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p> */}
        </div>
      </div>
      <div style={{backgroundImage:`url(${room})`}} class="flip-card-back">
        <div class="inner">
          <h3>Rooms</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div style={{backgroundImage:`url(${nadumuttam})`}}  class="flip-card-front">
        <div class="inner">
        </div>
      </div>
      <div style={{backgroundImage:`url(${nadumuttam})`}} class="flip-card-back">
        <div class="inner">
          <h3>Nadumuttam</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div style={{backgroundImage:`url(${pool})`}} class="flip-card-front">
        <div class="inner">
        </div>
      </div>
      <div style={{backgroundImage:`url(${pool})`}} class="flip-card-back">
        <div class="inner">
          <h3>Pool</h3>
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

export default StayPckages;
