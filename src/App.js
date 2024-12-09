import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import React from 'react';
import { Navbar, Nav, Container, Button,Carousel,Row,Col } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go pt-0 pb-3">
      <Container fluid className="p-0">
        <div className="d-flex align-items-center p-0 ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav flex-row" className="d-lg-none float-start p-0" />
          <Navbar.Brand className='px-1 mb-1 position-relative' href="#home">
              <img
              className='forlogo position-absoulte top-0 p-0'
                src={log} 
                alt="Logo"
              />
           <Button variant="link" className="location_botton allign-item-center px-3 " >
  <GrLocation size={24} style={{ float: "left", color: "white", strokeWidth: "5"}} />
  <div className='location_anchour m-0' style={{ float: "right" }}>Event in Coimbatore</div>
  </Button>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="d-none d-md-block">
              <Button style={{ width: "129px", borderColor: "white" }} className='pointer-events-none location_bottonRR' variant="outline-primary">
                <p className='location_anchourR'>List your event</p>
              </Button>
              <Button style={{width:"125px"}} className='pointer-events-none location_bottonRR mx-2' variant="outline-primary">
                <p className='location_anchourR'>Work with us</p>
              </Button>
            </Nav.Link>


            <Button
  variant="outline-primary"
  className="pointer-events-none rounded-circle border-white d-flex justify-content-center align-items-center"
  style={{ width: '40px', height: '40px' }}
>
  <GoSearch size={32} style={{ color: "white" }} />
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
          <Nav.Link className="visible-only-on-large">
  <Button
    variant="outline-primary"
    className="rounded-circle border-white d-flex justify-content-center align-items-center"
    style={{ width: '40px', height: '40px' }}>
    <p className='location_anchour mt-3' style={{ fontSize: "15px" }}>UM</p>
  </Button>
</Nav.Link>



        </Nav>
      </Container>
    </Navbar>
  );
}



const CustomCarousel = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="First slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="First slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="First slide - Image 3"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>Vijay Antony 3.0 Live Concert</h3>
          <button className="btn btn-warning">BOOK NOW</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Second slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Second slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Second slide - Image 3"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>22nd Chennai International Film Festival</h3>
          <button className="btn btn-warning">BOOK NOW</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Third slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Third slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={log}
              alt="Third slide - Image 3"
            />
          </Col>
        </Row>
        <Carousel.Caption>
          <h3>Movies, Dining, Events</h3>
          <button className="btn btn-warning">Discover Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

















function App() { 
  return ( 
    <Container fluid className="there_you_go px-2 py-1 px-1"> 
      <CustomNavbar /> 
      <CustomCarousel />
    </Container> 
  ); 
} 

export default App;
