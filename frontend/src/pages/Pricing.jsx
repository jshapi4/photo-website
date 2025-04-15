// src/pages/Pricing.jsx
import React from "react";
import pricingPackages from "../data/pricingData";
import PricingCard from "../components/PricingCard";
import PageTitle from "../components/PageTitle";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <PageTitle title="Pricing" />
      <h1>Pricing</h1>
      <p>Check out my photography packages and rates.</p>
      <div className="pricing-grid">
        {pricingPackages.map((pkg) => (
          <PricingCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
