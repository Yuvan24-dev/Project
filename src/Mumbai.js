import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { React, useRef } from 'react';
import { Container, Button, Carousel, Row, Col,} from 'react-bootstrap';
import chennaiEV from "../src/Images.chennai/expo1.jpg"
import VjAunt from "../src/Images.chennai/expo2.jpg"
import Devevent from "../src/Images.chennai/expo3.jpg"
import NeedTalk from "../src/Images.chennai/expo4.jpg"
import Paddy from "../src/Images.chennai/expo5.jpg"
import { FiChevronRight } from "react-icons/fi";
import { GrHistory } from "react-icons/gr";
import { CiMusicNote1 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
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
import featured from '../src/Images/feature.svg'
import { LuMusic4 } from "react-icons/lu";
import { GiVideoConference } from "react-icons/gi";
import { BsTicketPerforated } from "react-icons/bs";
import calender from '../src/Images/calender.svg'
import mic from "../src/Images/mic.svg"





export const Adbanner = () => {
  return (
    <Container fluid className='forADbanner py-0 px-0'>
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
          src={exportA}
          alt="Second slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Devevent}
          alt="Second slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={NeedTalk}
          alt="Second slide"
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
          alt="Second slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Devevent}
          alt="Second slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={NeedTalk}
          alt="Second slide"
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
          alt="Third slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={NeedTalk}
          alt="Third slide "
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={Paddy}
          alt="Third slide"
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
          alt="Third slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={Paddy}
          alt="Third slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={VjAunt}
          alt="Third slide"
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
          alt="Third slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle px-1">
        <img
          className="img-fluid imgMainstyle"
          src={VjAunt}
          alt="Third slide"
        />
      </Col>
      <Col md={4} className="imgMainstyle d-none d-md-inline px-1">
        <img
          className="img-fluid imgDimming imgMainstyle"
          src={chennaiEV}
          alt="Third slide"
        />
      </Col>
    </Row>
  </Carousel.Item>
</Carousel>
</div>
    </>
  );
};

const Searchsection = () => {
  return (
    <Container className="search-wrapper pt-5 d-block d-sm-none">
      <input
        className="Forsearching"
        type="search"
        placeholder="concert, comedy show, cricket match, football game..."
      />
      <GoSearch className="search-icon " />
    </Container>
  )
}

const Nxttocourousal = () => {
  return (
    <Container fluid="lg">
      <div className="pt-0">
        <ul className="d-flex m-0 m-auto pt-5 overflow-x-auto">
          <li xs={4} className="d-flex Fortablets px-0">
            <img alt='courousel' className="nextTocourousal m=1" src={Devevent} />
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
            <img alt='courousel' className="nextTocourousal" src={VjAunt} />
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
            <img alt='viewd' className="nextTocourousal" src={Paddy} />
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

const Recentlyviewd = () => {
  return (
    <Container>
      <section className='px-3 '>
        <div className='pt-5'>
          <Row className='m-0'>
            <Col className='d-flex  flex-col p-0'>
              <div className='d-flex'>
                <Button className=' d-inline m-0 forhistorylog  '>
                  <GrHistory size={27} style={{ color: "black" }} />
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
                  alt='viewd'
                />
              </li>
              <li className='d-inline'>
                <img
                  src={Devevent}
                  className='forViewitem'
                  alt='viewd'
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  )
}

const BigPoster = () => {
  return (
    <Container fluid="sm" className='px-0 px-sm-4  z-index-1'>
      <Col className='px-5 pb-3 p-sm-5 forBG d-flex'>
        <div className='forOGcontent'>
          <div className='formusicB'>
            <CiMusicNote1 size={30} />
          </div>
          <span className='Forwordings'>
            <h1 className='m-0' style={{ fontFamily: '"Bebas Neue", serif', fontSize: '28px' }}>vijay antony live</h1>
            <p className='m-0'>Relive the nostalgia with him on stage!</p>
            <p className='m-0'>Vijay Antony, the OG of Tamil rap since 2005, continues to shape the<br />
              industry with timeless hits like “Saathikadi,” “Aathichudi,” and <br />
              “Machakanni."</p>
          </span>
            <button className='Bybutton'>
              <p className='m-0'>Buy Now</p>
            </button>
        </div>
      </Col>
    </Container>)
}
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
    <>
      <Container className='d-flex justify-content-between allign-item-center'>
        <ul className='d-flex  m-0 px-0'>
          <li className='d-inline px-md-1 px-xs-0 '>
            <button className='forhistorylogo'>
            <MdOutlineLocalFireDepartment size={20} />
          </button></li>
          <li className='d-inline'>
            <p className='m-0 mt-2 eventung d-flex allign-item-center '><b>TRENDING EVENTS</b></p></li>
        </ul>
        <span className=' RightBTN m-0 mt-3 p-0'>
        <p className='m-0 px-2 py-1 RBpara'>View all</p> 
        </span>
      </Container>
      <Container>
        <div className="scroll-container position-relative" style={{ position: 'relative' }}>
          <button className="float-end nexting d-none d-lg-block" onClick={scrollLeft} >
            <img alt="Img-verified" src={previous} style={{ height: '30px' }} />
          </button>
          <div
            ref={scrollRef}
            className="scrollref"
            style={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '0px',
              position: 'relative',
            }}
          >
            <ul className="py-0 d-flex p-0">
              {/* Repeat your Col components as you did above for each item */}
              <Col xs={4} className="px-2 py-0" >
                <li className="d-inline mr-4 forimgtabA">
                  <img  alt="Img-verified" className="eventcardimg" src={Devevent}/>
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
              <Col xs={4} className="px-2 py-0">
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="eventcardimg" src={VjAunt}/>
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
              </Col> <Col xs={4} className="px-2 py-0">
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="eventcardimg" src={chennaiEV}/>
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
                  <img alt="Img-verified" className="eventcardimg" src={Devevent}/>
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
                  <img alt="Img-verified" className="eventcardimg" src={Devevent}/>
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
            </ul>
          </div>
          <button className=" nextingl d-none d-lg-block" onClick={scrollRight} >
            <img alt="Img-verified" src={nexting} style={{ height: '30px' }} />
          </button>
        </div>
      </Container>
    </>
  );
};




