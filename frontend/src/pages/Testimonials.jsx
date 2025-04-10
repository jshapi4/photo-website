// src/pages/Testimonials.jsx
import React from "react";
import testimonialData from "../data/testimonialData";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <div className="testimonials-section">
        <h1>What Families Are Saying</h1>
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
