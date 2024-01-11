import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/buggy-resized.jpg";
import img2 from "../../assets/images/hydroponics-resized.jpg";
import img3 from "../../assets/images/kayaking-resized.jpg";
import img4 from "../../assets/images/skycycling-resized.jpg";
import img5 from "../../assets/images/hut-resized.jpg";
import img6 from "../../assets/images/kettu-resized.jpg";
import img7 from "../../assets/images/bird-resized.jpg";
import img8 from "../../assets/images/cat-resized.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeFullImg = () => {
    const fullImgBox = document.getElementById("fullImgBox");
    if (fullImgBox) {
      fullImgBox.style.display = "none";
    }
  };

  const openFullImg = (index) => {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");

    if (fullImgBox) {
      fullImgBox.style.display = "flex";
    }
    if (fullImg) {
      fullImg.src = images[index];
    }
    setCurrentIndex(index);
  };

  const showNextImg = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    openFullImg(nextIndex);
  };

  const showPrevImg = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    openFullImg(prevIndex);
  };

  useEffect(() => {
    const getWrappers = () => {
      const fullImgBox = document.getElementById("fullImgBox");
      if (fullImgBox) {
        fullImgBox.style.display = "none";
      }
    };
    getWrappers();
  }, []);

  return (
    <div id="gallery" className="gallery-wrapper">
      <h2>Check out the Gallery..</h2>
      <div className="full-img" id="fullImgBox">
        <img src={img1} id="fullImg" />
        <span onClick={closeFullImg}>
          <i className="bi bi-x-lg ml-2"></i>
        </span>
          <button className="prev" onClick={showPrevImg}><i class="bi bi-arrow-left-circle-fill"></i></button>
          <button className="next" onClick={showNextImg}><i class="bi bi-arrow-right-circle-fill"></i></button>
      </div>
      <div className="img-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => openFullImg(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
