import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SCSS", level: 80 },
        { name: "Material UI", level: 80 },
        { name: "Talwind CSS", level: 80 },
        { name: "Ant Design", level: 80 },

      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "Express", level: 40 },
      ]
    },
    {
      category: "State Management",
      skills: [
        { name: "Redux", level: 70 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Context API", level: 70 },
        { name: "Recoil", level: 75 },
      ]
    },
    {
        category:"Tools & Others",
        skills:[
            {name:"Git",level:80},
            {name:"NPM",level:70},
            {name:"Yarn",level:70},
            {name:"Webpack",level:75},
            {name:"Figma",level:85},
            {name:"MJML",level:85},
            {name:"ESLint",level:85},
            {name:"ChatGpt",level:85},
            {name:"Cursor AI",level:85},
            {name:"Agile",level:85},
            {name:",Grok,",level:85},
            {name:"Prettier",level:85},
            {name:"Docker",level:85},
        ]
    },
    {category: "Soft skills",
        skills:[
            {name:"Agile Methodology",level:70},
            {name:" Scrum,",level:75},
            {name:"Team Collaboration",level:85},
            {name:"Documentation ",level:80},
        ]
    },
    {
        category: "Testing:",
        skills:[
            {name:"jest",level:75},
            {name:"React Testing Libarary",Level: 75},
        ]
    }
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills; 
