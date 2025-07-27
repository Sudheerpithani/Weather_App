import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/images/default.png" alt="Weather Icon" className="logo" />
        <h1 className="app-title">Weather Now</h1>
      </div>
    </header>
  );
}

export default Header;
