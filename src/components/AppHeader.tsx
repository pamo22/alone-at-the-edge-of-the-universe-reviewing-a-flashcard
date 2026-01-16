import React from 'react';
import flashcardLogo from '../assets/titlething.svg'
import './AppHeader.css'
import { Link } from 'react-router-dom';

interface AppHeaderProps {
  heading: React.ReactNode; // Accept JSX/string
}

function AppHeader({heading = "missing heading"}:AppHeaderProps) {
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