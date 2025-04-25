import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    // Close the menu if we're not already on the home page
    if (location.pathname !== "/") {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" ref={logoRef} onClick={handleLogoClick}>
          <img
            className="logo-image"
            src="/assets/Emi_Shapiro_Logo.PNG"
            alt="Emi Shapiro logo"
          />
          <h1>Emi Shapiro Photography</h1>
        </Link>

        <button
          className="mobile-menu-btn"
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`} ref={navRef}>
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
            <li>
              <Link
                to="/testimonials"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/testimonials" ? "active-link" : ""
                }
              >
                Testimonials
              </Link>
            </li>
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
