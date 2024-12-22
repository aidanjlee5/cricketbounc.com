import React from 'react';
import '../components/styles.css';
import Footer from '../components/Footer';
import ij from '../images/ij.webp';
import sk from '../images/sk.webp';
import rs from '../images/rs.webp';

function Council() {
  return (
    <div className="Council">
      <h2 className="council-title">The Council</h2>
      <p className = "council-description">Meet the council members running the show behind the curtains!</p>
      
      <div className="council-images">
        <img src={ij} alt="Council Member 1" className="council-image"/>
        <img src={sk} alt="Council Member 2" className="council-image"/>
        <img src={rs} alt="Council Member 3" className="council-image"/>
      </div>

      <p className="council-text">And you too! There is no BOUNC without our players and members.</p>
      <p className="council-text">Thank you for being here!</p>

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Council;
