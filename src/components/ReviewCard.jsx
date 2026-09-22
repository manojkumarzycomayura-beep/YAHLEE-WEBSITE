import React from "react";
import { Star, Quote } from "lucide-react";

const ReviewCard = ({
  name = "YAHLEE Customer",
  rating = 5,
  review = "Beautiful quality and elegant design. I absolutely loved my purchase.",
  date,
}) => {
  return (
    <article className="review-card">

      <Quote
        size={25}
        style={{
          color: "#b08a45",
          marginBottom: "15px",
        }}
      />

      <div className="review-stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill={index < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      <p>
        “{review}”
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span className="review-author">
          {name}
        </span>

        {date && (
          <span
            style={{
              color: "#999",
              fontSize: "12px",
            }}
          >
            {date}
          </span>
        )}
      </div>

    </article>
  );
};

export default ReviewCard;