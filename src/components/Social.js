import React from 'react';
import './Social.css';

const Social = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/shivangisoti18',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/shivangisoti18/',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/yourusername',
      color: '#E1306C'
    },
    {
      name: 'Medium',
      icon: 'fab fa-medium',
      url: 'https://medium.com/@yourusername',
      color: '#000000'
    },
    {
      name: 'Dev.to',
      icon: 'fab fa-dev',
      url: 'https://dev.to/yourusername',
      color: '#0A0A0A'
    }
  ];

  return (
    <div className="social-container">
      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            style={{ '--social-color': social.color }}
          >
            <i className={social.icon}></i>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social; 