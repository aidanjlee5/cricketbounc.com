import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/bcl">BCL</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/burger-menu">☰</Link>
    </nav>
  );
}

export default Navbar;
