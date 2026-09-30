import React from "react";
import { Star, Quote } from "lucide-react";
import "./ReviewCard.css";

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
        className="review-quote-icon"
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

      <div className="review-footer">
        <span className="review-author">
          {name}
        </span>

        {date && (
          <span className="review-date">
            {date}
          </span>
        )}
      </div>

    </article>
  );
};

export default ReviewCard;