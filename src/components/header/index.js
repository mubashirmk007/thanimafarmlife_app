import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {Link} from 'react-scroll'
import logo from '../../assets/images/logo_white.svg'

const Header = ({menuItems}) => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [navColor, setNavColor] = useState(false)
  const {pathname} = useLocation()
  console.log(activeLink, "activeLink")
  const paths = ["/","/home","/about", "/packages", "/gallery", "/activities", "/contact", "/weekly-update", "/testimonials"]
  useEffect(() => {
    if (!paths.includes(pathname)) {
      setNavColor(true);
    }
    else setNavColor(false)
  }, [pathname]);



  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = async(value) => {
    setActiveLink(value);
  };
  const handleRoute = async(path, value) => {
    setActiveLink(value);
    if(path === 'booking'){
      window.location.href = 'https://booking.thanimafarmlife.in/';
    }
    else navigate(path)
  }

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand style={{paddingLeft: '39px',width: "140px"}} href="/">
            <img style={{width: "100px"}} src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuItems.map((item) => (
              <Nav.Link
              // href={`#${item.path}`}
              onClick={() => onUpdateActiveLink(item.id)}
              >{console.log(item.path)}<Link  
              className={`item-link ${activeLink === item.id ? "active navbar-link" : "navbar-link"}`}
              scrolling="top"
              onClick={() => handleRoute(item.id, item.id)}
              // style={{color: navColor ? '#121212' : ''}}
              to={`${item.id}`}>
              {item.label}
              </Link>
            </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
export default Header