const Artist=()=>{

  return(
    <>
    <Container className='d-flex justify-content-between pt-5'> 
      <ul className='d-flex p-0'>
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
          <img alt="Img-verified" className='css-1ikh80e' src={exportA}/>
        </li>
        <li className='css-5j26x3'>
          <img alt="Img-verified"  className='css-1ikh80e' src={exportB}/>
        </li> <li className='css-5j26x3'>
          <img alt="Img-verified" className='css-1ikh80e' src={exportC}/>
        </li> <li className='css-5j26x3'>
          <img alt="Img-verified" className='css-1ikh80e' src={exportD}/>
        </li>
        <li className='css-5j26x3'>
          <img alt="Img-verified" className='css-1ikh80e' src={exportE} />
        </li> <li className='css-5j26x3'>
          <img alt="Img-verified" className='css-1ikh80e' src={exportF} />
        </li>
      </ul>

      </Container>
  </>
  )
}
const Featuredeve = () => {
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
    <>
      <Container className='d-flex justify-content-between allign-item-center pt-5'>
        <ul className='d-flex m-0 p-0 px-2'>
          <li className='d-inline'>
            <button className='forhistorylog p-1'>
              <img alt="Img-verified" src={featured} />
            </button></li>
          <li className='d-flex pt-2 allign-item center '><p className='m-0 Featured-text'><b>Featured events</b></p></li>
        </ul>
      </Container>
      <Container>
        <div className="scroll-container position-relative" style={{ position: 'relative' }}>
          <button className="float-end nexting d-none d-lg-block" onClick={scrollLeft} >
            <img alt="Img-verified" src={previous} style={{ height: '30px' }} />
          </button>
          <div
            ref={scrollRef}
            className="scrollref"
            style={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '0px',
              position: 'relative',
            }}
          >
            <ul className="py-0 d-flex p-0">
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA position-relative">
                  <span className='position-relative'>
                    <img  className="featuredcardimg" src={VjAunt} alt="Event 1" />
                  </span>
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={Devevent}  />
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={VjAunt}  />
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={chennaiEV}  />
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={Devevent}  />
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={VjAunt}  />
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
              <Col md={5} xs={9} lg={3} className="px-lg-3 px-2 py-0 featured " >
                <li className="d-inline mr-4 forimgtabA">
                  <img alt="Img-verified" className="featuredcardimg" src={chennaiEV}  />
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
          <button className=" nextingl d-none d-lg-block" onClick={scrollRight} >
            <img alt="Img-verified" src={nexting} style={{ height: '30px' }} />
          </button>
        </div>
      </Container>
    </>
  );
};
const Browseevent = () => {
  return (
    <>
      <Container className='d-flex justify-content-between allign-item-center pb-3 pt-md-1 pt-lg-5'>
        <ul className='d-flex m-0 p-0 px-2'>
          <li className='d-inline'>
            <button className='forhistorylog p-1'>
              <img alt="Img-verified" src={featured} />
            </button></li>
          <li className='d-inline p-2 '><p className='m-0 Featured-text'><b>Browse events by genre</b></p></li>
        </ul>
      </Container>
      <Container>
        <ul className='d-flex utilitybrowser gap-4 gap-md-4 gap-lg-4 gap-xl-5 '>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mr-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <LuMusic4 size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mx-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <GiVideoConference size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mr-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <BsTicketPerforated size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mx-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <BsTicketPerforated size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mr-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <LuMusic4 size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mx-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <LuMusic4 size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mr-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <BsTicketPerforated size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
          <Col md={1} className='mx-lg-2 mx-xl-0 px-1 mx-md-1'>
            <li className='forbrowsecard text-decoration-none px-1'>
              <span className='logocard'>
                <LuMusic4 size={55} />
              </span>
              <div className='dibrows'>
                <p className='browseinghead text-center'>Music</p>
                <p className='browseingpara text-center'>5 events</p>
              </div>
            </li>
          </Col>
        </ul>
      </Container>
    </>
  );
};
export const Weekevent=() =>{
  return(
    <>
    <Container>
      <div className='d-flex Weeklytop allign-item-center  gap-2 pt-0 pt-lg-4 '>
        <button className='forhistorylog m-0 '>
        <img alt="Img-verified" className='' src={calender} style={{height:"30px", width:"30px"}}></img>
        </button>
        <h1 className='css-cl3kya m-0 pt-2'>EVENT THIS WEEK</h1>
      </div>
      <ul className='d-flex gap-4 gap-md-5 gap-xl-4 px-0 mx-0 py-2 py-xl-4 scrollref'
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '0px',
          position: 'relative',
        }}
      >      
        
      <Col xs={4} md={3} xl={2} >
      <li className='css-1a57qoc'>
        <span className='css-10qfxme'>Today</span>
        <span className='css-o4b28l'>Thu, 9 Jan</span>
      </li>
      </Col>
      <Col xs={4} md={3} xl={2}>
      <li className='css-1a57qoc'>
        <span className='css-10qfxme'>Tomorrow</span>
        <span className='css-o4b28l'>Thu, 9 Jan</span>
      </li>
      </Col>      
      <Col xs={4} md={3} xl={2}>
      <li className='css-1a57qoc'>
        <span className='css-10qfxme'>Weekend</span>
        <span className='css-o4b28l'>Thu, 9 Jan</span>
      </li>
      </Col>
    </ul>
    </Container>
    </>
  )
}


