import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import{Link} from "react-router-dom";
import Booklist from "./crud/booklist";
import Peminjaman from './crud2';

const NavbarComponent =() => {
  return(
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav clasName="me-auto">
            <Nav.Link as={Link} to="/books">
              BUKU
            </Nav.Link>
            <Nav.Link as={Link} to="/peminjamans">
              Peminjaman
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};
export default NavbarComponent;