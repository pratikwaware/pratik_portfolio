// src/components/Education/Education.jsx
import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications - MCA, Computer Science",
      school: "Ajeenkya D Y Patil University",
      date: "2020 - 2022",
      skills: ["Engineering", "Communication"]
    },
    {
      degree: "Bachelor of Science - BCS, Computer Science",
      school: "Ahmednagar Jilha Maratha Vidya Prasarak Samaj's New Arts,Commerce & Science College",
      date: "2017 - 2020"
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      
      {education.map((edu, index) => (
        <div className="education-item" key={index}>
          <div className="education-icon">
            <i className={index === 0 ? "fas fa-graduation-cap" : "fas fa-university"}></i>
          </div>
          <div className="education-content">
            <h3 className="degree">{edu.degree}</h3>
            <p className="school">{edu.school}</p>
            <span className="date">{edu.date}</span>
            
            {edu.skills && (
              <div className="skills">
                {edu.skills.map((skill, i) => (
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

export default Education;