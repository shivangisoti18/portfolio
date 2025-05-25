import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Compliance Innovation",
      period: "Aug 2022 – present",
      description: [
        "Translated Figma designs into functional features covering KYC, KYB, eSign, AML, and more",
        "Integrated REST APIs and built key modules like Billing, Signup/Login, Developer Keys, and User Roles",
        "Created MJML email templates for onboarding and transactional communications",
        "Contributed to Microfrontend architecture and optimized Webpack for faster builds",
        "Applied ESLint rules to ensure consistent, high-quality code standards across the project",
        "Improved application performance and user experience by optimizing load times by 30%",
        "Collaborated closely with UI/UX designers and backend teams to deliver scalable and maintainable features"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Nixet",
      period: "Apr 2022 – Jul 2022",
      description: [
        "Developed and maintained multiple web applications",
        "Collaborated with UX designers to implement responsive designs",
        "Integrated third-party APIs and services",
        "Improved database performance and query optimization"
      ]
    },
    {
      title: "Intern",
      company: "FlyNava Technologies",
      period: "Feb 2022 - Apr 2022",
      description: [
        "Assisted in developing frontend and backend features",
        "Participated in agile development processes",
        "Fixed bugs and implemented new features",
        "Worked with cross-functional teams"
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <ul>
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 