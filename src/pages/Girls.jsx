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

const girlsProducts = [
    {
        id: 301,
        name: "Princess Floral Anarkali",
        category: "Anarkalis",
        price: 1899,
        oldPrice: 2399,
        rating: 4.9,
        reviews: 86,
        image: "/images/girls/floral-anarkali.jpg",
        badge: "Bestseller",
    },
    {
        id: 302,
        name: "Festive Lehenga Choli",
        category: "Lehengas",
        price: 2499,
        oldPrice: 3199,
        rating: 4.8,
        reviews: 72,
        image: "/images/girls/festive-lehenga.jpg",
        badge: "New",
    },
    {
        id: 303,
        name: "Embroidered Kurta Set",
        category: "Kurta Sets",
        price: 1599,
        oldPrice: 1999,
        rating: 4.7,
        reviews: 64,
        image: "/images/girls/embroidered-kurta-set.jpg",
        badge: "Popular",
    },
    {
        id: 304,
        name: "Traditional Silk Pattu Dress",
        category: "Traditional",
        price: 2299,
        oldPrice: 2899,
        rating: 4.9,
        reviews: 91,
        image: "/images/girls/pattu-dress.jpg",
        badge: "Premium",
    },
    {
        id: 305,
        name: "Pastel Party Dress",
        category: "Party Wear",
        price: 1799,
        oldPrice: 2299,
        rating: 4.6,
        reviews: 48,
        image: "/images/girls/pastel-party-dress.jpg",
    },
    {
        id: 306,
        name: "Cotton Printed Dress",
        category: "Dresses",
        price: 1299,
        oldPrice: 1699,
        rating: 4.7,
        reviews: 57,
        image: "/images/girls/cotton-printed-dress.jpg",
    },
    {
        id: 307,
        name: "Royal Wedding Lehenga",
        category: "Lehengas",
        price: 2999,
        oldPrice: 3799,
        rating: 4.9,
        reviews: 63,
        image: "/images/girls/wedding-lehenga.jpg",
        badge: "Wedding Edit",
    },
    {
        id: 308,
        name: "Elegant Mirror Work Set",
        category: "Kurta Sets",
        price: 1999,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 52,
        image: "/images/girls/mirror-work-set.jpg",
    },
];

const categories = [
    "All",
    "Anarkalis",
    "Lehengas",
    "Kurta Sets",
    "Traditional",
    "Party Wear",
    "Dresses",
];

