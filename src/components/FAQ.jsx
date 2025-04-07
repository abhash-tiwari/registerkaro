import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How long does it take to register a company?",
      answer: "With RegisterKaro, the company registration process typically takes 7-10 working days from the submission of all required documents and information."
    },
    {
      id: 2,
      question: "What documents are required for company registration?",
      answer: "You'll need ID proofs of directors (PAN & Aadhar), address proof of registered office, digital photographs of directors, and the proposed company name options."
    },
    {
      id: 3,
      question: "What are the benefits of virtual office services?",
      answer: "Virtual office services provide a professional business address, mail handling, call forwarding, and occasional meeting spaces without the overhead of a physical office."
    },
    {
      id: 4,
      question: "How much does it cost to register a company?",
      answer: "The cost varies depending on the type of company structure. Our packages start from ₹7,999 for a basic private limited company registration."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;