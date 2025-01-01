import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <section id='tele' className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-text">
        If you need a doggie, please fill out the form and submit it. For payment, kindly complete the payment form, and we will contact you in Mail.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" className="form-input" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" id="email" className="form-input" required placeholder="Enter your email" />
         </div>

         <div className="form-group">
            <label htmlFor="name" className="form-label">Breed Name</label>
            <input type="text" id="name" className="form-input" required placeholder="Enter The Breed Name" />
          </div>


          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea id="message" className="form-textarea" required placeholder="Write your message" rows="5"></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
          <div className="button-group">
            <button type="button" required className="payment-button" onClick={handlePaymentClick}>Make Payment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
