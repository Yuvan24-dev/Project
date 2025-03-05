import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import log from "./Images/logo-light.png"
import { GrLocation } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Navbar, Nav, Container, Button,Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Import the toggle icons
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Bangalorepg from './Bang';
import ChennaiPg from './Chennai';
import Cbepg from './Cbe';
import MumbaiPg from './Mumbai';
import { LiaTimesSolid } from "react-icons/lia";
import blacklogo from '../src/Images/Black-logo.png'
import ticketimg from '../src/Images/ticket.svg'
import { Buypage } from './Buypage';
import { Seating } from './Seatselect';
import ReactDOM from 'react-dom';
import { Ticket } from './Ticketslect';
import { Login } from './Login';
import ProtectedRoute from './logincontext';
import { Cart } from './Cart';
import { TotalAmountProvider } from './text'; 
import { Ogamount } from './Ticketslect';
import { Profile } from './Profile';
import Payment from './Payment';


const App = () => {


  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [dropdata, setDropdata]=useState('coimbatore');

  const [searchTerm, setSearchTerm] = useState('');

  const updateLocation = (newLocation) => {
    setDropdata(newLocation);
    setDropdownOpen(false); 
  };
  const locations = [
    'Coimbatore', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi'
  ];
  
  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const profileClick = ()=>{
    navigate("/profile")
  }

 const profileNavaigator = ()=>{
  navigate("/profile")
 }

  return (
    <>
      {/* Original Navbar */}
      <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="w-100 there_you_go px-2 py-0">
        <Container fluid className="p-0 px-0">
          <div className="d-flex align-items-center p-0">
          <Navbar.Toggle
              aria-controls="responsive-navbar-nav flex-row"
              className="d-lg-none float-start p-0 toogler_Toy"
              onClick={toggleMenu}  
            />            
            <Navbar.Brand className='px-1 mb-1 position-relative' href="#home">
              <img
                className='forlogo position-absoulte top-0 p-0'
                src={log}
                alt="Logo"
              />
              <Button  variant="link" className=" d-flex flex-start location_botton  px-3 d-none d-lg-inline">
                <GrLocation className='dumlo d-inline' size={24} style={{ color: "white", strokeWidth: "5" }} />
                <div className='location_anchour m-0 d-inline px-1' >Event in {dropdata}</div>
              </Button>
            </Navbar.Brand>
          </div>
          <Nav className="ms-auto d-flex align-items-center"></Nav>

          <Nav className="ms-auto position-relative ">
            <Nav.Link className=" d-flex flex-colum">
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
                  <GoSearch size={22} className='searchingTr' />
                </span>
              </Button>
{/* ----------------------------------dropdown button--------------------------------------------------- */}
     <Button
        variant="outline-primary"
        className="d-flex gap-1 location_botton location_bottonR forChatref mt-0 m-0 position-relative"
        onClick={toggleDropdown}
      >
        <GrLocation className="mr-1  locate" size={25} style={{ float: 'left', color: 'white', strokeWidth: '2' }} />
        <FaLocationDot className="mr-1 locateA" size={30} style={{ float: 'left', color: 'white', strokeWidth: '2' }} />
        <p className="location_anchour Dummy-location d-none d-sm-inline mb-2" style={{ fontSize: '15px' }}>
          {dropdata}
        </p>
        {dropdownOpen ? (
          <FaAngleUp className="ml-auto mt-1 forIdl" size={21} style={{ color: 'white' }} />
        ) : (
          <FaAngleDown className="ml-auto mt-1 forIdl" size={21} style={{ color: 'white' }} />
        )}
      </Button>

      {/* Use React Portal to render the dropdown outside the Navbar */}
      {dropdownOpen &&
        ReactDOM.createPortal(
          <div
            className="location-dropdown position-fixed"
            style={{
              top: '50px',  
              right: '0%',
              zIndex: 9999, 
              backgroundColor: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '5px', 
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
              width: '210px',
              maxWidth: '300px', 
            }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search locations..."
              style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <ul>
              {filteredLocations.length > 0 ? (
                <>
                  <Link to="/coimbatore" className="list-group-item">
                    <li
                      className="list-group-item"
                      onClick={() => updateLocation('Coimbatore')}
                      style={{ cursor: 'pointer' }}
                    >
                      Coimbatore
                    </li>
                  </Link>
                  <Link to="/Chennai" className="list-group-item">
                    <li
                      className="list-group-item"
                      onClick={() => updateLocation('Chennai')}
                      style={{ cursor: 'pointer' }}
                    >
                      Chennai
                    </li>
                  </Link>
                  <Link to="/Bangalore" className="list-group-item">
                    <li
                      className="list-group-item"
                      onClick={() => updateLocation('Bangalore')}
                      style={{ cursor: 'pointer' }}
                    >
                      Bangalore
                    </li>
                  </Link>
                  <Link to="/mumbai" className="list-group-item">
                    <li
                      className="list-group-item"
                      onClick={() => updateLocation('Mumbai')}
                      style={{ cursor: 'pointer' }}
                    >
                      Mumbai
                    </li>
                  </Link>
                  <li
                    className="list-group-item"
                    onClick={() => updateLocation('Delhi')}
                    style={{ cursor: 'pointer' }}
                  >
                    Delhi
                  </li>
                </>
              ) : (

                <li className="list-group-item">No results found</li>
              )}
            </ul>
          </div>,
          document.body // This renders the dropdown outside the navbar
        )}
            </Nav.Link>
          </Nav>
          <Nav.Link className="d-none d-lg-block ">
            <Button
              variant="outline-primary"
              className="forSearch   d-flex justify-content-center align-items-center no-hover "
              style={{ width: '40px', height: '40px' }}
              onClick={()=>profileClick()}
            >
              <p className="location_anchour mt-3" style={{ fontSize: '15px' }}>
                UM
              </p>
            </Button>
          </Nav.Link>

        </Container>
      </Navbar>

  <Offcanvas className="forShowcase" show={showMenu} onHide={toggleMenu} placement="start" style={{ width: '90%', backgroundColor: 'white' }}>
  <Offcanvas.Body className='FornavB px-0'>
    <div className='forbodystyle'>
    <Container   >
      <div style={{ width: '100%'}}>
        <img className='p-0 css-bcefdw' src={blacklogo} alt="Logo"/>
        <LiaTimesSolid size={27} style={{ cursor: 'pointer',float:'right' }} onClick={toggleMenu} />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Uvan Madix</h3>
        <p>Uvanmadix6@gmail.com</p>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button className='toggler-B-style'>
          <span className='toggler-B-style-log'>₹</span>
          <span className='toggler-B-style-text px-1'>balance</span>
        </button>
        <button className='toggler-B-style'>
          <span className='toggler-B-style-log'><GrLocation size={18} /></span>
          <span className='toggler-B-style-text px-1'>{dropdata}</span>
        </button>
      </div>
      <div className='d-flex allign-item-center py-4'>
        <img className='togler-ticket' src={ticketimg} alt='toggler'  />
        <p  className='togler-ticket-style'>Tickets</p>
        </div>
    </Container>
    </div>
    <Container className='px-4 '>
    <ul className='p-0 py-3 list-unstyled'>
      <li onClick={()=>{profileNavaigator();
        toggleMenu()
      }} className='togler-ticket-style py-2'>Edit profile</li>
      <li className='togler-ticket-style py-2'>About</li>
      <li className='togler-ticket-style py-2' >Help</li>
      <li className='togler-ticket-style py-2'>Sign out</li>
    </ul>
    </Container>
  </Offcanvas.Body>
</Offcanvas>
     




{/* <AuthProvider> */}
<Ogamount value={0}>
      <TotalAmountProvider value={0}>
        <Routes>
          <Route path="/" element={<Cbepg />} />
          <Route path="/coimbatore" element={<Cbepg />} />
          <Route path="/Bangalore" element={<Bangalorepg />} />
          <Route path="/chennai" element={<ChennaiPg />} />
          <Route path="/mumbai" element={<MumbaiPg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buynow" element={<Buypage />} /> 


          <Route path="coimbatore/buynow" element={<Buypage />} /> 
          <Route path="coimbatore/buynow/selectseat" element={<Seating />} />
          <Route path="/coimbatore/buynow/selectseat/ticket" element={<Ticket />} />
          <Route element={<ProtectedRoute />}> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          </Route>
          </Routes>
      </TotalAmountProvider>
      </Ogamount>

    {/* </AuthProvider> */}
    </>
  );
}



export default App;
