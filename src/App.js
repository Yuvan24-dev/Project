import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import React from 'react';
import { Navbar, Nav, Container, Button,Carousel,Row,Col } from 'react-bootstrap';
import chennaiEV from "../src/Images/ImgB.jpg"
import VjAunt from "../src/Images/ImgC.jpg"
import Devevent from "../src/Images/ImgA.jpg"
import NeedTalk from "../src/Images/ImgD.png"
import Paddy from "../src/Images/ImgE.png"





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
           <Button style={{width:"205px"}} variant="link" className="location_botton   allign-item-center px-3 " >
  <GrLocation size={24} style={{ float: "left", color: "white", strokeWidth: "5"}} />
  <div className='location_anchour m-0' style={{ float: "right" }}>Event in Coimbatore</div>
  </Button>
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="d-none d-md-block">
              <Button
               style={{ 
                width: "129px", 
              }}
              className='pointer-events-none location_bottonRR location_botton' 
              variant="outline-primary"
              >
              <p className='location_anchour' style={{fontSize:"14px"}} >List your event</p>
              </Button>
              <Button style={{width:"125px"}} 
              className='pointer-events-none location_bottonRR  location_botton mx-2' 
              variant="outline-primary">
              <p style={{fontSize:"14px"}} className='location_anchour'>Work with us</p>
              </Button>
            </Nav.Link>


            <Button
  variant="outline-primary"
  className="rounded-circle border-white d-flex justify-content-center align-items-center no-hover"
  style={{ width: '40px', height: '40px' }}
>
  <GoSearch size={32} style={{ color: "white" }} />
</Button>

          </Nav>
        </Navbar.Collapse>

        <Nav className="ms-auto">
          <Nav.Link className="d-none d-md-block loca ">
            <Button variant="outline-primary" 
             className='pointer-events-none location_botton location_bottonR'
             style={{ 
              width: "150px", 
              borderColor: "#31c0f0", 
              borderStyle: "solid", 
              borderWidth: "1px",
            }}>
            <GrLocation  size={21} style={{  float: "left", color:"white",strokeWidth: "2"  }} />
            <p className='location_anchour Dummy-location'style={{fontSize:"15px"}}>Coimbatore</p>
            </Button>
          </Nav.Link>
          <Nav.Link className="visible-only-on-large dummy_UM">
  <Button
    variant="outline-primary"
    className="rounded-circle  d-flex justify-content-center align-items-center no-hover"
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
    <Carousel className='m-0'>
      {/* Slide 1 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid imgDimming ImgSizing"
              src={VjAunt}
              alt="First slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid ImgSizing"
              src={chennaiEV}
              alt="First slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid imgDimming ImgSizing"
              src={Devevent}
              alt="First slide - Image 3"
            />
          </Col>
        </Row>

      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={chennaiEV}
              alt="Second slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={Devevent}
              alt="Second slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={NeedTalk}
              alt="Second slide - Image 3"
            />
          </Col>
        </Row>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={Devevent}
              alt="Third slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={NeedTalk}
              alt="Third slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={Paddy}
              alt="Third slide - Image 3"
            />
          </Col>
        </Row>
      </Carousel.Item>
            {/* Slide 4 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={NeedTalk}
              alt="Third slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={Paddy}
              alt="Third slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={VjAunt}
              alt="Third slide - Image 3"
            />
          </Col>
        </Row>
      </Carousel.Item>
                 {/* Slide 5 */}
      <Carousel.Item className='py-5'>
        <Row className="justify-content-center">
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={Paddy}
              alt="Third slide - Image 1"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid"
              src={VjAunt}
              alt="Third slide - Image 2"
            />
          </Col>
          <Col md={4}>
            <img
              className="img-fluid imgDimming"
              src={chennaiEV}
              alt="Third slide - Image 3"
            />
          </Col>
        </Row>
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
