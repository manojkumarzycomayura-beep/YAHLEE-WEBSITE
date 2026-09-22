import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const MobileMenu = ({ open, onClose }) => {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>

      {/* Close */}
      <button
        onClick={onClose}
        className="header-icon"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        aria-label="Close menu"
      >
        <X size={25} />
      </button>

      {/* Logo */}
      <Link
        to="/"
        onClick={onClose}
        style={{
          display: "inline-block",
          marginBottom: "25px",
        }}
        aria-label="YAHLEE Boutique Home"
      >
        <img
          src="/images/logo.jpg"
          alt="YAHLEE Salon & Boutique"
          style={{
            height: "65px",
            width: "auto",
            mixBlendMode: "multiply",
            display: "block",
          }}
        />
      </Link>

      {/* Links */}
      <nav className="mobile-menu-links">

        <Link to="/" onClick={onClose}>
          Home
        </Link>

        <Link to="/women" onClick={onClose}>
          Women
        </Link>

        <Link to="/men" onClick={onClose}>
          Men
        </Link>

        <Link to="/boys" onClick={onClose}>
          Boys
        </Link>

        <Link to="/girls" onClick={onClose}>
          Girls
        </Link>

        <Link to="/accessories" onClick={onClose}>
          Accessories
        </Link>

        <Link to="/collections" onClick={onClose}>
          Collections
        </Link>

        <Link to="/our-story" onClick={onClose}>
          Our Story
        </Link>

        <Link to="/contact" onClick={onClose}>
          Contact
        </Link>

        <Link to="/faq" onClick={onClose}>
          FAQs
        </Link>

        <Link to="/account" onClick={onClose}>
          My Account
        </Link>

      </nav>

      {/* Mobile Social & Email Strip */}
      <div
        style={{
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "var(--gold-dark)", textTransform: "uppercase", marginBottom: "12px" }}>
          Connect With Us
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href="https://www.instagram.com/yahlee_boutique"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--brown-dark)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@yahleeboutique"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--brown-dark)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
            </svg>
            <span>YouTube</span>
          </a>
          <a
            href="mailto:hello@yahlee.com"
            style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--brown-dark)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>hello@yahlee.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
