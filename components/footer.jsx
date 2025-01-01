import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-logo">Maharishi </h3>
          <p className="footer-text">
            © {currentYear} Maharishi Company. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
