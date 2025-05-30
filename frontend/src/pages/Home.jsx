import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css";
import PageTitle from "../components/PageTitle";

const Home = () => {
  return (
    <div className="home-page">
      <PageTitle title="Home" />
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
              src="/assets/CD-004.jpg"
              alt="Mom and her baby"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/CP-001.jpg"
              alt="Mom and dad gaze"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/LP-001.jpg"
              alt="Family in Land Park walking by the water"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/PM-003.jpg"
              alt="Dad, his kid, and a horse"
            />
          </div>

          <div>
            <img
              className="carousel-image"
              src="/assets/LP-003.jpg"
              alt="Family of 3 walks in Land Park"
            />
          </div>

          <div>
            <img
              className="carousel-image"
              src="/assets/PM-004.jpg"
              alt="Mom and dad on bench"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src="/assets/CD-001.jpg"
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
          <img src="/assets/about.jpg" alt="About Polaroid" />
          <div className="polaroid-label">About</div>
        </Link>
        <Link to="/portfolio" className="polaroid-tile">
          <img src="/assets/CD-002.jpg" alt="Portfolio Polaroid" />
          <div className="polaroid-label">Portfolio</div>
        </Link>
        <Link to="/testimonials" className="polaroid-tile">
          <img src="/assets/PM-002.jpg" alt="Testimonials Polaroid" />
          <div className="polaroid-label">Testimonials</div>
        </Link>
        <Link to="/pricing" className="polaroid-tile">
          <img src="/assets/emi-pricing-photo.jpg" alt="Pricing Polaroid" />
          <div className="polaroid-label">Pricing</div>
        </Link>
        {/* <Link
          to="https://www.instagram.com/emishapiro_photography"
          className="polaroid-tile"
        >
          <img src="/assets/Emi-Camera.jpg" alt="InstaPolaroid" />
          <div className="polaroid-label">Instagram</div>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
