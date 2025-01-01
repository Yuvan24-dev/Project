import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import {React,useRef }from 'react';
import { Navbar, Nav, Container, Button,Carousel,Row,Col,Offcanvas } from 'react-bootstrap';
import chennaiEV from "../src/Images.chennai/expo1.jpg"
import VjAunt from "../src/Images.chennai/expo2.jpg"
import Devevent from "../src/Images.chennai/expo3.jpg"
import NeedTalk from "../src/Images.chennai/expo4.jpg"
import Paddy from "../src/Images.chennai/expo5.jpg"
import { FiChevronRight } from "react-icons/fi";
import { GrHistory } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { useState } from 'react';
import { TbCalendarTime } from "react-icons/tb";
import exportA from "../src/Images/Expo-1.webp"
import exportB from "../src/Images/expo-2.jpg"
import exportC from "../src/Images/Expo-3.jpg"
import exportD from "../src/Images/Expo-4.png"
import exportE from "../src/Images/expo-5.png"
import exportF from "../src/Images/expo-6.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nexting from '../src/Images/Right.svg'
import previous from '../src/Images/Left.svg'




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
<section className='px-3 '>
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

<div className='overflow-x-auto'>
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


// import { useRef } from 'react';
// import { Col, Container } from 'react-bootstrap'; // Assuming you're using React-Bootstrap
// import { TbCalendarTime } from 'react-icons/tb';
// import { GrLocation } from 'react-icons/gr';
// import Devevent from './Devevent.jpg'; // Assuming your image import
// // Replace Devevent with the correct image path

const Trendingeve = () => {
  const scrollRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <div className="scroll-container position-relative" style={{ position: 'relative' }}>
      <button className="float-end nexting" onClick={scrollLeft} >
      <img src={previous} style={{height:'30px'}} />
      </button>
        <div
          ref={scrollRef}
          className="scrollref"
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '10px 0',
            position: 'relative',
          }}
        >
          <ul className="py-3 d-flex p-0">
            {/* Repeat your Col components as you did above for each item */}
            <Col xs={4} className="px-2">
              <li className="d-inline mr-4 forimgtabA">
                <img className="eventcardimg" src={Devevent} alt="Event 1" />
                <div className="eventBottomcard">
                  <div className="eventcardtitle m-o">
                    Circus X Namas'cray Experience 2024 | NY2025
                  </div>
                  <div className="eventcontent smalltext m-o">
                    <TbCalendarTime size={20} />
                    <span className="smalltext">December 28 | 6PM</span>
                  </div>
                  <div className="eventcontent m-o">
                    <GrLocation />
                    <span className="smalltext">A.M.Jain College Ground, Chennai</span>
                  </div>
                  <div className="cardfooter">
                    <span>₹1999 Onwards</span>
                    <span className="rightcard">buy now</span>
                  </div>
                </div>
              </li>
            </Col>
            <Col xs={4} className="px-2">
              <li className="d-inline mr-4 forimgtabA">
                <img className="eventcardimg" src={Devevent} alt="Event 1" />
                <div className="eventBottomcard">
                  <div className="eventcardtitle m-o">
                    Circus X Namas'cray Experience 2024 | NY2025
                  </div>
                  <div className="eventcontent smalltext m-o">
                    <TbCalendarTime size={20} />
                    <span className="smalltext">December 28 | 6PM</span>
                  </div>
                  <div className="eventcontent m-o">
                    <GrLocation />
                    <span className="smalltext">A.M.Jain College Ground, Chennai</span>
                  </div>
                  <div className="cardfooter">
                    <span>₹1999 Onwards</span>
                    <span className="rightcard">buy now</span>
                  </div>
                </div>
              </li>
            </Col> <Col xs={4} className="px-2">
              <li className="d-inline mr-4 forimgtabA">
                <img className="eventcardimg" src={Devevent} alt="Event 1" />
                <div className="eventBottomcard">
                  <div className="eventcardtitle m-o">
                    Circus X Namas'cray Experience 2024 | NY2025
                  </div>
                  <div className="eventcontent smalltext m-o">
                    <TbCalendarTime size={20} />
                    <span className="smalltext">December 28 | 6PM</span>
                  </div>
                  <div className="eventcontent m-o">
                    <GrLocation />
                    <span className="smalltext">A.M.Jain College Ground, Chennai</span>
                  </div>
                  <div className="cardfooter">
                    <span>₹1999 Onwards</span>
                    <span className="rightcard">buy now</span>
                  </div>
                </div>
              </li>
            </Col> <Col xs={4} className="px-2">
              <li className="d-inline mr-4 forimgtabA">
                <img className="eventcardimg" src={Devevent} alt="Event 1" />
                <div className="eventBottomcard">
                  <div className="eventcardtitle m-o">
                    Circus X Namas'cray Experience 2024 | NY2025
                  </div>
                  <div className="eventcontent smalltext m-o">
                    <TbCalendarTime size={20} />
                    <span className="smalltext">December 28 | 6PM</span>
                  </div>
                  <div className="eventcontent m-o">
                    <GrLocation />
                    <span className="smalltext">A.M.Jain College Ground, Chennai</span>
                  </div>
                  <div className="cardfooter">
                    <span>₹1999 Onwards</span>
                    <span className="rightcard">buy now</span>
                  </div>
                </div>
              </li>
            </Col> <Col xs={4} className="px-2">
              <li className="d-inline mr-4 forimgtabA">
                <img className="eventcardimg" src={Devevent} alt="Event 1" />
                <div className="eventBottomcard">
                  <div className="eventcardtitle m-o">
                    Circus X Namas'cray Experience 2024 | NY2025
                  </div>
                  <div className="eventcontent smalltext m-o">
                    <TbCalendarTime size={20} />
                    <span className="smalltext">December 28 | 6PM</span>
                  </div>
                  <div className="eventcontent m-o">
                    <GrLocation />
                    <span className="smalltext">A.M.Jain College Ground, Chennai</span>
                  </div>
                  <div className="cardfooter">
                    <span>₹1999 Onwards</span>
                    <span className="rightcard">buy now</span>
                  </div>
                </div>
              </li>
            </Col>
            {/* More items... */}
          </ul>
        </div>
        <button className=" nextingl" onClick={scrollRight} >
          <img src={nexting} style={{height:'30px'}} />
        </button>
      </div>
    </Container>
  );
};




const Artist=()=>{
  // fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  return(
    <>
    <Container className='d-flex justify-content-between pt-5'> 
      <ul className='d-flex'>
        <li className='d-inline'><button className='forhistorylog'>
          <GrLocation size={20} />
          </button></li>
          <li className='d-inline'><p className='m-0 eventung'><b>FIND NEW EXPERIENCES</b></p>
          <p className='css-1r92uuv'>Explore. Discover. Make a Plan</p></li>
      </ul>
    </Container>
    <Container>
    <ul className='css-11iqm8'>
        <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportA}/>
        </li>
        <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportB}/>
        </li> <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportC}/>
        </li> <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportD}/>
        </li>
        <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportE}/>
        </li> <li className='css-5j26x3'>
          <img className='css-1ikh80e' src={exportF}/>
        </li>
      </ul>

      </Container>
  </>
  )
}
const ChennaiPg=()=>{
return(
    <>
          <Adbanner/>
          <Container fluid className="there_you_go py-0  py-xl-1 px-0 z-index--1"> 
          <CustomCarousel   />
          </Container> 
          <Searchsection />
          <Nxttocourousal />
          <Recentlyviewd/>
          <BigPoster />
          <Trendingeve />
          <Artist />
    </>
)
}
export default ChennaiPg