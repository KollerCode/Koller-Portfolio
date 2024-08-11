import react from "react";
import { Navbar, Nav, NavbarBrand, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.svg"

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <LinkContainer to="/">
       <NavbarBrand className="brand pl-3">
          <img
            id="icon"
            src={logo}
            width="63"
            height="36"
            alt=""
          />
        </NavbarBrand> 
      </LinkContainer>
      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <LinkContainer to="/">
          <Nav.Link>
            <strong>Home</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="about-me">
          <Nav.Link>
            <strong>About Me</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="projects">
          <Nav.Link>
            <strong>Projects</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="contact">
          <Nav.Link>
            <strong>Contact</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="resume">
          <Nav.Link>
            <strong>Resume</strong>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
