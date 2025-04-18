// src/pages/Portfolio.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PageTitle from "../components/PageTitle";

import "../styles/Portfolio.css";

const images = [
  "/assets/CP-001.jpg",
  "/assets/CP-002.jpg",
  "/assets/CP-003.jpg",
  "/assets/CP-004.jpg",
  "/assets/CP-005.jpg",
  "/assets/LP-001.jpg",
  "/assets/LP-002.jpg",
  "/assets/LP-003.jpg",
  "/assets/LP-004.jpg",
  "/assets/LP-005.jpg",
  "/assets/CD-001.jpg",
  "/assets/CD-002.jpg",
  "/assets/CD-003.jpg",
  "/assets/CD-004.jpg",
  "/assets/CD-005.jpg",
  "/assets/CD-006.jpg",
  "/assets/CD-007.jpg",
  "/assets/CD-008.jpg",
  "/assets/CD-009.jpg",
  "/assets/PM-001.jpg",
  "/assets/PM-002.jpg",
  "/assets/PM-003.jpg",
  "/assets/PM-004.jpg",
  "/assets/PM-005.jpg",
  "/assets/PM-006.jpg",
  "/assets/JK-001.JPEG",
  "/assets/JK-002.JPEG",
  "/assets/JK-003.JPEG",
  "/assets/JK-004.JPEG",
  "/assets/JK-005.JPEG",
  "/assets/HZ-001.JPEG",
  "/assets/HZ-002.JPEG",
  "/assets/HZ-003.JPEG",
  "/assets/HZ-004.JPEG",
  "/assets/HZ-005.JPEG",
];

const Portfolio = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="portfolio-page">
      <PageTitle title="Portfolio" />

      <h1>Portfolio</h1>

      <div className="portfolio-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Portfolio ${index + 1}`}
            onClick={() => setOpenIndex(index)}
            className="portfolio-image"
          />
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
      />
    </div>
  );
};

export default Portfolio;
