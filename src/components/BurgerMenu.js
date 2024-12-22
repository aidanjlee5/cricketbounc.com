import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CricketRules from '../pages/CricketRules.js';
import Socials from '../pages/Socials.js';
import FAQ from '../pages/FAQ.js';
import ContactUs from '../pages/ContactUs.js';
import Gallery from '../pages/Gallery.js';
import Supportbounc from '../pages/Supportbounc.js';

function BurgerMenu() {
  return (
    <div className="BurgerMenu">
      <nav className="burger-menu-links">
        <Link to="rules">Cricket Rules</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="socials">Socials</Link>
        <Link to="faq">FAQ</Link>
        <Link to="contact">Contact Us</Link>
        <Link to="supportbounc">Support Bounc</Link> {/* Added Support Bounc Link */}
      </nav>
      <Routes>
        <Route path="rules" element={<CricketRules />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="socials" element={<Socials />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="supportbounc" element={<Supportbounc />} /> {/* Added route for Support Bounc */}
      </Routes>
    </div>
  );
}

export default BurgerMenu;
