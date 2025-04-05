import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Emi Shapiro Photography Studio</h1>
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
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faqs" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
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
