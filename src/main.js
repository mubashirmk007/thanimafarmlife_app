import React from "react";
import Home from "./containers/home";
import About from "./containers/about";
import Services from "./containers/services";
import Testimonials from "./containers/testimonials";
import Packages from "./containers/packages/packages";
import Gallery from "./containers/gallery";
import Contact from "./containers/contactUs";
import WeeklyUpdate from "./containers/weeklyupdate";


function Landing() {
  return (
    <>
      <Home />
      <About />
      <Packages />
      <Gallery />
      <Services />
      <WeeklyUpdate />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Landing;
