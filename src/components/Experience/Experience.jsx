// src/components/Experience/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Associate Solution Engineering",
      company: "Western Union · Full-time",
      date: "Feb 2025 - Present · 3 mos · Pune, Maharashtra, India",
      skills: ["React.js", "Next.js"]
    },
    {
      title: "Lead Software Engineer",
      company: "Persistent Systems · Full-time",
      date: "Jan 2025 - Feb 2025 · 2 mos",
      skills: ["React.js", "Redux"]
    },
    {
      title: "React Developer",
      company: "iProgrammer Solutions Pvt. Ltd. · Full-time",
      date: "Mar 2022 - Jan 2025 · 2 yrs 11 mos · Pune, Maharashtra, India",
      description: [
        "Software Engineer with total ~3 years of experience in frontend development with React.JS. Working with multiple front-end languages and libraries (e.g., NextJS, React.JS / React JS, Redux, FabricJS, SCSS, JavaScript, TypeScript, JSX, Axios). Building dynamic, reusable functional components and modern CSS layouts using Flexbox, Grid, etc. for smooth, responsive frontend UIs across Web and Mobile platforms.",
        "Worked on testing frameworks such as Jest or React Testing Library. Successfully managed 2+ projects concurrently. Solved critical issues like memory leakage, Cross-browser compatibility, R&D for best compatible libraries to integrate. Gained recognition from clients and the Project Manager for outstanding performance, collaboration, and time management."
      ],
      skills: [
        "React.js", "Next.js", "Redux", "TypeScript", "JavaScript", 
        "FabricJS", "SCSS", "JSX", "Axios", "Flexbox", "CSS Grid", 
        "Jest", "React Testing Library", "Responsive Design", 
        "Cross-browser Compatibility", "Performance Optimization"
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="experience-content">
            <h3 className="job-title">{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <span className="date">{exp.date}</span>
            
            {exp.description && (
              <div className="job-description">
                {exp.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
            
            {exp.skills && (
              <div className="skills">
                {exp.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;