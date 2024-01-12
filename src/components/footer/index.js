import React from "react";
import logo from '../../assets/images/tfl-logo.jpg'

function Footer() {
  return (
    <footer class="new_footer_area bg_color">
  <div class="new_footer_top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: '0.2s', animationName: "fadeInLeft"}}>
            <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
            <p>Don’t miss any updates of our events and adventures.!</p>
            <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
              <input type="text" name="EMAIL" class="form-control memail" placeholder="Email"/>
              <button class="btn btn_get btn_get_two" type="submit">Subscribe</button>
              <p class="mchimp-errmessage" style={{display: 'none'}}></p>
              <p class="mchimp-sucmessage" style={{display: "none"}}></p>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
            <h3 class="f-title f_600 t_color f_size_18">Help</h3>
            <ul class="list-unstyled f_list">
              <li><a href="#">Location</a></li>
              <li><a href="https://booking.thanimafarmlife.in/">Booking &amp; payment</a></li>
              <li><a href="#">Travel utility</a></li>
              <li><a href="#">Guideline</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft"}}>
            <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
            <div class="f_social_icon">
              <a target='_blank' href='https://www.facebook.com/Thanimafarmlife'><i class="bi bi-facebook"></i> </a>
              <a target='_blank' href='https://www.instagram.com/thanimafarmlife/'><i class="bi bi-instagram"></i></a>
              <a target='_blank' href='https://www.youtube.com/@thanimafarmlife/featured'><i class="bi bi-youtube"></i></a>
              {/* <a href="#"><i class="bi bi-twitter"></i></a> */}
            </div>
            <div className="logo">
              <img src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bg">
      <div class="footer_bg_one"></div>
      <div class="footer_bg_two"></div>
    </div>
  </div>
  <div class="footer_bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-7">
          <p class="mb-0 f_400">©thanimafarmlife All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>  
 );
}

export default Footer;
