import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        
        <div className="contact-info-list">
          <div className="contact-item">
            <span className="contact-label">E-MAIL</span>
            <a href="mailto:ishansrivastava20mar2006@gmail.com" className="contact-link">
              ishansrivastava20mar2006@gmail.com
            </a>
          </div>

          <div className='contact-item'> 
            <span className='contact-label'>INSTAGRAM</span>
            <a href="https://www.instagram.com/ishan._2025/" className='contact-link'>ishan._2025</a>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">MOBILE</span>
            <a href="tel:+918707553050" className="contact-link">
              +91 87075 53050
            </a>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">ADDRESS</span>
            <address className="contact-address">
              Motilal Nehru National Institute Of Technology,<br />
              Prayagraj, Uttar Pradesh, India.
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;