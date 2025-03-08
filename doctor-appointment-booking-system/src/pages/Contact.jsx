import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Reach out to us via email, phone,
            or visit our office.
          </p>
          <div className="info-item">
            <h3>Email</h3>
            <p>support@medibook.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+1 123 456 7890</p>
          </div>
          <div className="info-item">
            <h3>Office Address</h3>
            <p>123 Main St, New York, NY 10001, USA</p>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792579936!2d-73.98773168459413!3d40.74844097932676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x3b9e1a1c6b5e5b1e!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1633024000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How can I contact support?</h3>
            <p>
              You can reach out to us via email at support@medibook.com or call
              us at +1 123 456 7890.
            </p>
          </div>
          <div className="faq-item">
            <h3>What are your office hours?</h3>
            <p>
              Our office is open from 9 AM to 6 PM, Monday to Friday.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I visit your office?</h3>
            <p>
              Yes, you can visit us at 123 Main St, New York, NY 10001, USA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;