import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const PaymentPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handlePaymentSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setShowAlert(true); // Show the alert
    setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
      navigate("/"); // Navigate to "/home" after 6 seconds
    }, 3000); // 6 seconds delay
  };

  return (
    <div className="das">
      <div className="payment-container">
        <h1 className="payment-title">Secure Payment</h1>
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input type="text" id="cardName" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="password" id="cvv" placeholder="123" required />
            </div>
          </div>
          <button type="submit" className="payment-button">Pay Now</button>
        </form>

        {/* Show the alert message if showAlert is true */}
        {showAlert && (
          <div style={styles.alertContainer}>
            <div style={styles.alertMessage}>
              <p>"We'll contact you via mail. Redirecting in 3 seconds."</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  alertContainer: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  },
  alertMessage: {
    backgroundColor: "#4BB543", // Green color for success
    color: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    textAlign: "center",
  },
};

export default PaymentPage;
