import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ title, image, link = "#", description }) => {
  return (
    <Link to={link} className="category-card">
      <img src={image} alt={title} />

      <div className="category-card-overlay">
        <div>
          <h3>{title}</h3>

          {description && <p>{description}</p>}

          <span className="category-card-cta">
            Explore <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
