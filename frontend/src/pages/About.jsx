// src/pages/About.jsx
import React from "react";
import "../styles/About.css";
import headshot from "/assets/emi-photographer-bio.jpg";
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
    <div className="about-page">
      <PageTitle title="About" />
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Emi Shapiro, a family photographer based in Sacramento,
            California. What started as a passion has grown into a dream I'm now
            bringing to life—building my own photography business and capturing
            the profound connections between family members along the way.
          </p>
          <p>
            I specialize in newborn, family, and motherhood photography—focusing
            on those tender moments of love and connection that define our most
            cherished relationships. Since having my own baby, I've been
            documenting every precious milestone of my little one's journey,
            discovering the indescribable joy of freezing time to create lasting
            memories that speak directly to the heart. This personal experience
            has deepened my appreciation for preserving these fleeting moments
            for other families.
          </p>
          <p>
            My approach is relaxed and natural, helping you feel at ease so we
            can create timeless images that authentically reflect the bonds you
            share. I believe in capturing not just how you look, but how you
            feel when you're together.
          </p>
          <p>
            When I am not behind the lens, I am usually spending time with my
            own family, or planning our next travel adventure. Let's create
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
