import React from "react";
import logo from "../images/logo.png";
import { Navbar,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

const PublicNavBar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="60"
          className="d-inline-block"
        />{" "}
        MEMES
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to = "/memes/add">Create Meme</Nav.Link>
          <Nav.Link as={Link} to = "/">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavBar;
