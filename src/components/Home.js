import React from 'react';
import './Home.css';
import profileImage from '../images/Screenshot 2024-12-05 102827.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="greeting">Hi, I'm <span className="highlight">Shivangi</span></h1>
          <h2 className="title">Frontend Developer</h2>
          <p className="description">
          I develop responsive, user-friendly web applications with modern technologies, focused on delivering seamless experiences and building robust, scalable systems.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-button primary">
              <i className="fas fa-code"></i>
              View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/shivangisoti18" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/shivangisoti18/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:shivangisoti18@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-container">
            <img src={profileImage} alt="Shivangi" />
            <div className="image-backdrop"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Home; 