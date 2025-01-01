import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Doe',
      review: 'These dogs are amazing! A must-have for anyone seeking top-quality breeds.',
      image: '/images/logo/pexels-hannah-depriest-39587-137722.jpg'

    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'The service and quality provided were truly excellent. I highly recommend it to anyone looking for the best experience',
      image: '/images/logo/pexels-rozegold-2887774.jpg',
    },
    {
      id: 3,
      name: 'Emily ',
      review: 'Wonderful experience! Supportive team and amazing dogs.',
      image: '/images/logo/pexels-tati-alves-661988314-17733758.jpg',
    },
    {
      id: 4,
      name: 'Davis',
      review: 'Im thoroughly impressed with these amazing dogs Their quality and temperament are outstanding, making them worth every penny!',
      image: '/images/logo/pexels-tma-management-2975165-20442000.jpg',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-review">"{testimonial.review}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
