import React, { useEffect } from "react";
import activity1 from "../../assets/images/stay1.jpg";

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
    <div id="stay" className="stay-wrapper">
      {/* <h2 className="mt-5">Check your dream stay</h2> */}
      <div class="container"></div>
      <div class="container mt-5">
        <div class="tab-container stay-wrapper">
          <div class="tab-filter-container">
            <li class="filter-btn active" data-tab="web-design">
              <ion-icon name="desktop-outline"></ion-icon>
              Luxury Palace Room
            </li>
            <li class="filter-btn" data-tab="web-development">
              <ion-icon name="logo-nodejs"></ion-icon>
              Family Room
            </li>
            <li class="filter-btn" data-tab="ettukettu">
              <ion-icon name="logo-nodejs"></ion-icon>
              Farm House
            </li>
            <li class="filter-btn" data-tab="bamboo-stay">
              <ion-icon name="logo-nodejs"></ion-icon>
              Nature Bamboo Hut
            </li>
          </div>
          <div class="tab-filter-item-container">
            <div class="tab-item web-design select_tab">
              <div className="package-card-stay">
                <div
                  id="carouselExampleControls"
                  class="carousel slide package-carousal"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Third slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Third slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fourth slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div className="package-content">
                  <h2 className="text-start text-dark align-items-center gap-3 font-weight-bold">
                    {" "}
                    Luxury Palace Room Including Food and Activities
                  </h2>
                  <p>
                    Farm Fresh Lunch, Dinner, Breakfast, Refreshments,
                    Tea/Coffee & Snacks, Guide Assisted Farm Visit & Activities
                    including (15+ Activities).
                  </p>
                  <p>King Size Bed 2 Personal 14 Rooms</p>
                  <div className="d-flex align-items-center">
                    <h5 className="package-price text-success font-weight-bold">
                      &#8377; 10210.00
                    </h5>{" "}
                    <small>/day</small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-item web-development">
              <div className="package-card-stay">
                <div
                  id="carouselExampleControls"
                  class="carousel slide package-carousal"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Third slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fourth slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div className="package-content">
                  <h2 className="text-start text-dark align-items-center gap-3 font-weight-bold">
                    {" "}
                    Family room for 8 person
                  </h2>
                  <p>
                    2 Double decker family hall which can accommodate 8 people,
                    also has 2 bathrooms attached. Farm fresh Lunch, Dinner,
                    Breakfast, Refreshments, Tea/Coffee & snacks, Guide assisted
                    farm visit & activities (15+ Activities)
                  </p>
                  <p>Double decker queen size 8 Personal 1 Rooms</p>
                  <div className="d-flex align-items-center">
                    <h5 className="package-price text-success font-weight-bold">
                      &#8377; 27690.00
                    </h5>{" "}
                    <small>/day</small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-item ettukettu">
              <div className="package-card-stay">
                <div
                  id="carouselExampleControls"
                  class="carousel slide package-carousal"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Third slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fourth slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div className="package-content">
                  <h2 className="text-start text-dark align-items-center gap-3 font-weight-bold">
                    {" "}
                    Farm House
                  </h2>
                  <p>
                    Farm fresh Lunch, Dinner, Breakfast, Refreshments,
                    Tea/Coffee & snacks, Guide assisted farm visit & activities
                    (15+ Activities) Farm fresh Lunch, Dinner, Breakfast,
                    Refreshments, Tea/Coffee & snacks, Guide assisted farm visit
                    & activities (15+ Activities).
                  </p>
                  <p>King Size Bed 2 Personal 3 Rooms</p>
                  <div className="d-flex align-items-center">
                    <h5 className="package-price text-success font-weight-bold">
                      &#8377; 8080.00
                    </h5>{" "}
                    <small>/day</small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-item bamboo-stay">
              <div className="package-card-stay">
                <div
                  id="carouselExampleControls"
                  class="carousel slide package-carousal"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Third slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fourth slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={activity1}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div className="package-content">
                  <h2 className="text-start text-dark align-items-center gap-3 font-weight-bold">
                    {" "}
                    Nature Bamboo Hut Room for 4 Person
                  </h2>
                  <p>1 double decker bed which can accommodate 4 people.</p>
                  <p>Double decker queen size 4 Personal 2 Rooms</p>
                  <div className="d-flex align-items-center">
                    <h5 className="package-price text-success font-weight-bold">
                      &#8377; 15040.00
                    </h5>{" "}
                    <small>/day</small>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayPckages;
