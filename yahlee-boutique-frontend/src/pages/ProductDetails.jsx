import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useProduct } from "../hooks/useProducts";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ textAlign: "center", padding: "100px 20px", color: "#76675f" }}>
          <p>Loading product…</p>
        </div>
        <Footer />
      </>
    );
  }
  if (!product) {
    return (
      <>
        <Header />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2>Product not found</h2>
          <p style={{ margin: "15px 0 25px", color: "#76675f" }}>
            The product you are looking for is not available.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

const handleAddToCart = () => {
  if (!selectedSize && product.sizes && product.sizes.length > 1) {
    alert("Please select a size");
    return;
  }
  setAdded(true);
  setTimeout(() => setAdded(false), 2000);
};

const discount =
  product.oldPrice && product.oldPrice > product.price
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

return (
  <>
    <Header />

    <main>
      <div className="container" style={{ padding: "40px 20px" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "28px",
            fontSize: "13px",
            color: "#76675f",
          }}
        >
          <Link to="/" style={{ color: "#8a6830" }}>Home</Link>
          <span>›</span>
          <Link
            to={`/${product.category?.toLowerCase()}`}
            style={{ color: "#8a6830" }}
          >
            {product.category}
          </Link>
          <span>›</span>
          <span>{product.name}</span>
        </div>

        <div className="product-details-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "start",
        }}>
          {/* Image */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              background: "#f8f3eb",
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Details */}
          <div>
            {/* Category tag */}
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#8a6830",
                marginBottom: "10px",
              }}
            >
              {product.category}
              {product.subcategory && ` › ${product.subcategory}`}
            </div>

            {/* Product Name */}
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
                marginBottom: "15px",
                lineHeight: 1.3,
                color: "#2e1c15",
              }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "18px",
              }}
            >
              <div style={{ display: "flex", gap: "2px", color: "#b08a45" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.round(product.rating || 0) ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <span style={{ fontSize: "14px", color: "#76675f" }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#2e1c15",
                }}
              >
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && product.oldPrice > product.price && (
                <>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      textDecoration: "line-through",
                      color: "#999",
                    }}
                  >
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>

                  <span
                    style={{
                      color: "#49735a",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Badge */}
            {product.badge && (
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 12px",
                  background: "#4a2f24",
                  color: "#fff",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "20px",
                }}
              >
                {product.badge}
              </div>
            )}

            {/* Description */}
            <p
              style={{
                color: "#76675f",
                lineHeight: 1.7,
                marginBottom: "25px",
              }}
            >
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#4a2f24",
                  }}
                >
                  Available Colors
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      style={{
                        padding: "6px 14px",
                        border: "1px solid #e3d8ca",
                        borderRadius: "20px",
                        fontSize: "13px",
                        color: "#4a2f24",
                      }}
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div style={{ marginBottom: "25px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#4a2f24",
                  }}
                >
                  Select Size:{" "}
                  {selectedSize && (
                    <span style={{ color: "#b08a45" }}>{selectedSize}</span>
                  )}
                </div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: "9px 16px",
                        border: `2px solid ${selectedSize === size ? "#b08a45" : "#e3d8ca"
                          }`,
                        borderRadius: "5px",
                        background:
                          selectedSize === size
                            ? "rgba(176,138,69,0.08)"
                            : "transparent",
                        color: selectedSize === size ? "#8a6830" : "#4a2f24",
                        fontWeight: 600,
                        fontSize: "13px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "25px",
              }}
            >
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#4a2f24" }}>
                Quantity:
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e3d8ca",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{
                    padding: "8px 14px",
                    border: 0,
                    background: "#f8f3eb",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                >
                  −
                </button>

                <span
                  style={{
                    padding: "8px 20px",
                    fontWeight: 700,
                    borderLeft: "1px solid #e3d8ca",
                    borderRight: "1px solid #e3d8ca",
                  }}
                >
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  style={{
                    padding: "8px 14px",
                    border: 0,
                    background: "#f8f3eb",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "25px",
              }}
            >
              <button
                id="add-to-cart-btn"
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={17} />
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <button
                className="btn btn-outline"
                onClick={() => setWishlisted(!wishlisted)}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  size={18}
                  fill={wishlisted ? "currentColor" : "none"}
                  color={wishlisted ? "#a64b43" : "currentColor"}
                />
              </button>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                background: "#f8f3eb",
                borderRadius: "10px",
                border: "1px solid #e3d8ca",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#4a2f24" }}>
                <Truck size={18} color="#8a6830" />
                Free shipping on orders above ₹2,999
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#4a2f24" }}>
                <RotateCcw size={18} color="#8a6830" />
                Easy 7-day returns & exchanges
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#4a2f24" }}>
                <ShieldCheck size={18} color="#8a6830" />
                Secure payment – UPI, Cards, COD
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </>
  );
};

export default ProductDetails;
