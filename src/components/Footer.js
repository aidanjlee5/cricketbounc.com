import React from 'react';
import { Link } from 'react-router-dom';
import logo from './stamp2.png';  // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/burger-menu/contact">Contact Us</Link>
          <Link to="/burger-menu/faq">FAQ</Link>
          <Link to="/burger-menu/socials">Socials</Link>
          <Link to="/burger-menu/supportbounct">Support BOUNC</Link>
        </div>
        <div className="footer-center">
          <Link to="/" className="footer-logo">cricketbounc.com</Link>
          <img src={logo} alt="Designed by Ishan Joshi" className="footer-img" />
        </div>
        <div className="footer-signup">
          <Link to="/bcl/signup">Sign Up/Login</Link>
          <p className="footer-rights">2024 BOUNC®. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

