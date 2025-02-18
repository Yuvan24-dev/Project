import { Container,Col,Row } from "react-bootstrap"
import { Adbanner } from "./Cbe"
// import confirm from '../src/Images/confirm.svg'
import dustbin from '../src/Images/dustbin.svg'
import add from '../src/Images/add.svg'
import { useState } from "react"
import tick from '../src/Images/tick.svg'


export const Cart =()=>{

  const [step, setStep] = useState(false);  

  const handlestep = () => {
    setStep(true); 
  };


  const handleSectionClick = () => {
    setStep(false); 
  };

    return(
    <>
    <Adbanner />
    <Container className="d-flex justify-content-center">
    <Col xs={12} md={11} lg={7} xl={8} className="py-0 d-flex justify-content-center flex-column ">
                <div className={`css-bln63c ${ step ? "opacity-50" : ""}`}   >
                  <div onClick={() => handleSectionClick()} className="px-3">
                  <div className="d-flex justify-content-between">
                  <span>
                  <p className="css-1f8zht8 m-0">step 1</p>
                  <p className="css-3i6ki3 m-0 loginhead">Order Summary</p>
                  </span>
                  <div className={`css-1ku31df ${ step ? "ticking" : ""}`}  ></div>
                  </div>
                  </div>    
                  <div className={`${ step ? "d-none" : ""}`} >
                  <div className="css-y8drlo my-3"></div>
                  <div className="css-oapzzd px-3">
                    <div className="css-oapzzd">
                      <div className="css-1ocq2bw">
                      <p className="css-11drpgh m-0">Tickets</p>
                      <div className="css-y8drlo"></div>
                      </div>
                    </div>
                    <div className="css-egk103">
                      <p className="css-1d6xumx">Thenisai Thendral Deva Live in Concert | Chennai</p>
                      <div className="css-28hpcg">
                        <p className="css-1hxyujb">Group of Friends Pack of 13 - General - Standing (Pay for 10 Get 13)</p>
                        <img alt="img" src={dustbin}/>
                      </div>
                      <div className="  allign-item-center ref">
                        <div className="d-flex gap-1 float-start">
                          <p className="css-hyx4sn m-0">1</p>
                          <p className="css-1f8zht8 m-0 ">ticket</p>
                        </div>
                        <div className="float-end ">
                        <p className="css-hyx4sn m-0  ">₹ 7,999.00</p>
                        </div>
                      </div>
                      <div>
                        <p className="css-xcdy4r mb-0 ">Includes taxes</p>
                        </div>
                      <div className="css-y8drlo my-3"></div>
                      <div className="css-9auuz6 justify-content-between">
                        <p className="css-qwww05 m-0">Buy more tickets</p>
                        <img src={add} alt="img" />
                      </div>
                    </div>
                    </div>    
                    <form className=" gap-2 px-3 py-2">
                      <label className="css-qwww05 pb-3">Have a discount code?</label>
                      <div className="d-flex flex-coulum css-oy3hgu w-100">
                        <input className="css-gip5n7 border-0" placeholder="Enter discount code" />
                        <button className="css-1gq5gvl border-top-0  border-end-0 border-bottom-0">Apply</button>
                      </div>
                    </form>  
                    <div className="px-3">  
                    <div className="css-1ocq2bw">
                      <div className="my-2">
                      <p className="css-11drpgh m-0 ">Payment Details</p>
                      </div>
                      <div className="css-y8drlo"></div>
                      </div>
                      <div className="d-flex justify-content-between py-2">
                        <p className="css-1kib8t3 m-0">Order Amount</p>
                        <p className="css-k0axuj m-0">₹ 1,499.00</p>
                        </div>   
                        <div className="d-flex justify-content-between pt-2">
                        <p className="css-1kib8t3 m-0">Order Amount</p>
                        <div>
                        <p className="css-k0axuj m-0">₹ 1,499.00</p>
                        </div>
                        </div> 
                        <p className="css-xcdy4r mb-0  ">Includes taxes</p>
                      </div> 
                      <div className="px-3">   
                      <div className="css-y8drlo mt-4 mb-2 "></div>
                      </div>
                      <div className="d-flex justify-content-between px-4 pt-2">
                        <p className="css-1em4cnj m-0">Order Total</p>
                        <div>
                        <p className="css-1bvvhob m-0">₹ 3,210.26</p>
                        </div>
                        </div>
                        <div className="px-3">   
                      <div className="css-y8drlo mt-3 "></div>
                      <div  onClick={handlestep} className="css-hz2eh5 mt-3">
                        <span className="css-jh44gk">Continue</span>
                      </div>
                      </div>
                </div>
                </div>
              </Col>
    </Container> 

 
    
    <Container className={`d-flex justify-content-center opacity-50 pb-5 ${ step ? "d-none" : ""}`}>
    <Col xs={12} md={11} lg={7} xl={8} className="py-4 d-flex justify-content-center flex-column disabled ">
                <div className="css-bln63c">
                  <div className="px-3"> 
                  <div className="d-flex justify-content-between">
                  <span>
                  <p className="css-1f8zht8 m-0">step 2</p>
                  <p className="css-3i6ki3 m-0 loginhead">Ticket Details</p>
                  </span>
                  </div>
                  </div>
                </div>
              </Col>
    </Container>





    <Container  className={`d-flex justify-content-center ${!step ? "d-none" : ""}`}>
    <Col xs={12} md={11} lg={7} xl={8} className="py-4 d-flex justify-content-center flex-column ">
                <div className="css-bln63c">
                  <div className="px-3">
                  <div className="d-flex justify-content-between">
                  <span>
                  <p className="css-1f8zht8 m-0">step 2</p>
                  <p className="css-3i6ki3 m-0 loginhead">Ticket Details</p>
                  </span>
                  <div className="css-1ku31df"></div>
                  </div>
                  </div>    
                  <div className="css-y8drlo mt-3"></div>   
                    <form className=" gap-2 px-3 py-2">
                    <div className="css-y8drlo my-2"></div>   
                      <label className="css-qwww05 pb-3">These details will be shown on your invoice *</label>
                      <input className="custom-input w-100 my-2 " placeholder="Name*" />
                      <input className="custom-input w-100 my-2 " placeholder="Mobile*" />
                      <Row>
                        <Col xs={6}><input className="custom-input w-100 my-2 " placeholder="Indian pincode*" /></Col>
                        <Col xs={6}><input className="custom-input w-100 my-2 " placeholder="State*" /></Col>
                      </Row>
                      <input className="custom-input w-100 my-2 " placeholder="Email*" />
                      <label className="css-1h6wmy8 ">E-tickets will be sent to this email address</label>
                    </form>   
                      <div className="px-3">   
                      <div className="css-y8drlo mt- mb-2 "></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between px-3 mt-4 w-100">
                      <div className="d-flex gap-4">
                      <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      </label> 
                      <p className="css-1qfkwur m-0">I have read and accepted the <span style={{ color: 'rgb(49, 192, 240)' }}>terms and conditions</span> </p>
                      </div>

                      <div className="lastbt float-end ">
                        <span className="css-jh44gk">Continue</span>
                      </div>


                      </div>
                      </div>

              </Col>
    </Container> 
    </>
    )
}