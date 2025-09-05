import React, { useState } from 'react';
import './Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
     // Handle form submission here
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };

  return (
    <div className="container-fluid ContactConf">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="contact-form-wrapper">
              <h1 className="contact-title text-center mb-4">Contact Us</h1>
              
              <div className="contact-form">
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control contact-input"
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter You Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control contact-input"
                  />
                </div>
                
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control contact-input contact-textarea"
                  />
                </div>
                
                <div className="d-grid">
                    <button
                    type="button" onClick={handleSubmit} className="btn contact-btn">
                    Send
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;