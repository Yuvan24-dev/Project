import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";


const Payment = () => {

  const location = useLocation();
  const cart = location.state?.cart || [];


  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/"); 
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4 className="text-center">Order Summary</h4>
            <hr />
            {cart.length > 0 && <p>🎫 Event Name: {cart[0].eventdetails}</p>}
            {cart.length > 0 && <p>💰 Total amount: {cart[0].totalAmount}</p>}
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">💳 Payment Details</h3>

            <div className="mb-3">
              <label className="form-label">Choose Payment Method:</label>
              <select
                className="form-select"
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
              >
                <option value="card">💳 Credit/Debit Card</option>
                <option value="upi"> 🔗  UPI Payment</option>
                <option value="wallet"> 📱  UPI apps</option>
              </select>
            </div>

            {paymentMethod === "card" && (
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <FaCcVisa size={40} color="#1A1F71" />
                  <FaCcMastercard size={40} color="#EB001B" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    maxLength="16"
                    value={cardDetails.cardNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={cardDetails.expiryDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      className="form-control"
                      name="cvv"
                      placeholder="XXX"
                      maxLength="3"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {paymentMethod === "upi" && (
             <div>
            <MdPayments size={40} color="green" />
            <div className="mb-3">
            <label className="form-label">Enter UPI ID</label>
            <input
            type="text"
            className="form-control"
            placeholder="yourupi@bank"
            />
            </div>
           </div>
            )}
            {paymentMethod === "wallet" && (
              <div className="mb-3">
                <label className="form-label">Select Wallet</label>
                <div className="d-flex justify-content-around mb-2">
                  <button className="btn btn-light shadow-sm">
                    <SiPaytm size={30} color="#00C4FF" /> Paytm
                  </button>
                  <button className="btn btn-light shadow-sm">
                    <FaGooglePay size={30} color="blue" /> Google Pay
                  </button>
                  <button className="btn btn-light shadow-sm">
                    <SiPhonepe size={30} color="purple" /> PhonePe
                  </button>
                </div>
              </div>
            )}
            <button className="btn btn-primary w-100 mt-3" onClick={handlePayment}>
               {cart.length > 0 &&<p className="m-0"> Pay : {[cart[0].totalAmount]}</p> }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
