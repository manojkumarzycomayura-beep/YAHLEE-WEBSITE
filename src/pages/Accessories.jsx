import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    Heart,
    SlidersHorizontal,
    ChevronDown,
    ShoppingBag,
    Star,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const accessoriesProducts = [
    {
        id: 401,
        name: "Traditional Kundan Necklace",
        category: "Jewellery",
        price: 1299,
        oldPrice: 1699,
        rating: 4.9,
        reviews: 84,
        image: "/images/accessories/kundan-necklace.jpg",
        badge: "Bestseller",
    },
    {
        id: 402,
        name: "Embroidered Potli Bag",
        category: "Bags",
        price: 899,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 62,
        image: "/images/accessories/potli-bag.jpg",
        badge: "New",
    },
    {
        id: 403,
        name: "Pearl Drop Earrings",
        category: "Jewellery",
        price: 699,
        oldPrice: 999,
        rating: 4.8,
        reviews: 91,
        image: "/images/accessories/pearl-earrings.jpg",
        badge: "Popular",
    },
    {
        id: 404,
        name: "Silk Embroidered Dupatta",
        category: "Dupattas",
        price: 1499,
        oldPrice: 1999,
        rating: 4.8,
        reviews: 57,
        image: "/images/accessories/silk-dupatta.jpg",
        badge: "Premium",
    },
    {
        id: 405,
        name: "Traditional Jhumka Earrings",
        category: "Jewellery",
        price: 799,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 73,
        image: "/images/accessories/jhumka.jpg",
    },
    {
        id: 406,
        name: "Embroidered Clutch",
        category: "Bags",
        price: 999,
        oldPrice: 1399,
        rating: 4.6,
        reviews: 46,
        image: "/images/accessories/embroidered-clutch.jpg",
    },
    {
        id: 407,
        name: "Festive Hair Accessories",
        category: "Hair Accessories",
        price: 599,
        oldPrice: 799,
        rating: 4.7,
        reviews: 38,
        image: "/images/accessories/hair-accessories.jpg",
    },
    {
        id: 408,
        name: "Designer Silk Stole",
        category: "Stoles",
        price: 1199,
        oldPrice: 1599,
        rating: 4.8,
        reviews: 51,
        image: "/images/accessories/designer-stole.jpg",
    },
];

const categories = [
    "All",
    "Jewellery",
    "Bags",
    "Dupattas",
    "Hair Accessories",
    "Stoles",
];

