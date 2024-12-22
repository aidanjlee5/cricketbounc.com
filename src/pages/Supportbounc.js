import React from 'react';
import { Link } from 'react-router-dom';
import gofundmeImage from '../images/gofundme1.webp'; // Make sure the path is correct
import Footer from '../components/Footer'; // Ensure the footer is imported correctly

function Supportbounc() {
  return (
    <div className="Supportbounc">
      <h2>Support BOUNC</h2>
      <p className="support-description">
        Support our various projects, games and get a chance to become a sponsor of our event(s)*
      </p>
      <p className="support-terms">
        *check the event's terms & conditions.
      </p>
      <a href="https://www.gofundme.com/f/help-unc-cricket-club-shine-at-solefest" target="_blank" rel="noopener noreferrer">
        <img src={gofundmeImage} alt="Support our event" className="support-image" />
      </a>
      <Footer />
    </div>
  );
}

export default Supportbounc;
