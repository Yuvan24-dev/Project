import { Container,Col,Row } from "react-bootstrap"
import { Adbanner } from "./Cbe"

export const Login =()=>{
    return(
    <>
    <Adbanner />
    <Container className="d-flex justify-content-center ">
    <Col xs={12} md={11} lg={7} xl={8} className="py-4 d-flex justify-content-center flex-column ">
                <p className="css-5fwy47">Choose Tickets</p>
                <div className="css-bln63c">
                  <div className="px-3">
                  <div className="d-flex justify-content-between">
                  <span>
                  <p className="css-1f8zht8 m-0">step 1</p>
                  <p className="css-3i6ki3 m-0 loginhead">Login/Register</p>
                  </span>
                  <div className="css-1ku31df"></div>
                  </div>
                  </div>
                  <hr className="mt-2 px-0" />
                  <Row>
                    <Col xs={12} md={6} className="css-1aa5ze0">
                    <form className="pb-4 px-2">
                    <span className="css-r0j4vw">Enter your email address</span><br/>
                    <span className="css-nikx6v">If you don’t have an account yet, we’ll create one for you</span>
                    <input className="css-k6cybi"></input>
                    <button className="css-lbwbaf">
                      <span className="css-jh44gk">CONTINUE</span>
                      </button>
                    </form>
                    </Col>
                    <Col xs={12} md={6}>
                    <div className="px-2">
                    <span className="css-4xycl"><b>Or login using your social accounts</b></span>
                    <div className="pb-4">
                      <button className="css-1nex4yq">Continue With Google</button>
                      <button className="css-1nex4yq bgclass">Continue With Google</button>
                    </div>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Col>
    </Container>
    <Container className="d-flex justify-content-center opacity-50 ">
    <Col xs={12} md={11} lg={7} xl={8} className="py-4 d-flex justify-content-center flex-column disabled ">
                <div className="css-bln63c">
                  <div className="px-3">
                  <div className="d-flex justify-content-between">
                  <span>
                  <p className="css-1f8zht8 m-0">step 2</p>
                  <p className="css-3i6ki3 m-0 loginhead">Order Summary</p>
                  <p className="css-1fhv1jd">Items: 1  • Total: ₹8565.33</p>
                  </span>
                  </div>
                  </div>
                </div>
              </Col>
    </Container>
    <Container className="d-flex justify-content-center opacity-50 pb-5  ">
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
    </>
    )
}