import { Col,Container,Row } from "react-bootstrap";
import { Adbanner } from "./Cbe";
import { useForm } from "react-hook-form";


export const Profile = ()=>{

  const { register, handleSubmit, formState: { errors } } = useForm();




  const handleLogout = () => {
  localStorage.removeItem("token"); 
  alert("You have been logged out.");
  window.location.href = "/login"; 
  };
    return(
     <>
    <div className="user-overlay">
    <Adbanner />
    <Container className="d-flex justify-content-center">
    <Col xs={12} lg={8} className="User-overlay px-0 px-sm-5 d-md-flex d-block justify-content-between py-4">
    <div>
    <h1 className="profile_name mb-3">Uvan madix</h1>
    <p className="m-0">uvanmadix6@gmail.com</p>
    </div>
    <div className="d-flex mt-2 mt-md-0">
    <div className="css-c3t494">EDIT PROFILE</div>
    <div className="css-kbdhi1" onClick={()=>handleLogout()}>SIGN OUT</div>

    </div>
    </Col>
    </Container>
    </div>
    <div className="px-md-0 px-">
    <ul className="d-flex flex-colum justify-content-center user-tab-list">
    <li className="tabs__tab--selected p-2 p-sm-3">Edit Profile</li>
    <li className="tabs__tab--selected p-2 p-sm-3">Tickets</li>
    <li className="tabs__tab--selected p-2 p-sm-3">Passes</li>
    <li className="tabs__tab--selected p-2 p-sm-3">Wallet</li>
    </ul>
  {/* -----------------------------------------------------------------Form--------------------------------------------------------------------- */}
  <form onSubmit={handleSubmit()} className=" gap-2 px-3 py-2">
    <div className="d-flex justify-content-center">
    <Col xl={6}   >
    <label className="css-75erk3 pb-3">Please update your account details below</label>
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="First name" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Last name" /></Col>
    </Row>
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Phone number"/>
    <div className="css-bln63c">
    <div>
    <p className="css-75erk3 m-0">Delivery details</p>
    <p className="css-1pq50zy m-0">These details will be used to send physical tickets</p>
    </div>
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Address 1*" 
    {...register("firstAdd",{
    required:"please enter Address",
     })}
    />
    {errors.firstAdd && <span className="error">{errors.firstAdd.message}</span>}
    <input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Address 2*"
    {...register("secondAdd",{
      required:"please enter Address"
    })}
    />
    {errors.secondAdd && <span className="error">{errors.secondAdd.message}</span>}
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Land mark" /></Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="City *"
    {...register("city",{
      required:"please enter city",
      pattern:{
        value:/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
        message:"Please enter valid city name"
      }
    })}
    />
    {errors.city && <span className="error">{errors.city.message}</span>}
    </Col>
    </Row>
    <Row>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="Pincode *"
    {...register("pincode",{
      required:"Please enter pincode",
      pattern:{
        value:/^[1-9][0-9]{5}$/,
        message:"Please enter valid pincode"
      }
    })} />
    {errors.pincode && <span className="error">{errors.pincode.message}</span>}
    </Col>
    <Col xs={6}><input className="custom-input w-100 my-2 css-1vj7536 " placeholder="State *"
    {...register("state",{
      required:"Please enter state",
      pattern:{
        value:/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/,
        message:"please enter valid state"
      }
    })}
    />
    {errors.state && <span className="error">{errors.state.message}</span>}
    </Col>
    </Row>
    <input className="custom-input w-100 my-2 " placeholder="Enter discount code" />
    <div className="d-flex justify-content-between">
    <p className="css-75erk3 m-0">Address Type</p>
    <div className="d-flex ">
    <label className="css-hu917e d-flex gap-1">
          <input
            type="radio"
            value="Residential"
          />
          <p className="m-0">Residential</p>
        </label>

        <label className="css-hu917e d-flex gap-1 m-0">
          <input
            type="radio"
            value="Business"
            {...register("addressType", { required: "Please select an address type" })}
            name="addressType"
          />
          <p className="m-0">Business</p>
        </label>
      </div>
    </div>
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
    <div className="d-flex justify-content-center ">
      <button className="css-u0fjmv"><p className="m-0 css-1ju1coy">Update</p></button>
      </div>
    </Col>
    </div>
    </form>   
    </div>
    </>
    )
}
