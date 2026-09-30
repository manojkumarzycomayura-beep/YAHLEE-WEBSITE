import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import "./CategoryPages.css";

const Category = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

  let filteredProducts = Array.isArray(products) ? products : [];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (type) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category?.toLowerCase() === type.toLowerCase()
    );
  }

  return (
    <>
      <Header />

      <main className="page-container">
        <section className="page-hero">
          <div className="page-hero-content">
            <p className="eyebrow">YAHLEE COLLECTION</p>

            <h1>
              {search
                ? `Search Results for "${search}"`
                : type
                  ? type.charAt(0).toUpperCase() + type.slice(1)
                  : "Shop All"}
            </h1>

            <p>
              Discover timeless ethnic styles crafted for every beautiful
              occasion.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">

            <div className="category-links">
              <Link to="/category">All</Link>
              <Link to="/women">Women</Link>
              <Link to="/men">Men</Link>
              <Link to="/boys">Boys</Link>
              <Link to="/girls">Girls</Link>
              <Link to="/accessories">Accessories</Link>
            </div>

            <ProductGrid
              products={filteredProducts}
              title={
                search
                  ? "Search Results"
                  : type
                    ? `${type} Collection`
                    : "All Products"
              }
            />

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Category;