import React from 'react';
import socials from '../images/socials.webp';
import tiktokIcon from '../images/tiktok.webp';
import instagramIcon from '../images/instagram.webp';
import youtubeIcon from '../images/youtube.webp';
import facebookIcon from '../images/facebook.webp';
import xIcon from '../images/x.webp';
import Footer from '../components/Footer.js';

function Socials() {
  return (
    <div className="Socials">
      <h2 className="follow-on-title">Follow On</h2>
      
      {/* New Social Media Background Image with Icons */}
      <div className="socials-background-container">
          <img 
              src={socials} 
              alt="Social Media Background" 
              className="socials-background-image-2" 
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
                  onClick={() => window.open('https://x.com/CricketBOUN', '_blank')}
              />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Socials;