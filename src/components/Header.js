import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Ensure you have a logo image

const Header = () => {
  return (
    <header>
      <img src={logo} alt="BOUNC Logo" className="logo" />
      <h1>BOUNC® Bowlers & Batters at UNC-Chapel Hill</h1>
      <nav>
        <div className="dropdown">
          <Link to="/">Home</Link>
        </div>
        <div className="dropdown">
          <Link to="/about">About</Link>
          <div className="dropdown-content about">
            <Link to="/about/council">The Council</Link>
            <Link to="/about/motives">Motives</Link>
            <Link to="/about/constitution">Constitution</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/bcl">BCL</Link>
          <div className="dropdown-content bcl">
            <Link to="/bcl/teams">Teams</Link>
            <Link to="/bcl/matches">Matches</Link>
            <Link to="/bcl/signup">Sign Up/Login</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/videos">Videos</Link>
        </div>
        <div className="dropdown burger-menu">
          <span>☰</span> {/* Replaced Link with a span */}
          <div className="dropdown-content burger-menu">
            <Link to="/burger-menu/rules">Cricket Rules</Link>
            <Link to="/burger-menu/gallery">Gallery</Link>
            <Link to="/burger-menu/socials">Socials</Link>
            <Link to="/burger-menu/faq">FAQ</Link>
            <Link to="/burger-menu/contact">Contact Us</Link>
            <Link to="/burger-menu/supportbounc">Support BOUNC</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
