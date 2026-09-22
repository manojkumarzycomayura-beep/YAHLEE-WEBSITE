import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Inline SVG components for Instagram and YouTube for guaranteed pixel-perfect rendering
const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <Link
              to="/"
              className="footer-logo-card"
              aria-label="YAHLEE Boutique Home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                padding: "6px 14px",
                borderRadius: "8px",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
                textDecoration: "none",
              }}
            >
              <img
                src="/images/logo.jpg"
                alt="YAHLEE Salon & Boutique"
                className="footer-logo-img"
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>

            <p style={{ marginTop: "16px", maxWidth: "330px", lineHeight: "1.6" }}>
              Timeless ethnic fashion crafted for modern families,
              celebrations and everyday moments.
            </p>

            {/* Social & Contact Links */}
            <div className="footer-social-wrapper" style={{ marginTop: "22px" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  marginBottom: "10px",
                }}
              >
                Follow & Connect
              </span>

              <div className="footer-social-links-list">
                <a
                  href="https://www.instagram.com/yahlee_boutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-badge instagram"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.youtube.com/@yahleeboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-badge youtube"
                  aria-label="Subscribe on YouTube"
                >
                  <YoutubeIcon size={18} />
                  <span>YouTube</span>
                </a>

                <a
                  href="mailto:hello@yahlee.com"
                  className="footer-social-badge mail"
                  aria-label="Email Us"
                >
                  <Mail size={18} />
                  <span>hello@yahlee.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4>Shop</h4>

            <div className="footer-links">
              <Link to="/women">Women</Link>
              <Link to="/men">Men</Link>
              <Link to="/boys">Boys</Link>
              <Link to="/girls">Girls</Link>
              <Link to="/accessories">Accessories</Link>
              <Link to="/collections">Collections</Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4>Information</h4>

            <div className="footer-links">
              <Link to="/our-story">Our Story</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQs</Link>
              <Link to="/account">My Account</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/cart">Shopping Cart</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>

            <div className="footer-links">
              <span
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <MapPin size={16} />
                <span>India</span>
              </span>

              <a
                href="tel:+919999999999"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Phone size={16} />
                +91 99999 99999
              </a>

              <a
                href="mailto:hello@yahlee.com"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Mail size={16} />
                hello@yahlee.com
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} YAHLEE Salon & Boutique. All Rights Reserved.
          </p>
          <div className="footer-bottom-social-bar">
            <a
              href="https://www.instagram.com/yahlee_boutique"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom-social-link"
            >
              <InstagramIcon size={15} />
              <span>Instagram</span>
            </a>
            <span className="dot-sep">•</span>
            <a
              href="https://www.youtube.com/@yahleeboutique"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom-social-link"
            >
              <YoutubeIcon size={15} />
              <span>YouTube</span>
            </a>
            <span className="dot-sep">•</span>
            <a
              href="mailto:hello@yahlee.com"
              className="footer-bottom-social-link"
            >
              <Mail size={15} />
              <span>hello@yahlee.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;