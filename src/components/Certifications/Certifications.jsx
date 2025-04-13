// src/components/Certifications/Certifications.jsx
import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "React: Testing and Debugging",
      issuer: "LinkedIn",
      date: "Issued Feb 2025",
      skills: ["Debugging"]
    },
    {
      title: "React: Design Patterns",
      issuer: "LinkedIn",
      date: "Issued Oct 2022"
    },
    {
      title: "Getting Started with Azure DevOps Boards",
      issuer: "Coursera",
      date: "Issued Mar 2021"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Issued Oct 2020"
    }
  ];

  return (
    <section id="certifications">
      <h2>Licenses & Certifications</h2>
      
      {certifications.map((cert, index) => (
        <div className="certification-item" key={index}>
          <div className="certification-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="certification-content">
            <h3 className="certification-title">{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <span className="date">{cert.date}</span>
            
            {cert.skills && (
              <div className="skills">
                {cert.skills.map((skill, i) => (
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

export default Certifications;