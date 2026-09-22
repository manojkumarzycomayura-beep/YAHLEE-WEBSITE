import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, image, link = "#", description }) => {
  return (
    <Link to={link} className="category-card">
      <img src={image} alt={title} />

      <div className="category-card-overlay">
        <div>
          <h3>{title}</h3>

          {description && <p>{description}</p>}

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "8px",
              color: "#d1b273",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            Explore <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
