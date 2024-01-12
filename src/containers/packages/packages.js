import React from "react";
import activity1 from "../../assets/images/activity1.jpg";
import activity2 from "../../assets/images/activity2.jpg";
import activity3 from "../../assets/images/activity3.jpg";
import activity4 from "../../assets/images/activity4.jpg";
import activity5 from "../../assets/images/activity5.jpg";
import activity6 from "../../assets/images/activity6.jpg";
import activity7 from "../../assets/images/activity7.jpg";
import activity8 from "../../assets/images/activity8.jpg";
import activity9 from "../../assets/images/activity9.jpg";
import activity10 from "../../assets/images/activity10.jpg";
import activity11 from "../../assets/images/activity11.jpg";




function Packages() {
  return (
    <div id="packages" className="package-wrapper d-flex flex-column h-100">
        <div className="pack-heading text-lg-start text-sm-center w-100">
      <h2 className="text-bolder">Our Packages Includes...</h2>
        </div>
      <div className="package-container">
        <div className="package-card">
          <div
            id="carouselExampleControls"
            class="carousel slide package-carousal"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={activity1} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity2} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity4} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity10} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity5} alt="Third slide" />
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
            <h2 className="d-flex justify-content-center align-items-center gap-3 font-weight-bold">
              {" "}
              DAY OUT PACKAGE - INCLUDING HIGH ROPE ACTIVITIES
            </h2>
            <p>
              Day Out Package 20+ activities for week days 1275/head only
              (Monday to Friday)
            </p>
            <p>10:00AM 5:30 PM 10 Maximum Guests</p>
            <div className="d-flex align-items-center">
              <h5 className="package-price text-success font-weight-bold">
                &#8377; 1485.00
              </h5>{" "}
              <small>/day</small>{" "}
            </div>
          </div>
        </div>
        <div className="package-card">
          <div
            id="carouselExampleControls"
            class="carousel slide package-carousal"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={activity11} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity6} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity7} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity8} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={activity9} alt="Third slide" />
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
            <h2 className="d-flex justify-content-center align-items-center gap-3 font-weight-bold">
              {" "}
              WITH OUT HIGHROPE ACTIVITIES
            </h2>
            <p>DAY OUT PACKGE 20+ ACTIVITIES</p>
            <p>10:00AM 5:30 PM 10 Maximum Guests</p>
            <div className="d-flex align-items-center">
              <h5 className="package-price text-success font-weight-bold">
                &#8377; 1185.00
              </h5>{" "}
              <small>/day</small>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
