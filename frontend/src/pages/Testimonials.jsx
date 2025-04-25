import React, { useState } from "react";
import testimonialData from "../data/testimonialData";
import "../styles/Testimonials.css";
import PageTitle from "../components/PageTitle";

const Testimonial = ({ quote, name, position, image }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 150;
  const needsTruncation = quote.length > previewLength;

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">
        {expanded || !needsTruncation
          ? quote
          : `${quote.substring(0, previewLength)}...`}

        {needsTruncation && (
          <button
            className="read-toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="testimonial-author">
        {image && (
          <div className="testimonial-image">
            <img src={image} alt={name} />
          </div>
        )}
        <div className="testimonial-info">
          <h4>{name}</h4>
          {position && <p>{position}</p>}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <PageTitle title="Testimonials" />
      <div className="testimonials-section">
        <h1>What Families Are Saying</h1>
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
