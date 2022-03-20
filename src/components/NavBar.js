import react from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <LinkContainer to="/">
      <Navbar.Brand className="brand">
        <img
          id="brain"
          width="100"
          height="100"
          class="d-inline-block align-top"
          alt=""
        />
        I Can ADHD
        </Navbar.Brand>
        </LinkContainer>
      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <LinkContainer to="/">
          <Nav.Link><strong>Home</strong></Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to="about-adhd">
          <Nav.Link><strong>About Me</strong></Nav.Link>
        </LinkContainer>
        <LinkContainer to="projects">
          <Nav.Link><strong>Brain Dump</strong></Nav.Link>
        </LinkContainer>
        <LinkContainer to="future-tasks">
          <Nav.Link><strong>Future Tasks</strong></Nav.Link>
        </LinkContainer> */}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
