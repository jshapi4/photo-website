// src/pages/Portfolio.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "../styles/Portfolio.css";

const images = [
  "/assets/baby-walking-proudly.jpg",
  "/assets/baby-boy-and-bubble.jpg",
  "/assets/portfolio3.jpg",
  "/assets/mom-swings-boy.jpg",
  "/assets/portfolio5.jpg",
  "/assets/portfolio6.jpg",
  "/assets/boy-on-toes-reaching.jpg",
  "/assets/portfolio8.jpg",
  "/assets/mom-and-son-faces.jpg",
  "/assets/portfolio10.jpg",
  "/assets/mom-boy-on-log.jpg",
  "/assets/portfolio12.jpg",
  "/assets/portfolio13.jpg",
  "/assets/portfolio14.jpg",
  "/assets/family-and-purple-flowers.jpg",
  "/assets/mom-pointing.jpg",
  "/assets/portfolio17.jpg",
  "/assets/mom-bubbles.jpg",
  "/assets/portfolio19.jpg",
  "/assets/portfolio20.jpg",
];

const Portfolio = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="portfolio-page">
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