const ArtistPg = () => {
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
    <>
      <Container className='d-flex justify-content-between allign-item-center py-2'>
        <ul className='d-flex m-0 p-0 px-2'>
          <li className='d-inline'>
            <button className='forhistorylog p-1'>
              <img alt="Img-verified" src={mic} />
            </button></li>
          <li className='d-flex pt-1 allign-item center '><p className='m-0 Featured-text'><b>ARTISTS</b></p></li>
        </ul>
        <span className=' RightBTN m-0 mt-3 p-0'>
        <p className='m-0 px-2 py-1 RBpara'>View all</p> 
        </span>
      </Container>
      <Container>
        <div className="scroll-container position-relative" style={{ position: 'relative' }}>
          <button className="float-end nexting d-none d-lg-block" onClick={scrollLeft} >
            <img alt="Img-verified" src={previous} style={{ height: '30px' }} />
          </button>
          <div
            ref={scrollRef}
            className="scrollref"
            style={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '0px',
              position: 'relative',
            }}
          >
            <ul className="py-0 d-flex p-0">
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img  className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                  <div className=' mt-1'>
                  <p className='m-0 text-center browseinghead '>Hello</p>
                  <p className='m-0 text-center browseingpara '>Hello</p>
                  </div>
                </li>
              </Col>
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                </li>
              </Col>
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                </li>
              </Col>
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                </li>
              </Col>
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                </li>
              </Col>
              <Col md={3} xs={4} lg={2} className="px-lg-0 px-2 py-0 featured d-flex allign-item-center justify-content-center " >
                <li className="d-inline mr-4  position-relative">
                  <span className='position-relative'>
                    <img className="aRtistcardimg" src={VjAunt} alt="Event 1" />
                  </span>
                </li>
              </Col>
              {/* More items... */}
            </ul>
          </div>
          <button className=" nextingl d-none d-lg-block" onClick={scrollRight} >
            <img alt='img-verified' src={nexting} style={{ height: '30px' }} />
          </button>
        </div>
      </Container>
    </>
  );
};

const MumbaiPg=()=>{
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
          <Featuredeve />
          <Browseevent />
          <Weekevent />
          <ArtistPg />
    </>
)
}
export default MumbaiPg