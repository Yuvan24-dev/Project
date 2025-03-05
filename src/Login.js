import { Container, Col, Row, Button,Alert } from "react-bootstrap";
import { Adbanner } from "./Cbe";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";


// -----------------------------------------------------------------------------------login----------------------------------------------------------------------

export const Login = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const from = location.state?.from?.pathname || "/"; 

  const [isLogin, setIsLogin] = useState(true); 

  const { register: registerSignin, handleSubmit: handleSubmitSignin,watch, formState: { errors: errorsSignin,isPassed } } = useForm();
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin ,isValid } } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmitLogin = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.logname,
          password: data.logpassword,
        }),
        credentials: "include",  
      });
  
      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message || "Login successful");
        if (result.token) {
          localStorage.setItem("token", result.token);
          navigate(from, { replace: true });
        }
      } 
      else {
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
    }
  };
  
// -----------------------------------------------------------------------------------signin----------------------------------------------------------------------
  const onSubmitSignin = async (data) => {
    
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.name,
          password: data.password,
          email: data.email,
          phonenumber: data.phonenumber,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message || "Registration successful");
      } else {
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
    }
  };

  return (
    <>
      <Adbanner />
      <Container className="d-flex justify-content-center">
        <Col xs={12} md={11} lg={7} xl={8} className="py-4 d-flex justify-content-center flex-column">
          <p className="css-5fwy47">Login or register to proceed</p>
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
{/* ----------------------------------------------------------------------------------Switch for signin and login-------------------------------------------------------------- */}
            <div className="d-flex justify-content-between px-3">
              <Button
                className={isLogin ? "activebtn" : "decativebtn"}
                onClick={() => setIsLogin(true)}
                disabled={isLogin}
              >
                Existing user
              </Button>
              <Button
                className={!isLogin ? "activebtn" : "decativebtn"}
                onClick={() => setIsLogin(false)}
                disabled={!isLogin}
              >
                New user
              </Button>
            </div>

            <Row className="px-3">
{/* ---------------------------------------------------------------------------------for login page-------------------------------------------------------------------               */}
              <Col xs={12} md={6} className={`active ${isLogin ? 'active' : 'disabled'}`}>
                <Col>
                  <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                    <div className="px-2">
                      <span className="css-4xycl"><b>If you already have account login</b></span>
                      <label className="css-3i6ki3">Enter Username</label>
                      <input
                        className="css-k6cybi"
                        placeholder="Username"
                        {...registerLogin('logname', {
                          required: "Please enter name",
                          pattern: /^[A-Za-z\s'-]{2,50}$/
                        })}
                      />
                      {errorsLogin.logname && <span className="error">{errorsLogin.logname.message}</span>}
                      <label className="css-3i6ki3">Enter Password</label>
                      <input
                        className="css-k6cybi"
                        placeholder="Password"
                        {...registerLogin('logpassword', {
                          required: "Please enter password",
                          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
                        })}
                      />
                      {errorsLogin.logpassword && <span className="error">{errorsLogin.logpassword.message}</span>}
                    </div>
                    <button
                      type="submit"
                      className={`css-lbwbaf ${!isValid ? "disabled" : ""}`}
                      disabled={!isValid}
                    >
                      <span className="css-jh44gk">Login</span>
                    </button>
                  </form>
                </Col>
              </Col>

{/* ---------------------------------------------------------------------------------for signin page-------------------------------------------------------------------                */}
              <Col xs={12} md={6} className={`active ${!isLogin ? 'active' : 'disabled'}`}>
                <Col className="css-1aa5ze0">
                  <form onSubmit={handleSubmitSignin(onSubmitSignin)} className="pb-4 px-2">
                    <span className="css-r0j4vw">If you don’t have account please create one</span><br />
                    {/* For name */}
                    <label className="css-3i6ki3">Name</label>
                    <input
                      className="css-k6cybi"
                      {...registerSignin('name', {
                        required: "Please enter name",
                        pattern: /^[A-Za-z\s'-]{2,50}$/
                      })}
                    />
                    {errorsSignin.name && <span className="error">{errorsSignin.name.message}</span>}

                    {/* For email */}
                    <label className="css-3i6ki3">Email</label>
                    <input
                      className="css-k6cybi"
                      {...registerSignin('email', {
                        required: "Please enter email",
                        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                      })}
                    />
                    {errorsSignin.email && <span className="error">{errorsSignin.email.message}</span>}

                    {/* For password */}
                    <label className="css-3i6ki3">Password</label>
                    <input
                      className="css-k6cybi"
                      {...registerSignin('password', {
                        required: "Please enter password",
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
                      })}
                    />
                    {errorsSignin.password && <span className="error">{errorsSignin.password.message}</span>}

                    {/* For confirm password */}
                    <label className="css-3i6ki3">Confirm Password</label>
                    <input
                      className="css-k6cybi"
                      {...registerSignin('confirmpassword', {
                        validate: value => value === watch('password') || "Passwords do not match"
                      })}
                    />
                    {errorsSignin.confirmpassword && <span className="error">{errorsSignin.confirmpassword.message}</span>}

                    {/* For phone number */}
                    <label className="css-3i6ki3">Mobile</label>
                    <input
                      className="css-k6cybi"
                      {...registerSignin('phonenumber', {
                        required: "Please enter phone number",
                        pattern: /^[0-9]{10}$/
                      })}
                    />
                    {errorsSignin.phonenumber && <span className="error">{errorsSignin.phonenumber.message}</span>}

                    <button
                      type="submit"
                      className={`css-lbwbaf ${isPassed ? "disabled" : ""}`}
                      disabled={isPassed}
                    >
                      <span className="css-jh44gk">Sign In</span>
                    </button>
                  </form>
                </Col>
              </Col>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
            </Row>
          </div>
        </Col>
      </Container>
    </>
  );
};