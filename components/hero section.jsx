import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    '/Find-Your-Perfect-Dog-Breed/images/banner/pear.jpg',
    '/Find-Your-Perfect-Dog-Breed/images/banner/jack.jpg',
    '/Find-Your-Perfect-Dog-Breed/images/banner/black.jpg',
    '/Find-Your-Perfect-Dog-Breed/images/banner/pexx.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title"> Find Your Perfect Doggie</h1>
        <p className="hero-subtitle">
        Discover a variety of dog breeds, each with unique traits. Whether you need an energetic companion or a calm friend, find the perfect breed for your lifestyle.
        </p>
        <div className="hero-buttons">
          <a href="#product-row" className="btn primary-btn">Shop Now</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={images[currentImageIndex]} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;