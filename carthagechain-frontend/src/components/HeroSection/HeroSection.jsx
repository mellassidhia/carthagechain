import React from 'react';
import './HeroSection.css';
import {assets} from "../../assets/assets"
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>VOTE! Let Your Voice Be Heard!</h1>
        <button className="cta-button">User Login</button>
        <button className="cta-button">Admin Login</button>
      </div>
      <div className="hero-image">
        <img src={assets.home_page} alt="Home Page" className="hero-image" />

      </div>
    </section>
  );
};

export default HeroSection;