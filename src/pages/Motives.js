import React from 'react';
import Footer from '../components/Footer';
import motive from '../images/aim.webp';
import bcpb from '../images/bcpb.webp'

function Motives() {
  return (
    <main className = "motives-main">
      <div className="Motives">
        <h2 className="motives-title">Our Motives</h2>
        <div className="motives-images">
          <img src={motive} alt="Aim" className="motives-image" />
          <a href={require('../images/BCP2024.pdf')} target="_blank" rel="noopener noreferrer">
            <img src={bcpb} alt="BCPB" className="motives-image bcpb-image" />
          </a>
        </div>
       
      </div>
      <Footer/>
    </main>
  );
}

export default Motives;
