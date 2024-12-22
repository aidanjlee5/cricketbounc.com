import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import background from '../images/background.webp';
import NobleFranklinRiders from '../images/NobleFranklinRiders.webp';
import BlazingRamses from '../images/BlazingRamses.webp';
import TarHeelTrojans from '../images/TarHeelTrojans.webp';
import SixerJ0rdans from '../images/6ixerJ0rdans.webp';
import BCLTrophy from '../images/BCLTrophy.webp';
import sign from '../images/sign.webp';
import heellifepagebackground from '../images/heellifepagebackground.webp';
import heellifeIcon from '../images/heellife.webp';
import cricketbackground from '../images/cricketbackground.webp';
import lIcon from '../images/l.webp';
import fIcon from '../images/f.webp';
import eIcon from '../images/e.webp';
import cIcon from '../images/c.webp';
import socials from '../images/socials.webp';
import tiktokIcon from '../images/tiktok.webp';
import instagramIcon from '../images/instagram.webp';
import youtubeIcon from '../images/youtube.webp';
import facebookIcon from '../images/facebook.webp';
import xIcon from '../images/x.webp';
import Footer from '../components/Footer.js';

function Home({ isLoggedIn, userData }) {
  const navigate = useNavigate();
  const [teamIcon, setTeamIcon] = useState(null);

  useEffect(() => {
    if (userData && userData.team) {
      switch (userData.team) {
        case 'NobleFranklinRiders':
          setTeamIcon(NobleFranklinRiders);
          break;
        case 'BlazingRamses':
          setTeamIcon(BlazingRamses);
          break;
        case 'TarHeelTrojans':
          setTeamIcon(TarHeelTrojans);
          break;
        case 'SixerJ0rdans':
          setTeamIcon(SixerJ0rdans);
          break;
        default:
          break;
      }
    }
  }, [userData]);

  const handleTeamsClick = (team) => {
    navigate(`/bcl/teams#${team}`);
  };

  const handleSignClick = () => {
    navigate('/bcl/signup');
  };

  const handleBCLHomeClick = () => {
    navigate('/bcl');
  };

  const handleHeelLifeClick = () => {
    window.open('https://heellife.unc.edu/organization/bounc', '_blank');
  };

  const handleLClick = () => {
    navigate('/burger-menu/rules');
  };

  const handleFClick = () => {
    window.open('https://www.icc-cricket.com/fixtures-results', '_blank');
  };

  const handleEClick = () => {
    window.open('https://www.youtube.com/watch?v=95Ia6yBcnXI&list=PLHKIZtgW3Stx7FBBV1fU5EziT_2HCGciV', '_blank');
  };

  const handleCClick = () => {
    window.open('https://www.icc-cricket.com/tournaments/t20cricketworldcup', '_blank');
  };

  return (
    <main>
      <div className="home-container">
        <h2>Welcome to BOUNC!</h2>
        {isLoggedIn && userData ? (
          <div className="content">
            <div className="team-info">
              <div className="team-icon">
                <img src={teamIcon} alt={userData.team} />
              </div>
              <div className="stats">
                <p>Runs: {userData.runs}</p>
                <p>Wickets: {userData.wickets}</p>
                <p>Games: {userData.games}</p>
                <p>Sixes: {userData.sixes}</p>
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="background-image" 
            style={{ backgroundImage: `url(${background})` }}
          >
            <img 
              src={NobleFranklinRiders} 
              alt="Noble Franklin Riders" 
              className="icon noble-franklin-riders" 
              onClick={() => handleTeamsClick('T1B')} 
            />
            <img 
              src={BlazingRamses} 
              alt="Blazing Ramses" 
              className="icon blazing-ramses" 
              onClick={() => handleTeamsClick('T2B')} 
            />
            <img 
              src={BCLTrophy} 
              alt="BCL Trophy" 
              className="icon bcl-trophy" 
              onClick={handleBCLHomeClick} 
            />
            <img 
              src={TarHeelTrojans} 
              alt="Tar Heel Trojans" 
              className="icon tar-heel-trojans" 
              onClick={() => handleTeamsClick('T3B')} 
            />
            <img 
              src={SixerJ0rdans} 
              alt="6ixer Jordans" 
              className="icon sixer-jordans" 
              onClick={() => handleTeamsClick('T4B')} 
            />
            <img 
              src={sign} 
              alt="Sign" 
              className="icon sign" 
              onClick={handleSignClick} 
            />
          </div>
        )}

        {/* Heel Life image with icon */}
        <div className="heel-life-container" onClick={handleHeelLifeClick}>
          <img 
            src={heellifepagebackground} 
            alt="Heel Life Page Background" 
            className="heel-life-image" 
          />
          <img 
            src={heellifeIcon} 
            alt="Heel Life Icon" 
            className="heel-life-icon" 
          />
        </div>

        {/* New Cricket Background Image with Icons */}
        <div className="cricket-background-container">
          <img 
            src={cricketbackground} 
            alt="Cricket Background" 
            className="cricket-background-image" 
          />
          <div className="cricket-icons">
            <img 
              src={lIcon} 
              alt="L Icon" 
              className="cricket-icon l-icon" 
              onClick={handleLClick}
            />
            <img 
              src={fIcon} 
              alt="F Icon" 
              className="cricket-icon f-icon" 
              onClick={handleFClick} 
            />
            <img 
              src={eIcon} 
              alt="E Icon" 
              className="cricket-icon e-icon" 
              onClick={handleEClick} 
            />
            <img 
              src={cIcon} 
              alt="C Icon" 
              className="cricket-icon c-icon" 
              onClick={handleCClick} 
            />
          </div>
        </div>

        {/* New Social Media Background Image with Icons */}
        <div className="socials-background-container">
          <img 
            src={socials} 
            alt="Social Media Background" 
            className="socials-background-image" 
          />
          <div className="social-icons">
            <img 
              src={tiktokIcon} 
              alt="TikTok Icon" 
              className="social-icon tiktok-icon" 
              onClick={() => window.open('https://www.tiktok.com/@BOUNCE_UNCCH', '_blank')}
            />
            <img 
              src={instagramIcon} 
              alt="Instagram Icon" 
              className="social-icon instagram-icon" 
              onClick={() => window.open('https://www.instagram.com/cricketbounc/', '_blank')}
            />
            <img 
              src={youtubeIcon} 
              alt="YouTube Icon" 
              className="social-icon youtube-icon" 
              onClick={() => window.open('https://www.youtube.com/channel/UCY_pRAyhPu98hcduzQl6fqw', '_blank')}
            />
            <img 
              src={facebookIcon} 
              alt="Facebook Icon" 
              className="social-icon facebook-icon" 
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61564215452432', '_blank')}
            />
            <img 
              src={xIcon} 
              alt="X Icon" 
              className="social-icon x-icon" 
              onClick={() => window.open('https://x.com/CricketBOUNC', '_blank')}
            />
          </div>
        </div>

        {isLoggedIn && (
          <div className="content">
            <p>Welcome back!</p>
            <p>Explore more content...</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
