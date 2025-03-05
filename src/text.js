import React, {useContext, createContext, useState, useEffect } from 'react';
import { Actamount } from './Ticketslect';
export const TotalAmountContext = createContext();



export const TotalAmountProvider = ({ children }) => {

const { event }=useContext(Actamount);
console.log(event)

const  ticketamount = event.ogamt;
const seattype=event.seattype;
const concertname = event.concertname;

const familypack=(ticketamount * 3);


  const [isClicked, setIsClicked] = useState(false);
  const [ticket, setTicket] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [token, setToken] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [individualTicketPrice,setIndividualTicketPrice] = useState(ticketamount);
  const [familyPackPrice,setFamilyPackPrice] = useState(familypack);
  const[tickettype,setTickettype]=useState(" ");


 
  const totalAmount = (ticket * individualTicketPrice) + (token * familyPackPrice);
  const totalTicket = (ticket > 0 && token > 0) ? (ticket + token) : Math.max(ticket, token);


  
  useEffect(() => {
    if (ticket < 1) {
      setTicket(0);
      setIsClicked(false);
      setIndividualTicketPrice(0);

    }
    if (token < 1) {
      setToken(0);
      setIsEnabled(false);
      setFamilyPackPrice(0);
    }
  }, [ticket, token]);

  
  useEffect(() => {
    setIsFooterVisible(isClicked || isEnabled);
  }, [isClicked, isEnabled]);

 
  const increment = () => setTicket(prevTicket => Math.max(prevTicket + 1, 0));
  const decrement = () => setTicket(prevTicket => Math.max(prevTicket - 1, 0));

 
  const increase = () => setToken(prevToken => Math.max(prevToken + 1, 0));
  const decrease = () => setToken(prevToken => Math.max(prevToken - 1, 0));

  
  const handleClick = () => {
    setIsClicked(true);
    setTicket(1);
    setIndividualTicketPrice(ticketamount)
    setTickettype("Phase 1 - Seating")
  };

  const handlebutton = () => {
    setIsEnabled(true);
    setToken(1);
    setFamilyPackPrice(familypack)
    setTickettype("Family Experience Pack of 4 - Gold - Seating (Pay for 3 Get 4)")
  };


  return (
    <TotalAmountContext.Provider value={{ 
        totalAmount, 
        handleClick, 
        ticket, 
        setTicket,
         token, 
         setToken ,
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
        tickettype,
        seattype,
        concertname
    }}>
      {children}
    </TotalAmountContext.Provider>
  );
};
