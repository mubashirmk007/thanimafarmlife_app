import React, { useEffect } from "react";
import activity1 from "../../assets/images/activity1.jpg";
import kiwifruit from "../../assets/images/kiwi.jpg";
import mango from "../../assets/images/mango.jpg";
import dragonfruit from "../../assets/images/dragonfruit.jpg";
import miraclefruit from "../../assets/images/miraclefruit.jpg";
import jabutica from "../../assets/images/jabutica.jpg";
import mangosteen from "../../assets/images/mangosteen.jpg";
import vechur from "../../assets/images/vechurcow.jpg";
import rajapalayam from '../../assets/images/dog.JPG'
import iguana from '../../assets/images/iguana.jpg'
import cat from '../../assets/images/cat-resized.jpg'








const fruits = [
  {name: "Kiwifruit", image: kiwifruit, desc: "Kiwifruit is native to central and eastern China. The first recorded description of the kiwifruit dates to 12th century China during the Song dynasty."},
  {name: "Alphonso Mango", image: mango, desc: "The Alphonso mango, also called the hapus mango, is a named mango cultivar that originated in India. Mangifera 'Alphonso'. Alphonso mangoes."},
  {name: "Dragon Fruit", image: dragonfruit, desc: "Dragon fruit is a low-calorie fruit that is high in fiber and provides a good amount of several vitamins and minerals."},
  {name: "Miracle Fruit", image: miraclefruit, desc: "Miracle fruit, evergreen shrub native to West Africa, grown for its fruits that make sour foods taste sweet. "},
  {name: "Jabutica", image: jabutica, desc: "The jabuticaba is a small, purple fruit that grows on the jabuticabeira tree in Brazil."},
  {name: "Mangosteen", image: mangosteen, desc: "The mangosteen is an exotic Asian fruit native to the rainforests of Malaysia and Indonesia. The mangosteen is noted for its thick purple exterior and a sweet and tangy white pulp"}
]
const animals = [
  {name: "Vechur Cattle", image: vechur, desc: "The Vechur Cow is a rare breed of Bos indicus cattle named after the village Vechoor in Vaikom Taluk, Kottayam district of Kerala"},
  {name: "Rajapalayam Dog", image: rajapalayam, desc: "Mostly found in the centre of Tamil Nadu, the Rajapalayam was bred to be the complete hunter and estate guardian with features that allow it to excel."},
  {name: "Iguana", image: iguana, desc: "Iguanas are large lizards that can range from 1.2 to 2.0 m (4 to 6.5 ft) in length, including their tails. "},
  {name: "Persian Cat", image: cat, desc: "The Persian cat, also known as the Persian Longhair, is a long-haired breed of cat characterised by a round face and short muzzle. "},
]

function Farm() {
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
    <div id="stay" className="stay-wrapper">
      {/* <h2 className="mt-5">Check your dream stay</h2> */}
      <div class="container"></div>
      <div class="container mt-5">
        <div class="tab-container stay-wrapper">
          <div class="tab-filter-container">
            <li class="filter-btn active" data-tab="web-design">
              <ion-icon name="desktop-outline"></ion-icon>
              Exotic Plants & Fruits
            </li>
            <li class="filter-btn" data-tab="ettukettu">
              <ion-icon name="logo-nodejs"></ion-icon>
              Animal Kingdom
            </li>
          </div>
          <div class="tab-filter-item-container ">
            <div class="tab-item web-design select_tab w-100 h-100 p-0 ">
              <div className="d-flex flex-wrap gap-5 justify-content-center p-5">
                {fruits.map((item, index) => (
                  <div class="card" style={{width: "18rem"}}>
                    <div className="card-head">
                    <img class="card-img-top" src={item.image} alt="Card image cap" />
                    </div>
                    <div class="card-body">
                    <h2 className="text-dark">{item.name}</h2>
                      <p class="card-text">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="tab-item ettukettu">
            <div className="d-flex flex-wrap gap-5 justify-content-center p-5">
                {animals.map((item, index) => (
                  <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src={item.image} alt="Card image cap" />
                    <div class="card-body">
                      <h2 className="text-dark">{item.name}</h2>
                      <p class="card-text text-center">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farm;
