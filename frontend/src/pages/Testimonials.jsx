import React, { useState } from "react";
import testimonialData from "../data/testimonialData";
import "../styles/Testimonials.css";
import PageTitle from "../components/PageTitle";

const Testimonial = ({ quote, name, session, image }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 200;
  const needsTruncation = quote.length > previewLength;

  const toggleExpand = () => {
    if (needsTruncation) {
      setExpanded(!expanded);
    }
  };

  return (
    <div
      className={`testimonial-card ${needsTruncation ? "expandable" : ""} ${
        expanded ? "expanded" : ""
      }`}
      onClick={toggleExpand}
    >
      <div className="testimonial-quote">
        {expanded || !needsTruncation
          ? quote
          : `${quote.substring(0, previewLength)}...`}
      </div>

      <div className="testimonial-author">
        {image && (
          <div className="testimonial-image">
            <img src={image} alt={name} />
          </div>
        )}
        <div className="testimonial-info">
          <h4>{name}</h4>
          {session && <p>{session}</p>}
        </div>
      </div>

      {needsTruncation && (
        <div className="expand-indicator">
          {expanded ? "Click to collapse" : "Click to read more"}
        </div>
      )}
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
