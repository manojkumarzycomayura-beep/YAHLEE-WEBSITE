import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./HeroBanner.css";

const HeroBanner = ({
  image = "/images/hero/hero-main.jpg",
  title = "Tradition, Beautifully Reimagined",
  description = "Discover timeless ethnic fashion designed for every generation and every celebration.",
  primaryButton = "Shop Collection",
  primaryLink = "/collections",
  secondaryButton = "Explore Women",
  secondaryLink = "/women",
}) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-content">

        <h1>{title}</h1>

        <p>{description}</p>

        <div className="hero-buttons">

          <Link to={primaryLink} className="btn btn-gold">
            {primaryButton}
            <ArrowRight size={17} />
          </Link>

          <Link to={secondaryLink} className="btn btn-light">
            {secondaryButton}
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