function Accessories() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (id) => {
        setWishlist((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    };

    const filteredProducts = useMemo(() => {
        let products =
            selectedCategory === "All"
                ? [...accessoriesProducts]
                : accessoriesProducts.filter(
                    (product) => product.category === selectedCategory
                );

        if (sortBy === "price-low") {
            products.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "price-high") {
            products.sort((a, b) => b.price - a.price);
        }

        if (sortBy === "rating") {
            products.sort((a, b) => b.rating - a.rating);
        }

        if (sortBy === "newest") {
            products.sort((a, b) => b.id - a.id);
        }

        return products;
    }, [selectedCategory, sortBy]);

    return (
        <>
            <Header />

            <main className="accessories-page">

                {/* HERO */}
                <section className="accessories-hero">
                    <img
                        src="/images/accessories/accessories-hero.jpg"
                        alt="YAHLEE accessories collection"
                        className="accessories-hero-image"
                    />

                    <div className="accessories-hero-overlay"></div>

                    <div className="accessories-hero-content">
                        <span className="accessories-eyebrow">
                            THE FINISHING TOUCH
                        </span>

                        <h1>
                            Complete
                            <br />
                            <span>Your Look</span>
                        </h1>

                        <p>
                            Discover beautiful accessories that bring
                            elegance and personality to every outfit.
                        </p>

                        <Link
                            to="#accessories-products"
                            className="accessories-primary-btn"
                        >
                            Shop Accessories
                        </Link>
                    </div>
                </section>

                {/* INTRO */}
                <section className="accessories-intro">
                    <span className="section-eyebrow">
                        YAHLEE ACCESSORIES
                    </span>

                    <h2>
                        Little Details,
                        <br />
                        <span>Lasting Impressions</span>
                    </h2>

                    <p>
                        From statement jewellery to elegant bags and
                        beautifully crafted dupattas, discover the finishing
                        touches that make every YAHLEE outfit complete.
                    </p>
                </section>

                {/* CATEGORY NAV */}
                <section className="accessories-category-section">
                    <div className="accessories-category-wrapper">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`accessories-category-btn ${selectedCategory === category ? "active" : ""
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* PRODUCTS */}
                <section
                    className="accessories-products-section"
                    id="accessories-products"
                >
                    <div className="accessories-products-header">
                        <div>
                            <span className="section-eyebrow">
                                SHOP ACCESSORIES
                            </span>

                            <h2>
                                The <span>Collection</span>
                            </h2>

                            <p>
                                {filteredProducts.length} products
                            </p>
                        </div>

                        <div className="accessories-controls">
                            <button
                                className="accessories-filter-button"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={18} />
                                Filters
                            </button>

                            <div className="accessories-sort-wrapper">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="accessories-sort-select"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">
                                        Price: Low to High
                                    </option>
                                    <option value="price-high">
                                        Price: High to Low
                                    </option>
                                    <option value="rating">
                                        Highest Rated
                                    </option>
                                </select>

                                <ChevronDown
                                    size={16}
                                    className="accessories-sort-icon"
                                />
                            </div>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="accessories-filter-panel">
                            <h3>Filter by Category</h3>

                            <div className="accessories-filter-options">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={
                                            selectedCategory === category
                                                ? "selected"
                                                : ""
                                        }
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setShowFilters(false);
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="accessories-product-grid">
                        {filteredProducts.map((product) => (
                            <article
                                className="accessories-product-card"
                                key={product.id}
                            >
                                <div className="accessories-product-image-wrapper">
                                    <Link to={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="accessories-product-image"
                                        />
                                    </Link>

                                    {product.badge && (
                                        <span className="accessories-product-badge">
                                            {product.badge}
                                        </span>
                                    )}

                                    <button
                                        className={`accessories-wishlist-button ${wishlist.includes(product.id)
                                                ? "liked"
                                                : ""
                                            }`}
                                        onClick={() =>
                                            toggleWishlist(product.id)
                                        }
                                        aria-label="Add to wishlist"
                                    >
                                        <Heart
                                            size={19}
                                            fill={
                                                wishlist.includes(product.id)
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    </button>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="accessories-quick-shop"
                                    >
                                        <ShoppingBag size={16} />
                                        Quick Shop
                                    </Link>
                                </div>

                                <div className="accessories-product-info">
                                    <span className="accessories-product-category">
                                        {product.category}
                                    </span>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="accessories-product-name"
                                    >
                                        {product.name}
                                    </Link>

                                    <div className="accessories-product-rating">
                                        <Star
                                            size={14}
                                            fill="currentColor"
                                        />
                                        <span>{product.rating}</span>
                                        <span className="accessories-review-count">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <div className="accessories-product-price">
                                        <span>
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </span>

                                        <del>
                                            ₹{product.oldPrice.toLocaleString("en-IN")}
                                        </del>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* BANNER */}
                <section className="accessories-feature-banner">
                    <img
                        src="/images/accessories/accessories-banner.jpg"
                        alt="YAHLEE accessories"
                    />

                    <div className="accessories-feature-overlay"></div>

                    <div className="accessories-feature-content">
                        <span>THE DETAILS EDIT</span>

                        <h2>
                            Style Is
                            <br />
                            <strong>in the Details</strong>
                        </h2>

                        <p>
                            Elevate your ethnic wardrobe with thoughtfully
                            selected finishing touches.
                        </p>

                        <Link
                            to="/collections"
                            className="accessories-secondary-btn"
                        >
                            Explore Collections
                        </Link>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="accessories-benefits">
                    <div className="accessories-benefit-item">
                        <div>01</div>
                        <h3>Beautiful Craftsmanship</h3>
                        <p>
                            Thoughtfully designed details inspired by
                            Indian heritage.
                        </p>
                    </div>

                    <div className="accessories-benefit-item">
                        <div>02</div>
                        <h3>Versatile Styling</h3>
                        <p>
                            Pieces that complement both traditional and
                            contemporary looks.
                        </p>
                    </div>

                    <div className="accessories-benefit-item">
                        <div>03</div>
                        <h3>Perfect Gifts</h3>
                        <p>
                            Elegant accessories for birthdays,
                            weddings and celebrations.
                        </p>
                    </div>

                    <div className="accessories-benefit-item">
                        <div>04</div>
                        <h3>Every Occasion</h3>
                        <p>
                            Complete your look for everyday moments and
                            grand celebrations.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Accessories;
