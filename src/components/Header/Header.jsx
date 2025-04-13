// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <a href="#" className="logo">
          <div className="logo-icon">
            <i className="fas fa-code"></i>
          </div>
          PratikWaware
        </a>
        <nav>
          <ul>
            <li><a href="#about" className="active">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;