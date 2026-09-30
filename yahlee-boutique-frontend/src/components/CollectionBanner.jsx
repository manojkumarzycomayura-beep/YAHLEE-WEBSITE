import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CollectionBanner.css";

const CollectionBanner = ({
  image,
  title = "The Festive Edit",
  description = "Celebrate every beautiful moment in timeless ethnic styles.",
  buttonText = "Explore Collection",
  link = "/collections",
}) => {
  return (
    <section
      className="collection-banner"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="collection-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <Link to={link} className="btn btn-light">
          {buttonText}
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
};

export default CollectionBanner;
