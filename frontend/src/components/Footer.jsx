import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="social-links">
          <a
            href="https://www.instagram.com/emiliashapiro_photography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:casas.mariaemilia@gmail.com"
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
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Emilia Shapiro Photography. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
