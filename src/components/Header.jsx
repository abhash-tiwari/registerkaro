import React, { useState, useEffect } from 'react';
import './Header.css';
import { ShieldCheck, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <ShieldCheck size={30} color="#184c6b" />
          <h1>
            Register<span>Karo</span>
          </h1>
        </div>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li className="dropdown">
              <a href="#startup">Startup <span>▼</span></a>
              <div className="dropdown-content">
                <a href="#incorporation">Incorporation</a>
                <a href="#registration">Registration</a>
                <a href="#compliance">Compliance</a>
              </div>
            </li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
        
        <div className="contact-btn">
          <a href="tel:+918447746183">+91 844 774 6183</a>
        </div>
        
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Header;