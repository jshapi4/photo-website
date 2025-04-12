import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={1000}
          dynamicHeight={true}
          emulateTouch
        >
          <div>
            <img
              className="carousel-image"
              src="/assets/dad-kid-horse-1.jpg"
              alt="Dad, his kid, and a horse"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/mom-and-baby-1.jpg"
              alt="Mom and her baby"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/fam-in-woods.jpg"
              alt="Family in the woods"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/boy-on-toes-reaching.jpg"
              alt="Boy on toes reaching towards plant"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/baby-smiling-on-moms-lap.jpg"
              alt="Baby on mom's lap"
            />
          </div>
        </Carousel>
      </div>

      {/* Intro Text */}
      <div className="home-intro">
        <h2>Capturing the heart of your family</h2>
        <p>
          Whether it's your newborn's sleepy smile, the joy of toddlers at play,
          or the glow of motherhood, I'm here to preserve those fleeting
          moments. Every photo is a story—and I'd be honored to tell yours.
        </p>
      </div>

      {/* Section Tiles */}
      <div className="polaroid-section">
        <Link to="/about" className="polaroid-tile">
          <img src="/images/about.jpg" alt="About Polaroid" />
          <div className="polaroid-label">About</div>
        </Link>
        <Link to="/portfolio" className="polaroid-tile">
          <img src="/assets/baby-boy-and-bubble.jpg" alt="Portfolio Polaroid" />
          <div className="polaroid-label">Portfolio</div>
        </Link>
        <Link to="/testimonials" className="polaroid-tile">
          <img
            src="/assets/dad-and-kid-on-shoulders.jpg"
            alt="Testimonials Polaroid"
          />
          <div className="polaroid-label">Testimonials</div>
        </Link>
        <Link to="/pricing" className="polaroid-tile">
          <img src="/assets/emi-pricing-photo.jpg" alt="Pricing Polaroid" />
          <div className="polaroid-label">Pricing</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
