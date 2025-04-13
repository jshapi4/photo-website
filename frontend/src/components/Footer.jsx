import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="social-links">
          <a
            href="https://www.instagram.com/emishapiro_photography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:emishapirophotography@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Emi Shapiro Photography. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
