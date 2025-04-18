import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            className="logo-image"
            src="/assets/Emi_Shapiro_Logo.PNG"
            alt="Emi Shapiro logo"
          />
          <h1>Emi Shapiro Photography</h1>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/portfolio" ? "active-link" : ""
                }
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to="/testimonials"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/testimonials" ? "active-link" : ""
                }
              >
                Testimonials
              </Link>
            </li> */}
            <li>
              <Link
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/pricing" ? "active-link" : ""
                }
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                onClick={() => setMenuOpen(false)}
                className={location.pathname === "/faqs" ? "active-link" : ""}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/contact" ? "active-link" : ""
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
