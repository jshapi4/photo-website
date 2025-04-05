import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";

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
          dynamicHeight={false}
          emulateTouch
        >
          <div>
            <img
              className="carousel-image"
              src="/images/carousel1.jpg"
              alt="Family moment"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/images/carousel2.jpg"
              alt="Newborn snuggles"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/images/carousel3.jpg"
              alt="Maternity glow"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/images/carousel4.jpg"
              alt="Joyful toddlers"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/images/carousel5.jpg"
              alt="Quiet cuddles"
            />
          </div>
        </Carousel>
      </div>

      {/* Intro Text */}
      <div className="home-intro">
        <h1>Capturing the heart of your family</h1>
        <p>
          Whether it's your newborn's sleepy smile, the joy of toddlers at play,
          or the tender glow of motherhood, I'm here to preserve those fleeting
          moments. Every photo is a story—and I'd be honored to tell yours.
        </p>
      </div>

      {/* Section Tiles */}
      <div className="polaroid-section">
        <Link to="/about" className="polaroid-tile">
          <img src="/images/about.jpg" alt="About" />
          <div className="polaroid-label">About</div>
        </Link>
        <Link to="/portfolio" className="polaroid-tile">
          <img src="/images/portfolio.jpg" alt="Portfolio" />
          <div className="polaroid-label">Portfolio</div>
        </Link>
        <Link to="/testimonials" className="polaroid-tile">
          <img src="/images/testimonials.jpg" alt="Testimonials" />
          <div className="polaroid-label">Testimonials</div>
        </Link>
        <Link to="/pricing" className="polaroid-tile">
          <img src="/images/pricing.jpg" alt="Pricing" />
          <div className="polaroid-label">Pricing</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
