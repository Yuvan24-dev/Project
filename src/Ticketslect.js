import React from "react";
import { Row,Col,Container} from "react-bootstrap";
import { Adbanner } from "./Cbe";
import { useState,useEffect } from "react";
import plus from '../src/Images/minus.svg'
import minus from '../src/Images/plus.svg'
import { Link } from "react-router-dom";


export const Ticket = ()=>{

  const [isClicked, setIsClicked] = useState(false);
  const [ticket, setTicket] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [token, setToken] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [individualTicketPrice,setIndividualTicketPrice] = useState(3999);
  const [familyPackPrice,setFamilyPackPrice] = useState(11999);

  // Calculate total amount
  const totalAmount = (ticket * individualTicketPrice) + (token * familyPackPrice);

  // Effect to handle ticket and token logic (default values, updates)
  useEffect(() => {
    if (ticket < 1) {
      setTicket(1);
      setIsClicked(false);
      setIndividualTicketPrice(0);

    }
    if (token < 1) {
      setToken(1);
      setIsEnabled(false);
      setFamilyPackPrice(0);
    }
  }, [ticket, token]);

  // Effect to handle footer visibility
  useEffect(() => {
    setIsFooterVisible(isClicked || isEnabled);
  }, [isClicked, isEnabled]);

  // Handle ticket increment/decrement
  const increment = () => setTicket(prevTicket => Math.max(prevTicket + 1, 0));
  const decrement = () => setTicket(prevTicket => Math.max(prevTicket - 1, 0));

  // Handle token increment/decrement
  const increase = () => setToken(prevToken => Math.max(prevToken + 1, 0));
  const decrease = () => setToken(prevToken => Math.max(prevToken - 1, 0));

  // Event handlers for button clicks
  const handleClick = () => {
    setIsClicked(true);
    setTicket(1);
    setIndividualTicketPrice(3999)
  };

  const handlebutton = () => {
    setIsEnabled(true);
    setToken(1);
    setFamilyPackPrice(11999)
  };




    return(
        <>
        <Adbanner />
        <Container>
          <Row className="justify-content-center flex-column">
            <header className="seathead">
              <p className="seatH m-0">Thenisai Thendral Deva Live in Concert | Chennai</p>
              <p className="seatpara m-0">
                15 Feb, 6 PM<span className="css-wevn09">•</span>Chennai
              </p>
            </header>
  
            {/* Single Ticket Section */}
            <div className="w-100 d-flex justify-content-center">
              <Col xs={12} md={11} lg={7} xl={6} className="py-4 d-flex justify-content-center flex-column">
                <p className="css-5fwy47">Choose Tickets</p>
                <div className="css-bln63c px-3">
                  <p className="css-3i6ki3 m-0 css-qzzcto">Phase 1 - Gold - Seating</p>
                  <div className="css-ghje90">
                    <p className="css-wsn3os">₹ 3,999</p>
                    {!isClicked && <button className="css-1hwnyow" onClick={handleClick}>ADD</button>}
                    {isClicked && (
                      <div className="css-vdw6wo">
                        <span onClick={decrement}><img alt="img" src={minus} /></span>
                        <p className="m-0 px-1">{ticket}</p>
                        <span onClick={increment}><img alt="img" src={plus} /></span>
                      </div>
                    )}
                  </div>
                  <hr className="m-0" />
                  <div className="css-qka895">
                    <p className="m-0 buypara">- Each ticket grants entry for one person to the event.</p>
                    <p className="m-0 buypara">- This is a seated area.</p>
                    <p className="m-0 buypara">- Seat allotment will be on a first come first serve basis.</p>
                  </div>
                </div>
              </Col>
            </div>
  
            {/* Family Pack Section */}
            <div className="w-100 d-flex justify-content-center">
              <Col xs={12} md={11} lg={7} xl={6} className="py-0">
                <div className="css-bln63c px-3">
                  <p className="css-3i6ki3 m-0 css-qzzcto">Family Experience Pack of 4 - Gold - Seating (Pay for 3 Get 4)</p>
                  <div className="css-ghje90">
                    <p className="css-wsn3os">₹ 11,999</p>
  
                    {!isEnabled && <button className="css-1hwnyow" onClick={handlebutton}>ADD</button>}
                    {isEnabled && (
                      <div className="css-vdw6wo">
                        <span onClick={decrease}><img alt="img" src={minus} /></span>
                        <p className="m-0 px-1">{token}</p>
                        <span onClick={increase}><img alt="img" src={plus} /></span>
                      </div>
                    )}
                  </div>
  
                  <hr className="m-0" />
                  <div className="css-qka895">
                    <p className="m-0 buypara">- Each ticket grants entry for 4 people to the event.</p>
                    <p className="m-0 buypara">- This is a seated area.</p>
                    <p className="m-0 buypara">- Seat allotment will be on a first come first serve basis.</p>
                    <p className="m-0 buypara">- This is a limited offer</p>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
  
        {/* Footer Section (only visible if any item is added) */}
        {isFooterVisible && (
          <footer className="css-3tu45k">
            <Container>
              <Col xl={6} lg={7} md={11} className="css-186oyzs d-flex justify-content-center">
                <Col xs={12}>
                  <div className="float-start">
                    <p className="css-1b525ie m-0">{`₹${totalAmount}`}</p>
                    <p className="css-11axp93 m-0">{`${ticket} tickets`}</p>
                  </div>
                  <Link to='login'>
                  <button className="css-1gnzuhz pr-5 float-end">
                    <span>add to cart</span>
                  </button>
                  </Link>
                </Col>
              </Col>
            </Container>
          </footer>
        )}
      </>
    )}
