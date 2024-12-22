import React from 'react';
import { useNavigate } from 'react-router-dom';
import rulesBackground from '../images/rulesb.webp'; // Import the background image
import wic from '../images/wic.webp';
import wicb from '../images/wicb.webp';
import bat from '../images/bat.webp';
import runs from '../images/runs.webp';
import bowl from '../images/bowl.webp';
import out from '../images/out.webp';
import fielding from '../images/fielding.webp';
import formats from '../images/formats.webp';
import roles from '../images/roles.webp';
import signals from '../images/signals.webp';
import everywhere from '../images/everywhere.webp';
import Footer from '../components/Footer.js';

function CricketRules() {
  const navigate = useNavigate();

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <main className="cricket-rules-main">
      <div className="cricket-rules-container">
        <h2>Learn Cricket Now!</h2>
        <p>Click the tabs and follow the videos.</p>
        <div 
          className="rules-background-image" 
          style={{ backgroundImage: `url(${rulesBackground})` }}
        >
          <img 
            src={wic} 
            alt="WIC Icon" 
            className="cricket-wic" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket')} 
          />
          <img 
            src={wicb} 
            alt="WICB Icon" 
            className="rules-icon cricket-wicb" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket')} 
          />
          <img 
            src={bat} 
            alt="Bat Icon" 
            className="rules-icon cricket-bat" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-batting')} 
          />
          <img 
            src={runs} 
            alt="Runs Icon" 
            className="rules-icon cricket-runs" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-run-scoring')} 
          />
          <img 
            src={bowl} 
            alt="Bowl Icon" 
            className="rules-icon cricket-bowl" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-bowling')} 
          />
          <img 
            src={out} 
            alt="Out Icon" 
            className="rules-icon cricket-out" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-dismissals')} 
          />
          <img 
            src={fielding} 
            alt="Fielding Icon" 
            className="rules-icon cricket-fielding" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-fielding')} 
          />
          <img 
            src={formats} 
            alt="Formats Icon" 
            className="rules-icon cricket-format" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-the-3-formats')} 
          />
          <img 
            src={roles} 
            alt="Roles Icon" 
            className="rules-icon cricket-roles" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-umpire-roles')} 
          />
          <img 
            src={signals} 
            alt="Signals Icon" 
            className="rules-icon cricket-signals" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-umpire-signals')} 
          />
          <img 
            src={everywhere} 
            alt="Everywhere Icon" 
            className="rules-icon cricket-everywhere" 
            onClick={() => handleImageClick('https://www.icc-cricket.com/videos/what-is-cricket-playing-everywhere')} 
          />
        </div>
        <div className="content">
          <p>Explore more about cricket by clicking on the icons above.</p>
          <p>Stay tuned for more updates!</p>
        </div>
      </div>
      <Footer /> {/* Keep the footer only here */}
    </main>
  );
}

export default CricketRules;
