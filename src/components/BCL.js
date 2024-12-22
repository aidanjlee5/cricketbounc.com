import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Teams from '../pages/Teams';
import Matches from '../pages/Matches';
import SignUp from '../pages/SignUp';

function BCL() {
  return (
    <div className="bcl-container">
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="bcl-background">
              <h2>BCL League</h2>
              <p>Welcome to the BCL League section. More information on the league coming soon.</p>
            </div>
          } 
        />
        <Route path="teams" element={<Teams />} />
        <Route path="matches" element={<Matches />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default BCL;
