import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingBag } from "lucide-react";
import "./ProductCard.css";

const ProductCard = ({
  product,
  onWishlist,
  isWishlisted = false,
}) => {
  if (!product) {
    return null;
  }

  return (
    <article className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name || "YAHLEE product"}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </Link>

        {/* Product Badge */}
        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          className="wishlist-btn"
          onClick={() => {
            if (onWishlist) {
              onWishlist(product);
            }
          }}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="product-info">
        {/* Category */}
        {product.category && (
          <p className="product-category">
            {product.category}
          </p>
        )}

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">
            {product.name || "Product"}
          </h3>
        </Link>

        {/* Rating */}
        <div className="product-rating">
          <Star
            size={14}
            fill="#b08a45"
            color="#b08a45"
          />

          <span>
            {product.rating ?? "4.8"}
          </span>

          {product.reviews !== undefined && (
            <span style={{ color: "#999" }}>
              ({product.reviews})
            </span>
          )}
        </div>

        {/* Price */}
        <div className="product-price">
          ₹{Number(product.price || 0).toLocaleString("en-IN")}

          {product.oldPrice && (
            <span className="old-price">
              ₹{Number(product.oldPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* View Product Button */}
        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline product-view-btn"
        >
          <ShoppingBag size={15} />
          <span>View Product</span>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;