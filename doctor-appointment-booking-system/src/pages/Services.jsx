import React from 'react';

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Comprehensive care for heart-related conditions.',
      icon: '❤️',
    },
    {
      id: 2,
      title: 'Dermatology',
      description: 'Treatment for skin, hair, and nail conditions.',
      icon: '💆‍♂️',
    },
    {
      id: 3,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
      icon: '👶',
    },
    {
      id: 4,
      title: 'Orthopedics',
      description: 'Treatment for musculoskeletal system issues.',
      icon: '🦴',
    },
    {
      id: 5,
      title: 'Gynecology',
      description: 'Care for women’s reproductive health.',
      icon: '🌸',
    },
    {
      id: 6,
      title: 'Neurology',
      description: 'Diagnosis and treatment of nervous system disorders.',
      icon: '🧠',
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: 'The cardiology team saved my life! Highly recommended.',
      name: 'John Doe',
    },
    {
      id: 2,
      text: 'The dermatology services are top-notch. My skin has never been better.',
      name: 'Jane Smith',
    },
    {
      id: 3,
      text: 'The pediatricians are so caring and knowledgeable. My kids love them!',
      name: 'Emily Johnson',
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of medical services to meet your healthcare
          needs. Our expert doctors are here to provide the best care for you
          and your family.
        </p>
      </div>

      <div className="services-list">
        {serviceCategories.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => (window.location.href = '/booking')}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="testimonials-section">
        <h2>What Our Patients Say</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="call-to-action">
        <h2>Ready to Book an Appointment?</h2>
        <p>
          Don’t wait! Schedule your appointment today and experience the best
          healthcare services.
        </p>
        <button onClick={() => (window.location.href = '/booking')}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Services;