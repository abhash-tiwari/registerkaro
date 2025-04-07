import React from 'react';
import './Footer.css';
import { ShieldCheck, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <ShieldCheck size={30} color="#f89e32" />
              <h3>Register<span>Karo</span></h3>
            </div>
            <p className="footer-desc">
              Your trusted partner for business compliance, registrations, 
              and legal matters across India.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@registerkaro.in</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 84477 46183</span>
              </div>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#company-formation">Company Formation</a></li>
              <li><a href="#secretarial">Company Secretarial Services</a></li>
              <li><a href="#virtual-office">Virtual Office Address</a></li>
              <li><a href="#annual-compliance">Annual Compliance Services</a></li>
              <li><a href="#vat">VAT Registration & Filing</a></li>
              <li><a href="#bookkeeping">Bookkeeping Services</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates on business compliance.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-icons">
              <a href="#facebook" className="social-icon"><Facebook size={18} /></a>
              <a href="#twitter" className="social-icon"><Twitter size={18} /></a>
              <a href="#instagram" className="social-icon"><Instagram size={18} /></a>
              <a href="#linkedin" className="social-icon"><Linkedin size={18} /></a>
              <a href="#youtube" className="social-icon"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} RegisterKaro. All Rights Reserved.</p>
          </div>
          <div className="payment-methods">
            <p>Secure Payment Methods:</p>
            <div className="payment-icons">
              <div className="payment-icon">Visa</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">PayTM</div>
              <div className="payment-icon">UPI</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;