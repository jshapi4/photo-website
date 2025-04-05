// src/pages/About.jsx
import React from "react";
import "./About.css";
import headshot from "../assets/Emi-Camera.jpg";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Emi Shapiro, a family photographer based in Sacramento,
            California. I've loved photography ever since I was a teenager with
            a hand-me-down film camera in my hands. What started as a passion
            has grown into a dream I'm now bringing to life—building my own
            photography business and capturing heartfelt, meaningful moments for
            families along the way.
          </p>
          <p>
            I specialize in newborn, family, and motherhood
            photography—capturing the love, connection, and everyday magic that
            make these moments so special. My approach is relaxed and natural,
            helping you feel at ease so we can create timeless images that
            reflect your genuine story.
          </p>
          <p>
            When I am not behind the lens, I am usually spending time with
            family, or planning our next travel adventure. Let's create
            something beautiful together!
          </p>
        </div>
        <div className="about-image">
          <img src={headshot} alt="Emi Shapiro - Photographer" />
        </div>
      </div>
    </div>
  );
};

export default About;
