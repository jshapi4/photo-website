// src/components/PricingCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = ({ package: pricingPackage }) => {
  return (
    <div
      className={`pricing-card ${pricingPackage.is_featured ? "featured" : ""}`}
    >
      {pricingPackage.is_featured && (
        <div className="featured-badge">Popular</div>
      )}
      <h3 className="package-name">{pricingPackage.name}</h3>
      <div className="package-price">${pricingPackage.price}</div>
      <p className="package-description">{pricingPackage.description}</p>

      <ul className="package-features">
        {pricingPackage.items &&
          pricingPackage.items.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
      </ul>

      <Link to="/contact" className="book-now-btn">
        Book Now
      </Link>
    </div>
  );
};

export default PricingCard;
