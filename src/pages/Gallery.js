import React from 'react';
import Footer from '../components/Footer';

// Import images
import logoc from '../images/logoc.webp';
import taglinec from '../images/taglinec.webp';
import bclc from '../images/bclc.webp';
import trophyc from '../images/trophyc.webp';
import noblefranklinridersc from '../images/noblefranklinridersc.webp';
import blazingramsesc from '../images/blazingramsesc.webp';
import tarheeltrojancs from '../images/tarheeltrojansc.webp';
import sixerj0rdansc from '../images/6ixerj0rdansc.webp';
import usc from '../images/usc.webp';
import posterc from '../images/posterc.webp';
import trophyposterc from '../images/trophyposterc.webp';

function Gallery() {
  return (
    <div className="Gallery">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">All designs & pictures have been copyrighted by BOUNC®.</p>
      <p className="gallery-description">Feel free to view & download them. Please contact us for use in commercial purposes.</p>

      <div className="section">
        <h3 className="section-title">Logos</h3>
        <hr className="section-underline" />
        <div className="image-grid">
          <a href={logoc} target="_blank" rel="noopener noreferrer">
            <img src={logoc} alt="Logo" className="image-box" />
          </a>
          <a href={taglinec} target="_blank" rel="noopener noreferrer">
            <img src={taglinec} alt="Tagline" className="image-box" />
          </a>
          <a href={bclc} target="_blank" rel="noopener noreferrer">
            <img src={bclc} alt="BCL Logo" className="image-box" />
          </a>
          <a href={trophyc} target="_blank" rel="noopener noreferrer">
            <img src={trophyc} alt="Trophy" className="image-box" />
          </a>
          <a href={noblefranklinridersc} target="_blank" rel="noopener noreferrer">
            <img src={noblefranklinridersc} alt="Noble Franklin Riders" className="image-box" />
          </a>
          <a href={blazingramsesc} target="_blank" rel="noopener noreferrer">
            <img src={blazingramsesc} alt="Blazing Ramses" className="image-box" />
          </a>
          <a href={tarheeltrojancs} target="_blank" rel="noopener noreferrer">
            <img src={tarheeltrojancs} alt="Tar Heel Trojans" className="image-box" />
          </a>
          <a href={sixerj0rdansc} target="_blank" rel="noopener noreferrer">
            <img src={sixerj0rdansc} alt="6ixer J0rdans" className="image-box" />
          </a>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Posters</h3>
        <hr className="section-underline" />
        <div className="image-grid posters-grid">
          <a href={usc} target="_blank" rel="noopener noreferrer">
            <img src={usc} alt="USC" className="image-box" />
          </a>
          <a href={posterc} target="_blank" rel="noopener noreferrer">
            <img src={posterc} alt="Poster" className="image-box" />
          </a>
          <a href={trophyposterc} target="_blank" rel="noopener noreferrer">
            <img src={trophyposterc} alt="Trophy Poster" className="image-box" />
          </a>
        </div>
      </div>

      {/* New Section: Cricket the Bug */}
      <div className="section cricket-the-bug">
        <h3 className="section-title">Cricket the Bug</h3>
        <hr className="section-underline" />
        <p className="section-description">The Official Mascot of BOUNC: Cricket the Bug coming soon!</p>
      </div>

      {/* New Section: Games & Events */}
      <div className="section games-and-events">
        <h3 className="section-title">Games & Events</h3>
        <hr className="section-underline" />
        <p className="section-description">Pictures from BOUNC and BCL games & events coming soon!</p>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Gallery;
