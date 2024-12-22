import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Council from '../pages/Council';
import Motives from '../pages/Motives';
import Constitution from '../pages/Constitution';

function About() {
  return (
    <div className="about-container">
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="about-background">
              <h2>About Us</h2>
              <p>Welcome to the About Us section. Learn more about our council, our motives, and our constitution.</p>
            </div>
          } 
        />
        <Route path="council" element={<Council />} />
        <Route path="motives" element={<Motives />} />
        <Route path="constitution" element={<Constitution />} />
      </Routes>
    </div>
  );
}

export default About;
