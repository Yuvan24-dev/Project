import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import React from 'react';
import { Navbar, Nav, Container, Button,Carousel,Row,Col,Offcanvas } from 'react-bootstrap';
import chennaiEV from "../src/Images/ImgB.jpg"
import VjAunt from "../src/Images/ImgC.jpg"
import Devevent from "../src/Images/ImgA.jpg"
import NeedTalk from "../src/Images/ImgD.png"
import Paddy from "../src/Images/ImgE.png"
import { FiChevronRight } from "react-icons/fi";
import { GrHistory } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { useState } from 'react';







function CustomNavbar() {
  // State to control the visibility of the Offcanvas menu
  const [showMenu, setShowMenu] = useState(false);

  // Toggle function to show or hide the Offcanvas menu
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* Original Navbar */}
      <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go px-2 py-0 ">
        <Container fluid className="p-0 px-0">
          <div className="d-flex align-items-center p-0">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav flex-row"
              className="d-md-none float-start p-0 toogler_Toy"
              onClick={toggleMenu}  
            />
           <Navbar.Brand className='px-1 mb-1 position-relative' href="#home">
            <img
              className='forlogo position-absoulte top-0 p-0'
              src={log}
              alt="Logo"
            />
            <Button style={{ width: "205px" }} variant="link" className="location_botton align-item-center px-3 d-none  d-lg-inline">
              <GrLocation className='dumlo' size={24} style={{ float: "left", color: "white", strokeWidth: "5" }} />
              <div className='location_anchour m-0' style={{ float: "right" }}>Event in Coimbatore</div>
            </Button>
          </Navbar.Brand>
          </div>

            <Nav className="ms-auto d-flex align-items-center">
            
            </Nav>

          <Nav className="ms-auto ">
          <Nav.Link className=" d-flex flex-colum ">
                <Button
                  style={{ width: '129px' }}
                  className="pointer-events-none location_bottonRR location_botton d-none d-xxl-inline"
                  variant="outline-primary"
                >
                  <p className="location_anchour" style={{ fontSize: '14px' }}>
                    List your event
                  </p>
                </Button>
                <Button
                  style={{ width: '125px' }}
                  className="pointer-events-none location_bottonRR location_botton mx-2  d-none d-xxl-inline"
                  variant="outline-primary"
                >
                  <p style={{ fontSize: '14px' }} className="location_anchour">
                    Work with us
                  </p>
                </Button>
                <Button className="forSearch d-none d-md-inline mx-3  ">
                  <span>
                    <GoSearch size={25} />
                  </span>
                </Button>
                <Button
                variant="outline-primary"
                className="d-inline location_botton location_bottonR forChatref m-0 position-relative "
              >
                <GrLocation size={21} style={{ float: 'left', color: 'white', strokeWidth: '2' }} />
                <p className="location_anchour Dummy-location d-none d-sm-block " style={{ fontSize: '15px' }}>
                  Coimbatore
                </p>
              </Button>
              </Nav.Link>
          </Nav>

          {/* Show "UM" button only on large screens and above */}
          <Nav.Link className="d-none d-lg-block ">
            <Button
              variant="outline-primary"
              className="rounded-circle d-flex justify-content-center align-items-center no-hover "
              style={{ width: '40px', height: '40px' }}
            >
              <p className="location_anchour mt-3" style={{ fontSize: '15px' }}>
                UM
              </p>
            </Button>
          </Nav.Link>
        </Container>
      </Navbar>

      <Offcanvas className="forShowcase"  show={showMenu} onHide={toggleMenu} placement="start" style={{ width: '80%', backgroundColor: 'white' }}>
     <Offcanvas.Body>
    <Nav className="flex-column forShowcase">
    </Nav>
  </Offcanvas.Body>
   </Offcanvas>
    </>
  );
}

const Adbanner =()=>{
  return(
  <Container fluid  className='forADbanner py-0 px-0'>
  insider.in has a new home.
 </Container>
  );
};




const CustomCarousel = () => {
  return (
    <>
<div className='py-0  '>
<Carousel className="m-0 pb-0 py-0 " indicators={true}>
  {/* Slide 1 */}
  <Carousel.Item className=" py-0 pt-lg-4  pb-lg-5 pb-md-4">
    <Row className="justify-content-center">
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={chennaiEV}
          alt="Second slide - Image 1"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Devevent}
          alt="Second slide - Image 2"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={NeedTalk}
          alt="Second slide - Image 3"
        />
      </Col>
    </Row>
  </Carousel.Item>

  {/* Slide 2 */}
  <Carousel.Item className="py-0  pt-lg-4  pb-lg-5 pb-md-4">
    <Row className="justify-content-center">
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={chennaiEV}
          alt="Second slide - Image 1"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Devevent}
          alt="Second slide - Image 2"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={NeedTalk}
          alt="Second slide - Image 3"
        />
      </Col>
    </Row>
  </Carousel.Item>

  {/* Slide 3 */}
  <Carousel.Item className="py-0  pt-lg-4  pb-lg-5 pb-md-4">
    <Row className="justify-content-center">
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={Devevent}
          alt="Third slide - Image 1"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={NeedTalk}
          alt="Third slide - Image 2"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={Paddy}
          alt="Third slide - Image 3"
        />
      </Col>
    </Row>
  </Carousel.Item>

  {/* Slide 4 */}
  <Carousel.Item className="py-0 pt-lg-4  pb-lg-5 pb-md-4">
    <Row className="justify-content-center">
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={NeedTalk}
          alt="Third slide - Image 1"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Paddy}
          alt="Third slide - Image 2"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={VjAunt}
          alt="Third slide - Image 3"
        />
      </Col>
    </Row>
  </Carousel.Item>

  {/* Slide 5 */}
  <Carousel.Item className="py-0  pt-lg-4  pb-lg-5 pb-md-4">
    <Row className="justify-content-center">
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={Paddy}
          alt="Third slide - Image 1"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={VjAunt}
          alt="Third slide - Image 2"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={chennaiEV}
          alt="Third slide - Image 3"
        />
      </Col>
    </Row>
  </Carousel.Item>
