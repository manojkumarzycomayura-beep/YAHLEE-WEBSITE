import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FamilyLookCard = ({
  image,
  title = "Together in Tradition",
  description = "Beautiful coordinated styles for every generation.",
  link = "/collections",
}) => {
  return (
    <div className="family-look-card">
      <div
        className="family-look-image"
        style={{
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        className="family-look-content"
        style={{
          padding: "20px 5px",
        }}
      >
        <h3>{title}</h3>

        <p style={{ margin: "10px 0 15px" }}>{description}</p>

        <Link
          to={link}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            color: "#8a6830",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Shop Family Looks
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default FamilyLookCard;
