import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header";
import "../src/assets/css/_common.css";
import "../src/assets/css/_header.css";
import "./assets/css/_about.css";
import "./assets/css/_services.css";
import "./assets/css/_testimonials.css";
import "./assets/css/_package.css";
import "./assets/css/_footer.css";
import "./assets/css/_gallery.css";
import "./assets/css/_contact.css";
import "./assets/css/_weeklyupdate.css";
import "./assets/css/_timeline.css";
import "./assets/css/_farm.css";
import "./assets/css/_stay.css";
import "./assets/css/_adventures.css";
import Footer from "./components/footer";
import Farm from "./containers/farm";
import Adventures from "./containers/adventures";
import Dishes from "./containers/dishes";
import StayPckages from "./containers/stayPackages";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./main";
import ScrollToTop from "./components/scrolltoTop";

function App() {
  const [activeId, setActiveId] = useState(0);


  const menuItems = [
    // {
    //   id: "home",
    //   label: "Home",
    //   path: "/",
    // },
    { id: "about", label: "AboutUs", path: "/about" },
    {
      id: "packages",
      label: "Packages",
      path: "/packages",
    },
    {
      id: "gallery",
      label: "Gallery",
      path: "/gallery",
    },
    {
      id: "services",
      label: "Services",
      path: "/services",
    },
    {
      id: "contact",
      label: "Contact",
      path: "/contact",
    },
    {
      id: "weekly-update",
      label: "WeeklyUpdate",
      path: "/weekly-update",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      path: "/testimonials",
    },
    { id: "booking", label: "Booking", path: "https://booking.thanimafarmlife.in/" },
  ];

  return (
    <Router>
      <Header
        activeId={activeId}
        setActiveId={setActiveId}
        menuItems={menuItems}
      />
      <Routes>
        <Route path="*" exact element={<Landing />}></Route>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/farm" exact element={<Farm />}></Route>
        <Route path="/stay" exact element={<StayPckages />}></Route>
        <Route path="/activities" exact element={<Adventures />}></Route>
        <Route path="/dishes" exact element={<Dishes />}></Route>
      </Routes>
      <ScrollToTop/>
      <Footer />
    </Router>
  );
}

export default App;
