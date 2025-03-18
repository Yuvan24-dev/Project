import React, { createContext,useContext,useState } from "react";
import { Row,Col,Container} from "react-bootstrap";
import { Adbanner } from "./Cbe";
import plus from '../src/Images/minus.svg'
import minus from '../src/Images/plus.svg'
import {  useNavigate } from "react-router-dom";
import { TotalAmountContext } from './Cartcontext'; 
import { useLocation } from "react-router-dom";
import axios from 'axios';

// -------------------------------------------------------------------------------------------------context----------------------------------------------------------
export const Actamount=createContext({ ticketamount: 0,  event: {} })


export const Ogamount = ({ children }) => {
 
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const event = Object.fromEntries(queryparams.entries());
  const contextValue = {
    event
  };
  return (
    <Actamount.Provider value={contextValue}>
      {children}
    </Actamount.Provider>
  );
};

export const  Ticket = ()=>{
  const[tickettype,setTickettype]=useState(" ");

  const navigate = useNavigate();

  const { 
    totalAmount, 
    handleClick,  
    ticket, 
    token, 
    isClicked,
    decrement,
    increment,
     isEnabled,
    handlebutton,
    decrease,
     increase,
     isFooterVisible,
     familypack,
     ticketamount,
     totalTicket,
     event,
     seattype,
     concertname,
   } = useContext(TotalAmountContext);


   const clickphase = ()=>{
    setTickettype(`Phase 1 - {seattype} - Seating`)
  }
  const clickFampack = ()=>{
    setTickettype(`Family Experience Pack of 4 - {seattype} - Seating (Pay for 3 Get 4)`)
  }


    const addToCart = async () => {
      const token = localStorage.getItem("token");
        navigate("/cart"); 
        try {
            const response = await axios.post(
                "http://localhost:5000/api/cart/add",
                {
                    ticket: totalTicket,
                    totalAmount: totalAmount,
                    seatType: seattype, 
                    eventdetails: concertname,
                    seatingName:tickettype
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Cart added successfully", response.data);

            
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };
    // // Update Cart Item
    // const updateCartItem = async (id, ticket, totalAmount, seatType) => {
    //     try {
    //         const response = await axios.put(
    //             `http://localhost:5000/api/cart/update/${id}`,
    //             { ticket, totalAmount, seatType },
    //             { headers: { Authorization: `Bearer ${getAuthToken()}` } }
    //         );
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error updating cart item:", error);
    //     }
    // };

    return(
        <>
        <Adbanner />
        <Container>
          <Row className="justify-content-center flex-column">
            <header className="seathead">
            <p className="seatH m-0">{ event.eventName } | {event.location ? event.location.split(", ").pop() : "NA"}</p>
            <p className="seatpara m-0">
            {event.date}, {event.time}<span className="css-wevn09">•</span>{event.location ? event.location.split(", ").pop() : "NA"}</p>
            </header>
              <div className="w-100 d-flex justify-content-center">
              <Col xs={12} md={11} lg={7} xl={6} className="py-4 d-flex justify-content-center flex-column">
                <p className="css-5fwy47">Choose Tickets</p>
                <div className="css-bln63c px-3">
                  <p className="css-3i6ki3 m-0 css-qzzcto">Phase 1 - {seattype} - Seating</p>
                  <div className="css-ghje90">
                    <p className="css-wsn3os">{ticketamount}</p>
                    {!isClicked && <button className="css-1hwnyow" onClick={() => { handleClick(); clickphase(); }}>ADD</button>}
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
            <div className="w-100 d-flex justify-content-center">
              <Col xs={12} md={11} lg={7} xl={6} className="py-0">
                <div className="css-bln63c px-3">
                  <p className="css-3i6ki3 m-0 css-qzzcto">Family Experience Pack of 4 - {seattype} - Seating (Pay for 3 Get 4)</p>
                  <div className="css-ghje90">
                    <p className="css-wsn3os">{familypack}</p>
  
                    {!isEnabled && <button className="css-1hwnyow" onClick={() => { handlebutton(); clickFampack(); }}>ADD</button>}
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
        {isFooterVisible && (
          <footer className="css-3tu45k">
            <Container>
              <Col xl={6} lg={7} md={11} className="css-186oyzs d-flex justify-content-center">
                <Col xs={12}>
                  <div className="float-start">
                    <p className="css-1b525ie m-0">{`₹${totalAmount}`}</p>
                    <p className="css-11axp93 m-0">{`${totalTicket} tickets`}</p>
                  </div>
                  <button onClick={addToCart} className="css-1gnzuhz pr-5 float-end">
                Add to Cart
               </button>
                </Col>
              </Col>
            </Container>
          </footer>
        )}
      </>
    )}

