import React from 'react';
import contactBackground from '../images/contactb.webp';
import contactIcon from '../images/contact.webp';
import Footer from '../components/Footer'; // Adjust the path if necessary

function ContactUs() {
  return (
    <div className="ContactUs">
      <h2 className="contact-title">Connect with us!</h2>
      
      {/* Contact Background with Icon */}
      <div className="contact-background-container">
          <img 
              src={contactBackground} 
              alt="Contact Background" 
              className="contact-background-image" 
          />
          <img 
              src={contactIcon} 
              alt="Contact Icon" 
              className="contact-icon" 
              onClick={() => window.location.href = 'mailto:bowlersbattersunc@gmail.com'}
          />
      </div>

      {/* Add the Footer here */}
      <Footer />
    </div>
  );
}

export default ContactUs;

