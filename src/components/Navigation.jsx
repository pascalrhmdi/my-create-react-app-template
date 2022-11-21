import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

function Navigation() {

  const isActiveNavbarDropdown = location.pathname.includes("profil") || location.pathname.includes("galeri");

  return (
    <Navbar collapseOnSelect expand="md" fixed="top">
      <Container fluid="lg">
        <Navbar.Brand as={Link} to="/">
          Gambar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} eventKey="1" to="/">
              Link 1
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="2" to="/">
              Link 2
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="3" to="/">
              Link 3
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="4" to="/">
              Link 4
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="5" to="/">
              Link 5
            </Nav.Link>
            <NavDropdown title="Tentang Kami" eventKey="6" active= {isActiveNavbarDropdown}>
              <NavDropdown.Item as={NavLink} to="/profil" eventKey="6.1">
                Dropdown 1
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/galeri" eventKey="6.2">
                Dropdown 2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
