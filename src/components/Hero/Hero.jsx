// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-image">
        <img src="https://avatars.githubusercontent.com/u/48583769?v=4" alt="Pratik Waware" />
      </div>
      <div className="hero-content">
        <h1>Pratik Waware</h1>
        <h2>React Js Developer @ Western Union</h2>
        <p>Software Engineer with ~3 years of experience in frontend development with React.JS. Specializing in building dynamic, reusable components and modern responsive UIs across web and mobile platforms.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pratik-waware-5a2216106/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/pratikwaware" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="Resume">
            <i className="fas fa-file-pdf"></i>
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;