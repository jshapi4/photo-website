// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Photography Studio</h3>
          <p>Capturing moments that last a lifetime.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <address>
            <p>123 Photo Lane</p>
            <p>Sacramento, CA</p>
            <p>
              <a href="mailto:casas.mariaemilia@gmail.com">
                casas.mariaemilia@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+703-203-4435">(703) 203-4435</a>
            </p>
          </address>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Emi Shapiro Photography Studio. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
