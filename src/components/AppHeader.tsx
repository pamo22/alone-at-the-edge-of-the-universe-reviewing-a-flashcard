import React from 'react';
import flashcardLogo from '../assets/titlething.svg'
import './AppHeader.css'
import { Link } from 'react-router-dom';

function AppHeader({heading = "Missing headeing"}) {
  return (
    <header>
      <img src={flashcardLogo} className="logo" alt="logo" />
      <h3>{heading}</h3>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default AppHeader;