function Girls() {
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
                ? [...girlsProducts]
                : girlsProducts.filter(
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

            <main className="girls-page">

                {/* =====================================================
            HERO
        ====================================================== */}
                <section className="girls-hero">
                    <img
                        src="/images/girls/girls-hero.jpg"
                        alt="YAHLEE girls ethnic fashion collection"
                        className="girls-hero-image"
                    />

                    <div className="girls-hero-overlay"></div>

                    <div className="girls-hero-content">
                        <span className="girls-eyebrow">
                            THE LITTLE PRINCESS EDIT
                        </span>

                        <h1>
                            Little Moments,
                            <br />
                            <span>Beautifully Dressed</span>
                        </h1>

                        <p>
                            Joyful ethnic styles designed for little
                            celebrations, big occasions and everything
                            in between.
                        </p>

                        <Link
                            to="#girls-products"
                            className="girls-primary-btn"
                        >
                            Shop Girls' Collection
                        </Link>
                    </div>

                    <div className="girls-hero-scroll">
                        <span></span>
                        <p>Scroll to explore</p>
                    </div>
                </section>

                {/* =====================================================
            INTRO
        ====================================================== */}
                <section className="girls-intro">
                    <div className="girls-intro-content">
                        <span className="section-eyebrow">
                            YAHLEE GIRLS
                        </span>

                        <h2>
                            Childhood,
                            <br />
                            <span>Dressed in Tradition</span>
                        </h2>

                        <p>
                            From first festivals to family weddings, our girls'
                            collection brings together playful charm and timeless
                            Indian craftsmanship.
                        </p>

                        <p>
                            Designed with beautiful colours, comfortable fabrics
                            and thoughtful details, every outfit is made for
                            little girls to feel special.
                        </p>
                    </div>

                    <div className="girls-intro-image">
                        <img
                            src="/images/girls/girls-intro.jpg"
                            alt="Girl wearing YAHLEE traditional outfit"
                        />
                    </div>
                </section>

                {/* =====================================================
            CATEGORY NAVIGATION
        ====================================================== */}
                <section className="girls-category-section">
                    <div className="girls-category-wrapper">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`girls-category-btn ${selectedCategory === category ? "active" : ""
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* =====================================================
            PRODUCTS
        ====================================================== */}
                <section
                    className="girls-products-section"
                    id="girls-products"
                >
                    <div className="girls-products-header">
                        <div>
                            <span className="section-eyebrow">
                                SHOP GIRLS
                            </span>

                            <h2>
                                Girls' <span>Collection</span>
                            </h2>

                            <p>
                                {filteredProducts.length}{" "}
                                {filteredProducts.length === 1
                                    ? "product"
                                    : "products"}
                            </p>
                        </div>

                        <div className="girls-controls">
                            <button
                                className="girls-filter-button"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={18} />
                                Filters
                            </button>

                            <div className="girls-sort-wrapper">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="girls-sort-select"
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
                                    className="girls-sort-icon"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter */}
                    {showFilters && (
                        <div className="girls-filter-panel">
                            <h3>Filter by Category</h3>

                            <div className="girls-filter-options">
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

                    {/* Product Grid */}
                    <div className="girls-product-grid">
                        {filteredProducts.map((product) => (
                            <article
                                className="girls-product-card"
                                key={product.id}
                            >
                                <div className="girls-product-image-wrapper">
                                    <Link to={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="girls-product-image"
                                        />
                                    </Link>

                                    {product.badge && (
                                        <span className="girls-product-badge">
                                            {product.badge}
                                        </span>
                                    )}

                                    <button
                                        className={`girls-wishlist-button ${wishlist.includes(product.id)
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
                                        className="girls-quick-shop"
                                    >
                                        <ShoppingBag size={16} />
                                        Quick Shop
                                    </Link>
                                </div>

                                <div className="girls-product-info">
                                    <span className="girls-product-category">
                                        {product.category}
                                    </span>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="girls-product-name"
                                    >
                                        {product.name}
                                    </Link>

                                    <div className="girls-product-rating">
                                        <Star
                                            size={14}
                                            fill="currentColor"
                                        />

                                        <span>{product.rating}</span>

                                        <span className="girls-review-count">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <div className="girls-product-price">
                                        <span className="girls-current-price">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </span>

                                        {product.oldPrice && (
                                            <span className="girls-old-price">
                                                ₹
                                                {product.oldPrice.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* =====================================================
            FESTIVE BANNER
        ====================================================== */}
                <section className="girls-feature-banner">
                    <img
                        src="/images/girls/girls-collection-banner.jpg"
                        alt="YAHLEE girls festive collection"
                    />

                    <div className="girls-feature-overlay"></div>

                    <div className="girls-feature-content">
                        <span>THE FESTIVE EDIT</span>

                        <h2>
                            Little Stars,
                            <br />
                            <strong>Big Celebrations</strong>
                        </h2>

                        <p>
                            Beautiful festive outfits made for twirling,
                            smiling and making memories.
                        </p>

                        <Link
                            to="/collections/festive"
                            className="girls-secondary-btn"
                        >
                            Explore Festive Collection
                        </Link>
                    </div>
                </section>

                {/* =====================================================
            SHOP BY OCCASION
        ====================================================== */}
                <section className="girls-occasion-section">
                    <div className="girls-section-heading">
                        <span className="section-eyebrow">
                            STYLE GUIDE
                        </span>

                        <h2>
                            Shop by <span>Occasion</span>
                        </h2>

                        <p>
                            Find something special for every little celebration.
                        </p>
                    </div>

                    <div className="girls-occasion-grid">

                        <Link
                            to="/collections/wedding"
                            className="girls-occasion-card"
                        >
                            <img
                                src="/images/girls/wedding-wear.jpg"
                                alt="Girls wedding wear"
                            />

                            <div className="girls-occasion-overlay"></div>

                            <div className="girls-occasion-content">
                                <span>01</span>

                                <h3>Wedding Wear</h3>

                                <p>
                                    Dreamy looks for special family celebrations.
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/festive"
                            className="girls-occasion-card"
                        >
                            <img
                                src="/images/girls/festive-wear.jpg"
                                alt="Girls festive wear"
                            />

                            <div className="girls-occasion-overlay"></div>

                            <div className="girls-occasion-content">
                                <span>02</span>

                                <h3>Festive Wear</h3>

                                <p>
                                    Colourful styles for joyful celebrations.
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/everyday"
                            className="girls-occasion-card"
                        >
                            <img
                                src="/images/girls/everyday-wear.jpg"
                                alt="Girls everyday ethnic wear"
                            />

                            <div className="girls-occasion-overlay"></div>

                            <div className="girls-occasion-content">
                                <span>03</span>

                                <h3>Everyday Ethnic</h3>

                                <p>
                                    Comfortable traditional styles for every day.
                                </p>
                            </div>
                        </Link>

                    </div>
                </section>

                {/* =====================================================
            FAMILY LOOK
        ====================================================== */}
                <section className="girls-family-section">
                    <div className="girls-family-image">
                        <img
                            src="/images/girls/family-girls.jpg"
                            alt="YAHLEE family collection"
                        />
                    </div>

                    <div className="girls-family-content">
                        <span className="section-eyebrow">
                            TOGETHER IN STYLE
                        </span>

                        <h2>
                            Matching Moments
                            <br />
                            <span>Made for Family</span>
                        </h2>

                        <p>
                            Create beautiful family memories with coordinated
                            ethnic styles designed to complement every member
                            of the family.
                        </p>

                        <Link
                            to="/collections/family"
                            className="girls-dark-btn"
                        >
                            Explore Family Collection
                            <ChevronDown
                                size={17}
                                className="rotate-arrow"
                            />
                        </Link>
                    </div>
                </section>

                {/* =====================================================
            BENEFITS
        ====================================================== */}
                <section className="girls-benefits">
                    <div className="girls-benefit-item">
                        <div className="girls-benefit-number">01</div>

                        <h3>Comfort First</h3>

                        <p>
                            Soft, comfortable fabrics designed for active
                            little ones.
                        </p>
                    </div>

                    <div className="girls-benefit-item">
                        <div className="girls-benefit-number">02</div>

                        <h3>Beautiful Details</h3>

                        <p>
                            Delicate embroidery, prints and traditional
                            craftsmanship.
                        </p>
                    </div>

                    <div className="girls-benefit-item">
                        <div className="girls-benefit-number">03</div>

                        <h3>Celebration Ready</h3>

                        <p>
                            Styles made for festivals, weddings and family
                            occasions.
                        </p>
                    </div>

                    <div className="girls-benefit-item">
                        <div className="girls-benefit-number">04</div>

                        <h3>Made to Remember</h3>

                        <p>
                            Outfits created to become part of childhood
                            memories.
                        </p>
                    </div>
                </section>

                {/* =====================================================
            CTA
        ====================================================== */}
                <section className="girls-final-cta">
                    <span className="section-eyebrow">
                        LITTLE DETAILS. BIG MEMORIES.
                    </span>

                    <h2>
                        Dress Her
                        <br />
                        <span>Dreams</span>
                    </h2>

                    <p>
                        Discover beautiful ethnic styles made for every
                        little celebration.
                    </p>

                    <Link
                        to="/collections"
                        className="girls-primary-btn"
                    >
                        Shop All Collections
                    </Link>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Girls;
