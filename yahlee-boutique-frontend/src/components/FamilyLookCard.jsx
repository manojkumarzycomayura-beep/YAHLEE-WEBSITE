import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./FamilyLookCard.css";

const FamilyLookCard = ({
  image,
  title = "Together in Tradition",
  description = "Beautiful coordinated styles for every generation.",
  link = "/collections",
}) => {
  return (
    <div className="family-look-card">
      <div className="family-look-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="family-look-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          to={link}
          className="family-look-link"
        >
          <span>Shop Family Looks</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default FamilyLookCard;
