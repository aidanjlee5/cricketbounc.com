import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/styles.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import BCL from './components/BCL.js';
import Videos from './components/Videos.js';
import BurgerMenu from './components/BurgerMenu.js';
import Footer from './components/Footer.js'; 
import Council from './pages/Council.js';
import Motives from './pages/Motives.js';
import Constitution from './pages/Constitution.js';
import Teams from './pages/Teams.js';
import Matches from './pages/Matches.js';
import SignUp from './pages/SignUp.js';
import CricketRules from './pages/CricketRules.js';
import Socials from './pages/Socials.js';
import FAQ from './pages/FAQ.js';
import ContactUs from './pages/ContactUs.js';
import Gallery from './pages/Gallery.js';
import Supportbounc from './pages/Supportbounc.js';
import PasswordReset from './components/PasswordReset.js'; // Import PasswordReset

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Adding hover effects to touch events for mobile users
    document.querySelectorAll('.hover-element').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hovered');
      });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hovered');
      });

      // Add touch event handlers for mobile devices
      element.addEventListener('touchstart', () => {
        element.classList.add('hovered');
      });
      element.addEventListener('touchend', () => {
        element.classList.remove('hovered');
      });
    });
  }, []); // Empty dependency array to ensure this runs only once when the component mounts

  return (
    <div className="App">
      <Router>
        {/* //Removed isLoggedIn={isLoggedIn} onLogout={handleLogout} */}
        <Header/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/about/*" element={<About />}>
              <Route path="council" element={<Council />} />
              <Route path="motives" element={<Motives />} />
              <Route path="constitution" element={<Constitution />} />
            </Route>
            <Route path="/bcl/*" element={<BCL />}>
              <Route path="teams" element={<Teams />} />
              <Route path="matches" element={<Matches />} />
              <Route path="signup" element={<SignUp onLogin={handleLogin} />} />
            </Route>
            <Route path="/videos" element={<Videos />} />
            <Route path="/burger-menu/*" element={<BurgerMenu />}>
              <Route path="rules" element={<CricketRules />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="socials" element={<Socials />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="supportbounc" element={<Supportbounc />} />
              </Route>
            <Route path="/password-reset" element={<PasswordReset />} /> {/* New PasswordReset Route */}
            {/* <Route path="*" element={<Home isLoggedIn={isLoggedIn} />} /> Fallback route */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
