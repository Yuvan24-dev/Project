import buysmall from "../src/Images/Buynowimg.png"
import { FaChevronUp,FaChevronRight,FaChevronDown  } from "react-icons/fa";
import lanuage from '../src/Images/language.png'
import devaimg from '../src/Images/Devaround.jpg'
import rebun from '../src/Images/rebun.svg'
import timex from '../src/Images/timex.png'
import info from '../src/Images/info.png'
import loacte from '../src/Images/location.svg'
import { useState,createContext,useEffect } from 'react';
import { Button, Row, Col,} from 'react-bootstrap';
import Devevent from "../src/Images.chennai/expo3.jpg"
import calender from '../src/Images/calender.svg'
import { GrLocation } from "react-icons/gr";
import { Link,useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { TbCalendarTime } from "react-icons/tb";
import { useRef } from "react";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import previous from '../src/Images/Left.svg'
import VjAunt from "../src/Images/ImgB.jpg"
import chennaiEV from "../src/Images/ImgA.jpg"
import nexting from '../src/Images/Right.svg'
import { SmallPoster,Footer } from "./Cbe";
import people from "../src/Images/people.svg"
import { FaXTwitter } from "react-icons/fa6";


export const Event = createContext();

// Context Provider
export const Eventdetails = ({ children }) => {
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  let newEvent = Object.fromEntries(queryparams.entries());

  const [event, setEvent] = useState(newEvent);

  useEffect(() => {
    if (Object.keys(newEvent).length > 0) {
      setEvent(newEvent);
    }
  }, [newEvent]);

  return (
    <Event.Provider value={{ event }}>
      {children}
    </Event.Provider>
  );
};

export const Buypage = () => {
  
    const [showMore, setShowMore] = useState(false);
    const scrollRef = useRef(null);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
    
    const scrollLeft = () => {
      
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -440, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 440, behavior: 'smooth' });
      }
    };
  
    const location = useLocation();
    const queryparams = new URLSearchParams(location.search);
    let event = Object.fromEntries(queryparams.entries());
    
   


    return (
      <>
        <div  className='forADbanner py-0 px-0'>
      insider.in has a new home.
       </div>
          <Row className='flex justify-content-md-center px-0 px-lg-5 mx-0 pb-0 pb-lg-5'>
            <Col xs={12} md={7} className='px-0'>
              <Col><img alt="Img-verified" className=' img-poster d-block py-0  py-md-4 ' src={Devevent} /></Col>
              <Col  md={12} className='d-none ml-3 d-lg-flex allign-item-center justify-content-center' >
              <Col xs={11} md={12}>
              <img alt="Img-verified" className='img-small d-block py-4 px-0 px-sm-4 ' src={buysmall} /> 
              </Col>
              </Col>
              <Col className='css-1trzrhm py-0 d-block d-md-none pt-3 pt-md-0'>
            <div><h1 className='css-1mg2664 '>{event.eventName}</h1></div>
            <div className='d-flex gap-2 py-2'><img alt="Img-verified" src={rebun}/><p  className='css-15yjbxw m-0'>{event.category}</p></div>
            <div className='d-flex gap-2 py-2'><img alt="Img-verified" src={calender}/><p className='css-15yjbxw m-0'>{event.date} | {event.time}</p></div>
            <div className='d-flex gap-2 py-2'><img alt="Img-verified" src={loacte}/><p className='css-15yjbxw m-0'>{event.location}</p></div>
            </Col>
              <Col className='img-small d-none d-lg-block pt-4 p-0' ><h1 className='buyhead'>About the event</h1>  </Col>
              <div className=' p-0 m-0 d-none d-lg-block'>
              <Col className='d-block py-0 position-relative '>        
              <p className='buypara mb-1'>
          Madurai Makkal, get ready to ‘Vibe with Deva’! This January 2025, it’s time for Madurai to witness the<br />
          Father of Gaana - Devanesan Chokkalingam, fondly called as Thenisai Thendral Deva, who has composed music<br />
          for more than 400+ films in his 36 years of music career across 4 languages. He truly is a Legend!
             </p>
          {/* Show More content */}
             {showMore && (
             <>
            <p className='buypara mb-1'>
              From composing music for Manasukkeththa Maharasa in 1989 to Super Star Rajinikanth’s upcoming movie<br />
              Laal Salaam, Deva is considered a god’s gift for this era and more generations to come.
            </p>
            <p className='buypara mb-1'>
              Imagine listening to him singing his all-time hits from movies like Baasha, Arunachalam, Asai, Annamalai,<br />
              Naerukku Naer, Gajendra, Kushi and so many more - it’s a treat to the ears. His voice is magical, and his<br />
              tunes are contagious.
            </p>
            <p className='buypara mb-1'>
              This event is curated by Musico along with YR Events to celebrate Deva’s legacy in Tamil Cinema in<br />
              Madurai.
            </p>
          </>
          )}
  
          {/* Button to toggle the visibility of extra content */}
          <div
          className='position-absolute bottom-3 start-3 d-flex align-items-center border-bottom pb-3 w-100'
          style={{ cursor: 'pointer', zIndex: 1 }}
          onClick={toggleShowMore}
          >
          <span>{showMore ? 'Show Less' : 'Show More'}</span>
          <span style={{ marginLeft: "2px" }} className='me-0 float-end'>
            {showMore ? (
              <i  className="bi bi-chevron-up"><FaChevronUp /></i> // Change icon for 'Show Less'
            ) : (
              <i className="bi bi-chevron-down"><FaChevronDown/></i> // Change icon for 'Show More'
            )}
          </span>
          </div>
      </Col >
      
      </div>
              <Col  className='img-small d-none d-lg-block pt-5 p-0' >
              <div className='css-18oep7e'><h4 className='css-18oep7e' >Event Guid</h4>
               <p className='css-8faiv6'>See all<FaChevronRight/></p>
              </div>
              </Col>
              <Col  className='img-small d-none d-lg-flex pt-4 p-0' >
              <Col className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
                <img alt="Img-verified" className='lanuagelogo' src={lanuage} />
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Lanuage</p>
                <p className='m-0 css-16nwea1'>Tamil</p>
              </div>
              </Col>  
              <Col className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
                <img alt="Img-verified" className='lanuagelogo' src={timex} />
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Duration</p>
                <p className='m-0 css-16nwea1'>4 Hours</p>
              </div>
              </Col>             
              <Col className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
              <img alt="Img-verified" className='lanuagelogo' src={info} />
  
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Best Suited For Ages</p>
                <p className='m-0 css-16nwea1'>13 yrs & above</p>
              </div>
              </Col> 
              </Col>
              <Col  className='d-none img-small d-lg-block pt-4 p-0' ><h1 className='buyhead d-block'>Artist</h1>  
              <Col xs={5} className='d-flex gap-2'>
              <div className='css-b5jmm8'><img alt="Img-verified" className='css-12voypq' src={devaimg}/></div>
              <div className="d-flex flex-column justify-content-center" >
              <p className='d-block m-0 css-16nwea1'>Deva</p>
              <span className='d-flex'>
              <p className='d-block m-0  css-i02w788'>About artist <i><FaChevronRight size={14} /></i>
              </p>
              </span>
              </div>
              </Col>
              </Col>
              <Col  className='img-small d-none d-lg-block pt-4 p-0 ' >
              <h1 className='buyhead d-block m-0'>Venue</h1>  
              <div className='px-4 py-2  css-1t6pvtk'>
                <div className='py-2  d-flex justify-content-between'>
                <Col xs={7} className=' '>
                <p className='m-0'>Velammal Global Hospital Ground,Othakadai</p>
                <p className='m-0'>X57X+3PC, Narasingam, Tamil Nadu 625107, India</p>
                </Col>
                <Col xs={3} className='d-flex gap-2  flex-end css-d0985y'>
                <GrLocation />
                <p className='m-0'>GET DIRECTION</p>
                </Col>
                </div>
              </div>
              </Col>
              <Col  className='img-small d-lg-block pt-4 p-0 d-none ' >
              <div className='px-4 py-2 d-flex justify-content-between css-1t6pvtk '>
                <Col xs={7} className='py-2 '>
                <p className='m-0 css-13snml'>Terms & Conditions</p>
                </Col>
                <Col xs={1} className='py-2 align-items-center justify-content-center px-5 '>
                <FaChevronDown className='float-end mx-3' />
                </Col>
              </div>
              </Col> 
            </Col>
            
   {/* ------------------------Right Side---------------------------------------------*/}
            <Col xs={4}  className='py-0 py-lg-4 '>
            <Col className='css-1trzrhm py-4 d-none d-md-block'>
            <div><h1 className='css-1mg2664 '>{event.eventName}</h1></div>
            <div className='d-flex gap-2 py-1'><img alt="Img-verified" src={rebun}/><p className='css-15yjbxw m-0'>{event.category}</p></div>
            <div className='d-flex gap-2 py-1'><img alt="Img-verified" src={calender}/><p className='css-15yjbxw m-0'>{event.date} | {event.time}</p></div>
            <div className='d-flex gap-2 py-1'><img alt="Img-verified" src={loacte}/><p className='css-15yjbxw m-0'>{event.location}</p></div>
            <hr></hr>
            <Col className=' d-none d-lg-flex align-items-center justify-content-between '>
            <Col xs={8}><p className='css-1rgjqr3 m-0'><span>₹</span> 799 Onwards</p></Col>
            <Col xs={4}><Link to='selectseat'><Button className='css-1s6w8n3'>BUY NOW</Button></Link> </Col>
            </Col>
            </Col>
            <div className="d-lg-flex d-none  align-item-center">
              <div className=" d-flex justify-content-between py-3 my-3 w-100 css-v8p379">
                <div className="css-uhpxtn">
                  <img src={people}  alt="img"/>
                  <div >
                    <p className="css-q4ufnn m-0">Invite your friends</p>
                    <p className="css-14dzj0w m-0">and enjoy a shared experience</p>
                  </div>
                </div>
                <div className="css-8c21p0">
                  <FaXTwitter size={40} strokeWidth={0.5} />
                </div>

              </div>

            </div>
            </Col>
          </Row>
{/* ---------------------------------------for tablet screen--------------------------------------------------------- */}
   <Row className=' px-5 mx-0 '>
  <Col className='img-small d-block d-lg-none pt- p-0' ><h1 className='buyhead'>About the event</h1>  </Col>
  <div className=' p-0 m-0 d-block d-lg-none'>
              <Col className='d-block py-0 position-relative '>        
              <p className='buypara mb-1'>
          Madurai Makkal, get ready to ‘Vibe with Deva’! This January 2025, it’s time for Madurai to witness the<br />
          Father of Gaana - Devanesan Chokkalingam, fondly called as Thenisai Thendral Deva, who has composed music<br />
          for more than 400+ films in his 36 years of music career across 4 languages. He truly is a Legend!
             </p>
          {/* Show More content */}
             {showMore && (
             <>
            <p className='buypara mb-1'>
              From composing music for Manasukkeththa Maharasa in 1989 to Super Star Rajinikanth’s upcoming movie<br />
              Laal Salaam, Deva is considered a god’s gift for this era and more generations to come.
            </p>
            <p className='buypara mb-1'>
              Imagine listening to him singing his all-time hits from movies like Baasha, Arunachalam, Asai, Annamalai,<br />
              Naerukku Naer, Gajendra, Kushi and so many more - it’s a treat to the ears. His voice is magical, and his<br />
              tunes are contagious.
            </p>
            <p className='buypara mb-1'>
              This event is curated by Musico along with YR Events to celebrate Deva’s legacy in Tamil Cinema in<br />
              Madurai.
            </p>
          </>
          )}
  
          {/* Button to toggle the visibility of extra content */}
          <div
          className='position-absolute bottom-3 start-3 d-flex align-items-center border-bottom pb-3 w-100'
          style={{ cursor: 'pointer', zIndex: 1 }}
          onClick={toggleShowMore}
          >
          <span>{showMore ? 'Show Less' : 'Show More'}</span>
          <span style={{ marginLeft: "2px" }} className='me-0 float-end'>
            {showMore ? (
              <i  className="bi bi-chevron-up"><FaChevronUp /></i> // Change icon for 'Show Less'
            ) : (
              <i className="bi bi-chevron-down"><FaChevronDown/></i> // Change icon for 'Show More'
            )}
          </span>
          </div>
          </Col >
      </div>
      <div  className='img-small d-block d-lg-none pt-5 p-0' >
              <div className='css-18oep7e'><h4 className='css-18oep7e' >Event Guid</h4>
               <p className='css-8faiv6'>See all<FaChevronRight/></p>
              </div>
              </div>
              <Col  className='img-small d-flex flex-column flex-md-row d-lg-none pt-0 p-0' >
              <Col xs={12} md={4} className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
                <img alt="Img-verified" className='lanuagelogo' src={lanuage} />
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Lanuage</p>
                <p className='m-0 css-16nwea1'>Tamil</p>
              </div>
              </Col>  
              <Col xs={12} md={4}   className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
                <img alt="Img-verified" className='lanuagelogo' src={timex} />
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Duration</p>
                <p className='m-0 css-16nwea1'>4 Hours</p>
              </div>
              </Col>             
              <Col xs={12} md={4}  className='css-xl2q3v'>
              <figure className='css-1t6wkfn'>
              <img alt="Img-verified" className='lanuagelogo' src={info} />
  
              </figure>
              <div>
                <p className='m-0 css-i02w7'>Best Suited For Ages</p>
                <p className='m-0 css-16nwea1'>13 yrs & above</p>
              </div>
              </Col> 
              </Col>
              <div className=" d-flex justify-content-between py-3 my-3 w-100 css-v8p379">
                <div className="css-uhpxtn">
                  <img src={people}  alt="img"/>
                  <div >
                    <p className="css-q4ufnn m-0">Invite your friends</p>
                    <p className="css-14dzj0w m-0">and enjoy a shared experience</p>
                  </div>
                </div>
                <div className="css-8c21p0">
                  <FaXTwitter size={40} strokeWidth={0.5} />
                </div>
              </div>
              <Col  className='img-small d-block d-lg-none pt-4 p-0 ' >
              <h1 className='buyhead d-block m-0'>Venue</h1>  
              <div className='px-4 py-2  css-1t6pvtk'>
                <div className='py-2  d-flex justify-content-between'>
                <Col xs={7} className=' '>
                <p className='m-0'>Velammal Global Hospital Ground,Othakadai</p>
                <p className='m-0'>X57X+3PC, Narasingam, Tamil Nadu 625107, India</p>
                </Col>
                <Col xs={3} className='d-flex gap-2  flex-end css-d0985y'>
                <GrLocation />
                <p className='m-0'>GET DIRECTION</p>
                </Col>
                </div>
              </div>
              </Col>
              <div  className='img-small d-lg-none pt-4 p-0 d-block ' >
              <div className='px-2 py-2 d-flex justify-content-between css-1t6pvtk '>
                <Col xs={7} className='py-2 '>
                <p className='m-0 css-13snml'>Frequently Asked Questions</p>
                </Col>
                <Col xs={1} className='py-2 align-items-center justify-content-center px-0 '>
                <FaChevronDown className='float-end mx-3' />
                </Col>
              </div>
              </div> 
              <div  className='img-small d-lg-none pt-4 p-0 d-block ' >
              <div className='px-2 py-2 d-flex justify-content-between css-1t6pvtk '>
                <Col xs={7} className='py-2 '>
                <p className='m-0 css-13snml'>Terms & Conditions</p>
                </Col>
                <Col xs={1} className='py-2 align-items-center justify-content-center px-0 '>
                <FaChevronDown className='float-end mx-3' />
                </Col>
              </div>
              </div> 
  </Row>
{/* ---------------------------------------for events listing--------------------------------------------------------- */}
      <Container className='d-flex gap-md-0 gap-xs-1 justify-content-between allign-item-center pt-5'>
        <ul className='d-flex  m-0 px-2'>
        <li className='d-inline'>
            <p className='m-0 mt-2 eventung d-flex allign-item-center '><b>TRENDING EVENTS</b></p>
            </li>
          <li className='d-inline px-md-1 px-xs-0 '>
            <button className='forhistorylogo'>
            <MdOutlineLocalFireDepartment size={20} />
          </button></li>
        </ul>
        <span className=' RightBTN m-0 mt-3 p-0 mr-2'>
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
              <Col xs={12} md={4} className="px-2 py-0" >
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
              <Col xs={12} md={4} className="px-2 py-0">
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
              </Col> 
              <Col xs={12} md={4} className="px-2 py-0">
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
              </Col> 
              <Col xs={12} md={4} className="px-2">
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
              <Col xs={12} md={4} className="px-2">
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
              {/* More items... */}
            </ul>
          </div>
          <button className=" nextingl d-none d-lg-block" onClick={scrollRight} >
            <img alt="Img-verified" src={nexting} style={{ height: '30px' }} />
          </button>
        </div>
      </Container>
      <Col className='css-4casp6 d-lg-none  d-flex align-items-center justify-content-between '>
      <Col xs={8}><p className='css-1rgjqr3 m-0'><span>₹</span> 799 Onwards</p></Col>
      <Col xs={4}><Link to='selectseat'><Button className='css-1s6w8n3'>BUY NOW</Button></Link> </Col>
        </Col>
      <SmallPoster />
      <Footer />

      </>
    )
  }
  