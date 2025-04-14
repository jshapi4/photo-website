// src/pages/Portfolio.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "../styles/Portfolio.css";

const images = [
  "/assets/fam3-capitol.jpg",
  "/assets/baby-walking-proudly.jpg",
  "/assets/land-park-log.jpg",
  "/assets/land-park-water.jpg",
  "/assets/land-park-all-3.jpg",
  "/assets/land-park-sitting.jpg",
  "/assets/land-park-grass.jpg",
  "/assets/dad-and-mom-gaze.jpg",
  "/assets/baby-boy-and-bubble.jpg",
  "/assets/mom-swings-boy.jpg",
  "/assets/boy-on-toes-reaching.jpg",
  "/assets/mom-and-son-faces.jpg",
  "/assets/dad-kisses-baby.jpg",
  "/assets/mom-boy-on-log.jpg",
  "/assets/family-and-purple-flowers.jpg",
  "/assets/mom-and-baby-smiling.jpg",
  "/assets/mom-pointing.jpg",
  "/assets/mom-bubbles.jpg",
  "/assets/family-of-three-building.jpg",
  "/assets/fam-in-woods.jpg",
  "/assets/mom-and-baby-1.jpg",
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
