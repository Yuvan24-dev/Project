import './App.css'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { IoLocationOutline } from "react-icons/io5";





import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa'; 

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go p-0">
      <Container fluid className="p-0">
        <div className="d-flex align-items-center p-0 ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav flex-row" className="d-lg-none float-start p-0" />

          <Navbar.Brand className='p-0 position-relative' href="#home">
              <img
              className='forlogo position-absoulte top-0 p-0'
                src={log} 
                alt="Logo"
              />
            <Button variant="link" className=" location_botton allign-item-center px-3 ">
            <IoLocationOutline size={25} style={{ float: "left" }} />
              <p className='text-decoration-none'>Event in coimbatore</p>
            </Button>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="d-none d-md-block">
              <Button variant="outline-primary">
                <FaSearch />
              </Button>
            </Nav.Link>

            <Nav.Link>
              <Button variant="outline-primary" className="rounded-circle" style={{ width: '40px', height: '40px' }}>
                <FaUserCircle />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
          <Nav.Link className="d-none d-md-block">
            <Button variant="outline-primary">
              <FaMapMarkerAlt />
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}












function App() { 
  return ( 
    <Container fluid className="there_you_go"> 
      <CustomNavbar /> 
    </Container> 
  ); 
} 

export default App;
