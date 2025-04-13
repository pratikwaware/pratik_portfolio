// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group full-width">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;