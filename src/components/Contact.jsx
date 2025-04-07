import React, { useState } from 'react';
import './Contact.css';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon-circle">
                <MapPin color="#f89e32" />
              </div>
              <div className="contact-details">
                <h3>Main Office</h3>
                <p>Safe Ledger Private Limited</p>
                <p>#101, Oxford Towers, 139, HAL</p>
                <p>Old Airport Rd, Kodihalli,</p>
                <p>Bengaluru, Karnataka</p>
                <p>560008</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="icon-circle">
                <Phone color="#f89e32" />
              </div>
              <div className="contact-details">
                <h3>Make a call</h3>
                <p>Phone: +91 84477 46183</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="icon-circle">
                <Clock color="#f89e32" />
              </div>
              <div className="contact-details">
                <h3>Working Hours</h3>
                <p>Monday-Friday: 9:00 - 06:00</p>
                <p>Saturday-Sunday: Holiday</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="icon-circle">
                <Mail color="#f89e32" />
              </div>
              <div className="contact-details">
                <h3>Send an email</h3>
                <p>support@registerkaro.in</p>
                <p>admin@registerkaro.in</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;