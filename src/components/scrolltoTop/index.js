import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(windScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        return () => window.removeEventListener("scroll", listenToScroll)
    },[])
  const goToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Wrapper>
        {isVisible && (
      <div className="top-btn" onClick={goToTop}>
      <i class="top-btn--icon bi bi-arrow-up-circle-fill text-success "></i>
      </div>)}
    </Wrapper>
  );
}
const Wrapper = styled.section`
display : flex;
justify-content : center;
align-items : center;

.top-btn {
    font-size : 2.4rem;
    width: 2.3rem;
    height: 2.3rem;
    color: #fff;
    background-color: #fff;
    box-shadow: #000;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    &--icon {
        animation; gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
        0% {
            transform: translateY(-0.5rem);
        }
        100% {
            transform : translateY(1rem)
        }
    }
}
`;
export default ScrollToTop;
