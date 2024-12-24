import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import log from './Images/logo-light.png';  // Update with your image path

function CustomNavbar() {
  // Use useState hook to manage the 'show' state (for Offcanvas visibility)
  const [show, setShow] = useState(false);

  // Toggle function for the Offcanvas visibility
  const handleToggle = () => setShow(!show);

  return (
    <>
      {/* Main Navbar */}
      <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go pt-0 pb-1">
        <Container fluid className="p-0">
          <div className="d-flex align-items-center p-0">
            {/* Mobile/Table toggle button */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="d-lg-none float-start p-0 custom-toggle"
              onClick={handleToggle}  // Call the toggle function to manage state
            />
            <Navbar.Brand className="px-1 mb-1 position-relative" href="#home">
              <img
                className="forlogo position-absolute top-0 p-0"
                src={log}
                alt="Logo"
              />
              <Button
                style={{ width: '205px' }}
                variant="link"
                className="location_botton align-item-center px-3 d-none d-lg-inline"
              >
                <GrLocation
                  className="dumlo"
                  size={24}
                  style={{ float: 'left', color: 'white', strokeWidth: '5' }}
                />
                <div className="location_anchour m-0" style={{ float: 'right' }}>
                  Event in Coimbatore
                </div>
              </Button>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile/tablet view menu */}
      <Offcanvas show={show} onHide={handleToggle} placement="start" style={{ width: '80%', backgroundColor: 'white' }}>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="text-dark">List your event</Nav.Link>
            <Nav.Link className="text-dark">Work with us</Nav.Link>
            <Nav.Link className="text-dark">
              <Button variant="outline-primary" className="forSearch">
                <GoSearch size={23} />
              </Button>
            </Nav.Link>
            <Nav.Link className="text-dark">
              <Button variant="outline-primary" className="forChatref">
                <GrLocation size={21} />
                <p className="location_anchour Dummy-location d-none d-sm-block" style={{ fontSize: '15px' }}>
                  Coimbatore
                </p>
              </Button>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
