import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Simplci",
      description: "Authenticated users through full onboarding process including KYC, KYB, AML checks to ensure identity verification and compliance.",
      technologies: ["React", "Javascript", "SCSS", "TypeScript"],
      demo: "https://simplici.in"
    },
    {
      title: "Akasha Air Lines",
      description: "Contributed to the Akasha Airlines project by developing responsive user interfaces and enhancing user experience with optimized frontend code.",
      technologies: ["React", "Html", "SCSS", "JavaScript"],
      demo: "https://www.akasaair.com/"
    },
    // {
    //   title: "Project 3",
    //   description: "A real-time chat application",
    //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
    //   image: "project3.jpg",
    //   github: "https://github.com/shivangisoti18/project3",
    //   demo: "https://project3-demo.com"
    // }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {/* <img src={project.image} alt={project.title} /> */}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 