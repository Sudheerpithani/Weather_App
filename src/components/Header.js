import React from 'react';
import '../css/header.css';
import Defaultpng from '../assets/default.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={Defaultpng} alt="Weather Icon" className="logo" />
        <h1 className="app-title">Weather Now</h1>
      </div>
    </header>
  );
}

export default Header;
