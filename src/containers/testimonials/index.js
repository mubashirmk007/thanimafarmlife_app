import React from "react";
import profile1 from "../../assets/images/testi2.jpg";
import profile2 from "../../assets/images/testi4.jpg";
import profile3 from "../../assets/images/testi5.jfif";
import profile4 from "../../assets/images/testi6.jfif";
import profile5 from "../../assets/images/nullprofile.webp";
// import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const apiKey = 'AIzaSyAf7RSXesSD850zbN6_OKhEWCtcq1S5jDQ';
  //   const placeId = '0x3ba687005542b1c5:0x2c1735d5ba596425';

  //   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  //   axios.get(url)
  //     .then(response => {
  //       setReviews(response.data.result.reviews);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching Google Reviews:', error);
  //     });
  // }, []);
  // console.log(reviews, "reviews==")
  const dummyData = [
    {
      id: 0,
      image: profile1,
      description:
        "Had a Fun filled day at this place on 24-03-2023, Really enjoyed with family and kids..",
      name: "Siddharth selvaraj",
      date: "2023-03-25",
      rating: 4,
    },
    {
      id: 4,
      image: profile2,
      description:
        "Awesome place...must visit.....",
      name: "Sachin sms",
      date: "2023-03-24",
      rating: 5,
    },
    {
      id: 1,
      image: profile3,
      description:
        "Excellent destination for nature lovers and people interested in agriculture and animal husbandry. The service was..",
      name: "Priya Chandran",
      date: "2023-03-23",
      rating: 5,
    },
    {
      id: 2,
      image: profile4,
      description:
        "Yes, beyond expectation must try.. good place to spend with family n friends. Activities, food and stay all good n well.",
      name: "Shyne Sathishk",
      date: "2023-03-23",
      rating: 5,
    },
    {
      id: 3,
      image: profile5,
      description:
        "Wow! What an amazing place . It is calm and serene and the service is too good. Many adventure activities such as...",
      name: "Vishnu Prasad",
      date: "2023-03-23",
      rating: 5,
    },
  ];
  return (
    <div id="testimonials" className="testimonial-body">
      <div className="testimonial-wrapper">
        <div className="tes-container">
          <div className="tes-header">
            <div className="tes-head">
              <h3>Testimonials</h3>
              <p>See what people are saying..</p>
            </div>
            <div className="tes-body">
              <div className="total-rating">
                <span>4.3</span>
                <p>Gross Rating</p>
              </div>
              <div className="people-say swiper">
                <Swiper
                  className="swiper-container"
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  pagination={true}
                >
                  {dummyData.map((element) => (
                    <SwiperSlide>
                      <div className="tes-card-wrapper">
                        <div className="thumbnail">
                          <img src={element.image} alt="" />
                        </div>
                        <div className="tes-card-aside">
                          <p>{element.description}
                          </p>
                          <div className="tes-name">
                            <h4>{element.name}</h4>
                            <p>{element.date}</p>
                            <div className="rating-box">
                              <div className="stars d-flex gap-1">
                                {[...Array(element.rating)].map((_, index) => (
                                  <div key={index}>
                                    <i className="bi bi-star-fill text-success"></i>
                                  </div>
                                ))}
                                {[...Array(5 - element.rating)].map(
                                  (_, index) => (
                                    <div key={index}>
                                      <i className="bi bi-star-fill text-secondary"></i>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
