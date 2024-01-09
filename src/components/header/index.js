import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {Link} from 'react-scroll'

const Header = ({menuItems}) => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [navColor, setNavColor] = useState(false)
  const {pathname} = useLocation()
  console.log(pathname, "pathname")
  const paths = ["/","/home","/about", "/packages", "/gallery", "/activities", "/contact", "/weekly-update", "testimonials"]
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const handleRoute = (path) => {
    navigate(path)
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuItems.map((item) => (
              <Nav.Link
              href={`#${item.path}`}
              className={
                activeLink === `${item.path}` ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink(item.path)}
              ><Link  
              scrolling="center"
              onClick={() => handleRoute(item.id)}
              className='item-link'
              style={{color: navColor ? '#121212' : ''}}
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
