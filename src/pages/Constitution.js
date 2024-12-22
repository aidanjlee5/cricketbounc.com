import React from 'react';
import Footer from '../components/Footer';
import '../components/styles.css';

function Constitution() {
  return (
    <div className="constitution-container">
      <h1 className="constitution-link">
        <a href={require('../images/constitution.pdf')} target="_blank" rel="noopener noreferrer">
          Constitution
        </a>
      </h1>
      <h1 className="constitution-link-2">
        <a href={require('../images/gamerules.pdf')} target="_blank" rel="noopener noreferrer">
          BCL League Rules
        </a>
      </h1>
      <Footer />
    </div>
  );
}

export default Constitution;


