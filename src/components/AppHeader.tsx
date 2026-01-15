import React from 'react';
import flashcardLogo from '../assets/titlething.svg'
import './AppHeader.css'

function AppHeader({heading = "Missing headeing"}) {
  return (
    <header>
      <img src={flashcardLogo} className="logo" alt="logo" />
      <h3>{heading}</h3>
      {/* Navigation links or buttons */}
    </header>
  );
}

export default AppHeader;