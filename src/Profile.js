import { Col,Container,Row } from "react-bootstrap";
import { Adbanner } from "./Cbe";
import { useState } from "react";

export const Profile = ()=>{
        const [isChecked, setIsChecked] = useState(false);
    
      
        const handleToggle = () => {
          setIsChecked((prevChecked) => !prevChecked);
        };




        
    return(
    <div className="my-3">
    <div className="user-overlay">
    <Adbanner />
    <Container className="d-flex justify-content-center">
    <Col xs={8} className="User-overlay px-5 d-flex justify-content-between py-4">
    <div>
    <h1 className="profile_name mb-3">Uvan madix</h1>
    <p className="m-0">uvanmadix6@gmail.com</p>
    </div>
    <div className="d-flex">
    <div className="css-c3t494">EDIT PROFILE</div>
    <div className="css-kbdhi1">SIGN OUT</div>

    </div>
    </Col>
    </Container>
    </div>
    <ul className="d-flex flex-colum justify-content-center user-tab-list">
    <li className="tabs__tab--selected p-3">Edit Profile</li>
    <li className="tabs__tab--selected p-3">Tickets</li>
    <li className="tabs__tab--selected p-3">Passes</li>
    <li className="tabs__tab--selected p-3">Wallet</li>
    </ul>
    <div className="d-flex justify-content-center">
    <Col xl={6}   >
    <label className="css-75erk3 pb-3">Please update your account details below</label>
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="First name" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Last name" /></Col>
    </Row>
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Phone number" />
    <div className="css-bln63c">
    <form className=" gap-2 px-3 py-2">
    <div>
    <p className="css-75erk3 m-0">Delivery details</p>
    <p className="css-1pq50zy m-0">These details will be used to send physical tickets</p>
    </div>
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Address 1*" />
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Address 2*" />
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Land mark" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="City *" /></Col>
    </Row>
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Pincode *" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="State *" /></Col>
    </Row>
    <input className="custom-input w-100 my-2 " placeholder="Enter discount code" />
    <div className="d-flex justify-content-between">
    <p className="css-75erk3 m-0">Address Type*</p>
    <div className="d-flex">
    <label className="css-hu917e d-flex gap-1">
    <input name="addressType" type="radio" />
    <p className="m-0 ">Residential</p>
    </label>
    <label className="css-hu917e d-flex gap-1 m-0">
    <input name="addressType" type="radio" />
    <p className="m-0 ">Business</p>
    </label>
    </div>
    </div>
    </form>   
    </div>
    <div className="css-bln63c my-3">
    <div className="px-3">
    <p className="css-75erk3 m-0">Billing Details</p>
    <p className="css-1pq50zy m-0">These details will be shown on your invoice</p>
    <div className="d-flex gap-1 py-2">
    <label >
    <input type="checkbox" />
    <span className="checkmark"></span>
    </label> 
    <p className="css-1qfkwur m-0 lh-lg">Use same as delivery details</p>
    </div>
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Pincode *" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="State *" /></Col>
    </Row>
    </div>
    </div>
    <div className="d-flex px-3">
    <p className="m-0">Receive updates on the latest events, exclusive offers and much more in your inbox.</p>
    <div className="css-thkgcw">
  <input
    type="checkbox"
    id="toggle"
    className="toggle-checkbox"
    checked={isChecked}
    onChange={handleToggle}
  />
  <label htmlFor="toggle" className="css-171h12w">
    <span className="yes">YES</span>
  </label>
</div>
    </div>
    <div className="d-flex justify-content-center ">
      <button className="css-u0fjmv"><p className="m-0 css-1ju1coy">Update</p></button>
      </div>

    </Col>
    </div>
    </div>
    )
}
