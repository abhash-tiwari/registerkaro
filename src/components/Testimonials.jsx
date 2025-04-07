import React, { useState } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechStart Solutions",
      content: "RegisterKaro made the entire company formation process seamless. Their team guided us through every step, and we were up and running in no time!"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Wellness Hub",
      content: "As a first-time entrepreneur, I was overwhelmed with the legal requirements. RegisterKaro simplified everything and provided excellent support throughout."
    },
    {
      id: 3,
      name: "Aditya Singh",
      company: "Digital Nomads",
      content: "The virtual office service has been a game-changer for our remote team. Professional address and mail handling while we work from anywhere!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">CLIENT TESTIMONIALS</h2>
        
        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#f89e32" color="#f89e32" size={16} />
              ))}
            </div>
            <p className="testimonial-content">{testimonials[currentIndex].content}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;