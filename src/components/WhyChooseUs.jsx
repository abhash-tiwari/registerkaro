import React from 'react';
import './WhyChooseUs.css';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    { id: 1, title: 'Affordable' },
    { id: 2, title: 'Compliance Ensured' },
    { id: 3, title: 'Simplified Process' },
    { id: 4, title: 'On-time Service' },
    { id: 5, title: 'Instant Response' },
    { id: 6, title: 'Industry Experts' }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <h2 className="section-title">WHY CHOOSE US</h2>
        
        <div className="why-choose-us-content">
          <p className="intro-text">
            Our All-In-One Platform And Team Of Experts Will Help Direct You In The Right Path
            And Ensure That Your Business Starts The Right Way In Record Time.
          </p>
          
          <div className="benefits-grid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-card">
                <CheckCircle className="check-icon" color="#f89e32" />
                <h3>{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;