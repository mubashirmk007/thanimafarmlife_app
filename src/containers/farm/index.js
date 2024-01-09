import React, { useEffect } from "react";
import fruit from "../../assets/images/fruit.JPG";

function Farm() {
  useEffect(() => {

    let filter_btn = document.querySelectorAll('.filter-btn');
    let tab_items = document.querySelectorAll('.tab-item');
    
    for (let i = 0; i < filter_btn.length; i++) {
      filter_btn[i].addEventListener('click', function () {
        for (let j = 0; j < filter_btn.length; j++) {
          filter_btn[j].classList.remove('active');
        }
        let select_tab = filter_btn[i].getAttribute('data-tab');
        filter_btn[i].classList.add('active');
        for (let t = 0; t < tab_items.length; t++) {
          document.querySelector('.tab-filter-item-container').style.height =
            tab_items[t].scrollHeight + 'px';
          if (tab_items[t].classList.contains(select_tab)) {
            tab_items[t].classList.add('select_tab');
          } else {
            tab_items[t].classList.remove('select_tab');
          }
        }
      });
    }
    
    for (let th = 0; th < tab_items.length; th++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[th].scrollHeight + 'px';
    }
  })

  return (
    <div id="farm" className="farm-wrapper mt-5">
      <h2>Farm</h2>
      <div class="container">
    </div>
    <div class="container">
      <div class="tab-container">
        <div class="tab-filter-container">
          <li class="filter-btn active" data-tab="web-design">
            <ion-icon name="desktop-outline"></ion-icon>
            Exotic Fruits
          </li>
          <li class="filter-btn" data-tab="web-development">
            <ion-icon name="logo-nodejs"></ion-icon>
              Animal Kingdom
          </li>
        </div>
        <div class="tab-filter-item-container">
          <div class="tab-item web-design select_tab">
        <div className="fruits-wrapper">
          <div className="left">
            <img  src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>Jackfruit</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Miracle Fruit</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>
      <div className="fruits-wrapper">
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>African Pappaya</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Apricot</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>
      <div className="fruits-wrapper">
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>Alphonso Mango</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Dragon Fruit</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>

          </div>
          <div class="tab-item web-development">
          <div className="fruits-wrapper">
          <div className="left">
            <img  src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>Vembur Goat</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Gir</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>
      <div className="fruits-wrapper">
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>Rajapalayam Dog</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Iguana</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>
      <div className="fruits-wrapper">
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
          <div className="right">
            <h4>Persian cat</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
      </div>
      <div className="fruits-wrapper">
      <div className="right">
            <h4>Husky</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="left">
            <img style={{ width: "400px" }} src={fruit} alt="" />
          </div>
      </div>

          </div>
        </div>
      </div>
    </div>
           </div>
  );
}

export default Farm;
