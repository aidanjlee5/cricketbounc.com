import React, { useEffect } from 'react';
import T1B from '../images/T1B.webp';
import T2B from '../images/T2B.webp';
import T3B from '../images/T3B.webp';
import T4B from '../images/T4B.webp';
import titlelogo from '../images/titlelogo.webp';
import Footer from '../components/Footer'; // Import Footer

function Teams() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <div className="Teams">
        <div className="title-container">
          <h2>Teams Competing In</h2>
          <img src={titlelogo} alt="Title Logo" className="title-logo" />
        </div>
        <div className="bcl-signup-container">
          <a href="/bcl/signup" className="bcl-signup-link">
            Join a Team in the BCL Now!
          </a>
        </div>
        <div className="team-images">
          <img id="T1B" src={T1B} alt="Team 1" className="team-image" />
          <img id="T2B" src={T2B} alt="Team 2" className="team-image" />
          <img id="T3B" src={T3B} alt="Team 3" className="team-image" />
          <img id="T4B" src={T4B} alt="Team 4" className="team-image" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Teams;
