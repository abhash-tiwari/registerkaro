import React from 'react';
import './Services.css';
import { Building, Briefcase, Monitor, FileCheck, FileText, DollarSign, BookOpen, Video } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 1, title: 'Company Formation', icon: <Building /> },
    { id: 2, title: 'Company Secretarial Services', icon: <Briefcase /> },
    { id: 3, title: 'Virtual Office Address', icon: <Monitor /> },
    { id: 4, title: 'Annual Compliance Services', icon: <FileCheck /> },
    { id: 5, title: 'VAT Registration, Preparation & Filing', icon: <FileText /> },
    { id: 6, title: 'Payroll Services', icon: <DollarSign /> },
    { id: 7, title: 'Bookkeeping Services', icon: <BookOpen /> },
    { id: 8, title: 'Live Online Webinars & Workshops', icon: <Video /> }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
        
        <p className="service-message">
          Our Client Services Team is always happy to talk to you about what is best for
          your business needs. Contact us today!
        </p>
        
        <button className="service-cta">Explore All Services</button>
      </div>
    </section>
  );
};

export default Services;