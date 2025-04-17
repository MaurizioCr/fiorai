import React from 'react';
import { Navbar, Nav, Container, Image, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import logo from "../Assets/fantasie.jpeg"

function StickyNavbar() {
  return (
    <>
    <Navbar style={{background: "#EEAECA"}} expand="lg" sticky="top">
      <Container>
        {/* Logo del negozio */}
        <Navbar.Brand href="/">
          <Image
            src={logo} 
            alt="Logo del Negozio"
            style={{width: "5em"}}
            className="d-inline-block align-top rounded-circle"
          />
        </Navbar.Brand>

        {/* Pulsante per il toggle su schermi piccoli */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Sezioni della navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto spinge gli elementi a destra */}
            <Nav.Link href="#in-primo-piano">In primo Piano</Nav.Link>
            <Nav.Link href="#chi-siamo">Chi siamo</Nav.Link>
            <Nav.Link href="/DoveTrovarci" >Dove trovarci</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="bg-info text-white py-2 text-center">
        <Container>
          <Row>
            <Col>
              📢 Annuncio importante! Questo annuncio è personalizzabile!
            </Col>
          </Row>
        </Container>
      </div>
      </>
  );
}

export default StickyNavbar;