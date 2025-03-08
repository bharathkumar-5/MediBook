import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <p>{testimonial.text}</p>
      <h4>{testimonial.name}</h4>
      <p>{testimonial.location}</p>
    </div>
  );
};

export default TestimonialCard;