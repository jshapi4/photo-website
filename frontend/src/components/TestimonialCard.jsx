// src/components/TestimonialCard.js
import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">{testimonial.quote}</div>
      <div className="testimonial-author">
        {testimonial.image && (
          <div className="testimonial-image">
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        )}
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          {testimonial.position && <p>{testimonial.position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
