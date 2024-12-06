import './App.css'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go p-0">
      <Container fluid className="p-0">
        <div className="d-flex align-items-center p-0 ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav flex-row" className="d-lg-none float-start p-0" />
          <Navbar.Brand className='px-1 mb-1 position-relative' href="#home">
              <img
              className='forlogo position-absoulte top-0 p-0'
                src={log} 
                alt="Logo"
              />
            <Button variant="link" className=" location_botton allign-item-center px-3 ">
            <GrLocation  size={24} style={{  float: "left", color:"white",strokeWidth: "5"  }} />
              <p className='location_anchour mx-3'>Event in coimbatore</p>
            </Button>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="d-none d-md-block">
              <Button style={{ width: "129px", borderColor: "white" }} className='pointer-events-none location_bottonRR' variant="outline-primary">
                <p className='location_anchour'>List your event</p>
              </Button>
              <Button style={{width:"125px"}} className='pointer-events-none location_bottonRR mx-2' variant="outline-primary">
                <p className='location_anchour'>Work with us</p>
              </Button>
            </Nav.Link>


            <Button
            variant="outline-primary"
            className="pointer-events-none rounded-circle border-white d-flex justify-content-center align-items-center"
            style={{ width: '40px', height: '40px' }}
            >
            <GoSearch size={70} style={{ color: "white" }} />
           </Button>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
          <Nav.Link className="d-none d-md-block loca ">
            <Button variant="outline-primary" className='pointer-events-none location_bottonR'>
            <GrLocation  size={21} style={{  float: "left", color:"white",strokeWidth: "2"  }} />
            <p className='location_anchour'style={{fontSize:"15px"}}>Coimbatore</p>
            </Button>
          </Nav.Link>
          <Nav.Link>
          <Button
            variant="outline-primary"
            className="pointer-events-none dummy_UM rounded-circle border-white d-flex flex-direction-row justify-content-center align-items-center"
            style={{ width: '40px', height: '40px' }}>
              <p className='location_anchour mt-3'style={{fontSize:"15px"}}>UM</p>
           </Button>
           </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}












function App() { 
  return ( 
    <Container fluid className="there_you_go px-2 py-1 px-1"> 
      <CustomNavbar /> 
    </Container> 
  ); 
} 

export default App;
