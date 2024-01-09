import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="tes-head">
        <h3>Contact Us</h3>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="left-content">
            <div className="address details">
              <i class="bi bi-geo-alt-fill"></i>
              <div className="topic">Address</div>
              <div className="text-one">Nalleppally</div>
              <div className="text-two">Palakkad, Kerala</div>
            </div>
            <div className="phone details">
            <a href="tel:9526844031"><i class="bi bi-telephone-fill"></i></a>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9348005679</div>
              <div className="text-two">+91 6278690567</div>
            </div>
            <div className="email details">
              <i class="bi bi-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">thanimafarmlife@gmail.com</div>
              <div className="text-two">info.thanimafarmlife@gmail.com</div>
            </div>
          </div>
          <div className="right-content">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any queries and need help, you can let us know from
              here. We are happy to assist you.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
