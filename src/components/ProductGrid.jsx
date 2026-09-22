import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products = [],
  title,
  emptyMessage = "No products found.",
}) => {
  const [wishlist, setWishlist] = useState([]);

  // Make sure products is always an array
  const productList = Array.isArray(products) ? products : [];

  // Add/remove product from wishlist
  const handleWishlist = (product) => {
    if (!product?.id) return;

    setWishlist((current) => {
      const exists = current.includes(product.id);

      if (exists) {
        return current.filter((id) => id !== product.id);
      }

      return [...current, product.id];
    });
  };

  return (
    <section className="section">
      <div className="container">
        {/* Section Heading */}
        {title && (
          <div className="section-heading">
            <h2>{title}</h2>
          </div>
        )}

        {/* Products */}
        {productList.length > 0 ? (
          <div className="product-grid">
            {productList.map((product) => {
              // Skip invalid product objects
              if (!product || !product.id) {
                return null;
              }

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWishlist={handleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                />
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="empty-state">
            <h2>No Products Found</h2>
            <p>{emptyMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;