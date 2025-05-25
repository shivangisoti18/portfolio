import React from 'react';
import './About.css';
import profileImage from '../images/Screenshot 2024-12-05 102827.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Shivangi" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className="about-description">
            I am a passionate Frontend Developer with expertise in creating beautiful and functional web applications. 
            With a strong foundation in both frontend and backend technologies, I strive to build seamless user experiences 
            and robust systems.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h3>Education</h3>
                <p>Your University Name</p>
                <p>Degree in Computer Science</p>
                <p>2018 - 2022</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-briefcase"></i>
              <div>
                <h3>Work Experience</h3>
                <p>Frontend Developer at Compliance Innovation</p>
                <p>Full Stack Developer at Nixet</p>
                <p>Intern at FlyNava Technologies</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-code"></i>
              <div>
                <h3>Technical Skills</h3>
                <p>Frontend: React, JavaScript, HTML5, CSS3</p>
                <p>Backend: Node.js, Express, MongoDB</p>
                <p>Tools: Git, Docker, AWS</p>
              </div>
            </div>
          </div>

          <div className="about-interests">
            <h3>Interests & Hobbies</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <i className="fas fa-book"></i>
                <span>Reading</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-music"></i>
                <span>Music</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-camera"></i>
                <span>Photography</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-plane"></i>
                <span>Travel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 