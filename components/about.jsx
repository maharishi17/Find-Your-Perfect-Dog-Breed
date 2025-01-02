import React from 'react';

const AboutUs = () => {
  return (
    <section id='las' className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us-heading">Welcome to Our Dog Breeds Store!</h2>
          <p className="about-us-text">
          We are dedicated to helping you find the perfect dog companion. Whether you're looking for an energetic playmate or a loyal friend, our curated selection of dog breeds ensures you'll find a match that fits your lifestyle.
          </p>
          <p className="about-us-text">
          Our mission is to connect you with top-quality dogs and provide expert advice to ensure your new pet becomes a beloved part of your family. Thank you for choosing us to help you find your perfect furry friend!~
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="/Find-Your-Perfect-Dog-Breed/images/logo/pexels-samson-katt-5257595.jpg"
            alt="About Us"
            className="about-us-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
