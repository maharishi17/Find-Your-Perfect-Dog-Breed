import React from 'react';

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: 'Secure Platform',
      description: 'Your data is protected with top-notch security protocols.',
      icon: '🔒',
    },
    {
      id: 2,
      title: 'User Friendly',
      description: 'Designed with simplicity and ease of use in mind.',
      icon: '👍',
    },
    {
      id: 3,
      title: 'Customizable',
      description: 'Easily adaptable to suit your needs and preferences.',
      icon: '⚙️',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-heading">Our Features</h2>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