</Carousel>
</div>
    </>
  );
};

const Searchsection= () =>{
  return(
    <Container className="search-wrapper pt-5 d-block d-sm-none">
      <input
        className="Forsearching"
        type="search"
        placeholder="concert, comedy show, cricket match, football game..."
      />
      <GoSearch className="search-icon "/>
     </Container>
  )
}

const Nxttocourousal = () =>{
  return (
    <Container  fluid="lg">
      <div className="pt-0">
        <ul className="d-flex m-0 m-auto pt-5 overflow-x-auto">
          <li xs={4} className="d-flex Fortablets px-0">
            <img className="nextTocourousal m=1" src={Devevent} />
            <div className="contentfor">
              <p className="d-block mt-2 px-3">
                <b>Vibe With Deva</b>
                <br />
                Thenisal thendral LIVE
              </p>
            </div>
            <div className="d-flex forSmallicon align-items-center">
              <FiChevronRight size={20} />
            </div>
          </li>
          {/* Second tab */}
          <li xs={4} className="d-flex Fortablets p-0">
            <img className="nextTocourousal" src={VjAunt} />
            <div className="contentfor">
              <p className="mt-2 px-3">
                <b>December 28</b>
                <br />
                Vijay Auntony
              </p>
            </div>
            <div className="pl-4 mt-3">
              <FiChevronRight size={20} />
            </div>
          </li>
          {/* Third tab */}
          <li xs={4} className="d-flex Fortablets">
            <img className="nextTocourousal" src={Paddy} />
            <div className="contentfor">
              <p className="d-block mt-2 px-3">
                <b>Vibe With Deva</b>
                <br />
                Thenisal thendral LIVE
              </p>
            </div>
            <div className="pl-4 mt-3">
              <FiChevronRight size={20} />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );

}

const Recentlyviewd=()=>{
  return(
    <Container>
<section className='px-3 overflow-x-auto'>
  <div className='pt-5'>
  <Row className='m-0'>
    <Col className='d-flex  flex-col p-0'>
    <div className='d-flex'>
      <Button className=' d-inline m-0 forhistorylog  '>
      <GrHistory size={27} style={{color:"black"}} />
      </Button>
      <span className='d-inline'>
    <h1 className='forRecenth p-0 m-0 '>RECENTLY VIEWD</h1>
    <p className='forRcentP pl-5'> pick up wherw you left of</p>
    </span>
    </div>
    </Col>
  </Row>

<div>
    <ul className='py-3 d-flex p-0 '>
      <li className='d-inline mr-4  forimgtab'>
      <img 
    src={VjAunt}
    className='forViewitem '
    />
      </li>
      <li className='d-inline'>
      <img 
    src={Devevent}
    className='forViewitem'
    />
      </li>
    </ul>
  </div>
  </div>
</section>
</Container>
  )
}

const BigPoster=()=>{
  return(
  <Container fluid="sm" className='px-0 px-sm-4  z-index-1'>
  <Col className='px-5 pb-3 p-sm-5 forBG d-flex'>
  <div className='forOGcontent'>
  <div className='formusicB'>
  <CiMusicNote1 size={30} />
  </div>
  <span className='Forwordings'>
  <h1 className='m-0' style={{ fontFamily: '"Bebas Neue", serif', fontSize: '28px' }}>vijay antony live</h1>
  <p className='m-0'>Relive the nostalgia with him on stage!</p>
  <p className='m-0'>Vijay Antony, the OG of Tamil rap since 2005, continues to shape the<br/> 
    industry with timeless hits like “Saathikadi,” “Aathichudi,” and <br/> 
    “Machakanni."</p>
  </span>
  <a style={{ textDecoration: 'none' }}>
   <button className='Bybutton'>
    <p className='m-0'>Buy Now</p>
    </button> 
  </a>
  </div>
  </Col>
  </Container>)
}


const Trendingeve=()=>{
  return(
    <>
    <Container className='d-flex justify-content-between'> 
      <ul className='d-flex'>
        <li className='d-inline'><button className='forhistorylog'>
          <MdOutlineLocalFireDepartment />
          </button></li>
          <li className='d-inline'><p className='m-0'><b>TRENDING EVENTS</b></p></li>
      </ul>
      <span className='RightBTN'>
        <a lassName='m-0 p-0'>
        <p className='m-0 p-0'>View all</p>
        </a>
      </span>
    </Container>
  <Container>
    <Row className="d-flex flex-row gap-3">
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
  </Container>
  </>
  )
}














function App() { 
  return ( 
    <>
    <Container fluid className="there_you_go py-0 px-0 sticky-navbar"> 
      <CustomNavbar /> 
      </Container> 
      <Adbanner/>
      <Container fluid className="there_you_go py-0  py-xl-1 px-0 z-index--1"> 
      <CustomCarousel   />
      </Container> 
      <Searchsection />
      <Nxttocourousal />
      <Recentlyviewd/>
      <BigPoster />
      {/* <Trendingeve /> */}
       </>
  ); 
} 

export default App;
