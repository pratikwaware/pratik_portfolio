"use client"
// src/App.js
import React from 'react';
// import './App.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Footer from '../components/Footer/Footer';
import {Blob1, Blob2} from './assets/Blobs';

function App() {

  return (
    <div className="App">
      {/* Decorative SVG blobs */}
      <Blob1 />
      <Blob2 />

      <Header />
      
      <main className="container">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;