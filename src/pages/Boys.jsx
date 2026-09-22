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

const boysProducts = [
    {
        id: 501,
        name: "Classic White Kurta Set",
        category: "Kurta Sets",
        price: 1499,
        oldPrice: 1899,
        rating: 4.9,
        reviews: 82,
        image: "/images/boys/white-kurta-set.jpg",
        badge: "Bestseller",
    },
    {
        id: 502,
        name: "Festive Printed Kurta",
        category: "Kurtas",
        price: 1299,
        oldPrice: 1699,
        rating: 4.7,
        reviews: 63,
        image: "/images/boys/printed-kurta.jpg",
        badge: "New",
    },
    {
        id: 503,
        name: "Royal Blue Nehru Jacket Set",
        category: "Nehru Jackets",
        price: 1999,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 58,
        image: "/images/boys/blue-nehru-set.jpg",
        badge: "Popular",
    },
    {
        id: 504,
        name: "Traditional Silk Kurta",
        category: "Traditional",
        price: 1799,
        oldPrice: 2299,
        rating: 4.9,
        reviews: 71,
        image: "/images/boys/silk-kurta.jpg",
        badge: "Premium",
    },
    {
        id: 505,
        name: "Cotton Everyday Kurta",
        category: "Kurtas",
        price: 999,
        oldPrice: 1299,
        rating: 4.6,
        reviews: 44,
        image: "/images/boys/cotton-kurta.jpg",
    },
    {
        id: 506,
        name: "Festive Waistcoat Set",
        category: "Nehru Jackets",
        price: 1899,
        oldPrice: 2399,
        rating: 4.7,
        reviews: 49,
        image: "/images/boys/waistcoat-set.jpg",
    },
    {
        id: 507,
        name: "Wedding Sherwani Set",
        category: "Sherwanis",
        price: 2999,
        oldPrice: 3699,
        rating: 4.9,
        reviews: 55,
        image: "/images/boys/wedding-sherwani.jpg",
        badge: "Wedding Edit",
    },
    {
        id: 508,
        name: "Pastel Festive Kurta Set",
        category: "Kurta Sets",
        price: 1599,
        oldPrice: 1999,
        rating: 4.8,
        reviews: 67,
        image: "/images/boys/pastel-kurta-set.jpg",
    },
];

const categories = [
    "All",
    "Kurtas",
    "Kurta Sets",
    "Nehru Jackets",
    "Sherwanis",
    "Traditional",
];

function Boys() {
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
                ? [...boysProducts]
                : boysProducts.filter(
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

            <main className="boys-page">

                {/* HERO */}
                <section className="boys-hero">
                    <img
                        src="/images/boys/boys-hero.jpg"
                        alt="YAHLEE boys ethnic fashion collection"
                        className="boys-hero-image"
                    />

                    <div className="boys-hero-overlay"></div>

                    <div className="boys-hero-content">
                        <span className="boys-eyebrow">
                            THE LITTLE GENTLEMEN EDIT
                        </span>

                        <h1>
                            Little Men,
                            <br />
                            <span>Big Style</span>
                        </h1>

                        <p>
                            Comfortable and stylish ethnic wear designed
                            for little celebrations and special occasions.
                        </p>

                        <Link
                            to="#boys-products"
                            className="boys-primary-btn"
                        >
                            Shop Boys' Collection
                        </Link>
                    </div>
                </section>

                {/* INTRO */}
                <section className="boys-intro">
                    <div className="boys-intro-image">
                        <img
                            src="/images/boys/boys-intro.jpg"
                            alt="Boy wearing YAHLEE ethnic wear"
                        />
                    </div>

                    <div className="boys-intro-content">
                        <span className="section-eyebrow">
                            YAHLEE BOYS
                        </span>

                        <h2>
                            Tradition Made
                            <br />
                            <span>Comfortable</span>
                        </h2>

                        <p>
                            From family celebrations to festive mornings,
                            discover ethnic outfits designed for boys who
                            love to move, play and celebrate.
                        </p>

                        <p>
                            Comfortable fabrics, timeless colours and
                            thoughtful details make every YAHLEE outfit
                            celebration-ready.
                        </p>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="boys-category-section">
                    <div className="boys-category-wrapper">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`boys-category-btn ${selectedCategory === category ? "active" : ""
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
                    className="boys-products-section"
                    id="boys-products"
                >
                    <div className="boys-products-header">
                        <div>
                            <span className="section-eyebrow">
                                SHOP BOYS
                            </span>

                            <h2>
                                Boys' <span>Collection</span>
                            </h2>

                            <p>
                                {filteredProducts.length} products
                            </p>
                        </div>

                        <div className="boys-controls">
                            <button
                                className="boys-filter-button"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={18} />
                                Filters
                            </button>

                            <div className="boys-sort-wrapper">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="boys-sort-select"
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
                                    className="boys-sort-icon"
                                />
                            </div>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="boys-filter-panel">
                            <h3>Filter by Category</h3>

                            <div className="boys-filter-options">
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

                    <div className="boys-product-grid">
                        {filteredProducts.map((product) => (
                            <article
                                className="boys-product-card"
                                key={product.id}
                            >
                                <div className="boys-product-image-wrapper">
                                    <Link to={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="boys-product-image"
                                        />
                                    </Link>

                                    {product.badge && (
                                        <span className="boys-product-badge">
                                            {product.badge}
                                        </span>
                                    )}

                                    <button
                                        className={`boys-wishlist-button ${wishlist.includes(product.id)
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
                                        className="boys-quick-shop"
                                    >
                                        <ShoppingBag size={16} />
                                        Quick Shop
                                    </Link>
                                </div>

                                <div className="boys-product-info">
                                    <span className="boys-product-category">
                                        {product.category}
                                    </span>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="boys-product-name"
                                    >
                                        {product.name}
                                    </Link>

                                    <div className="boys-product-rating">
                                        <Star
                                            size={14}
                                            fill="currentColor"
                                        />

                                        <span>{product.rating}</span>

                                        <span className="boys-review-count">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <div className="boys-product-price">
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
                <section className="boys-feature-banner">
                    <img
                        src="/images/boys/boys-collection-banner.jpg"
                        alt="YAHLEE boys festive collection"
                    />

                    <div className="boys-feature-overlay"></div>

                    <div className="boys-feature-content">
                        <span>THE FESTIVE EDIT</span>

                        <h2>
                            Little Traditions,
                            <br />
                            <strong>Beautiful Memories</strong>
                        </h2>

                        <p>
                            Dress your little gentleman for moments
                            that become family memories.
                        </p>

                        <Link
                            to="/collections/festive"
                            className="boys-secondary-btn"
                        >
                            Explore Festive Collection
                        </Link>
                    </div>
                </section>

                {/* OCCASIONS */}
                <section className="boys-occasion-section">
                    <div className="boys-section-heading">
                        <span className="section-eyebrow">
                            STYLE GUIDE
                        </span>

                        <h2>
                            Shop by <span>Occasion</span>
                        </h2>

                        <p>
                            Traditional styles for every special moment.
                        </p>
                    </div>

                    <div className="boys-occasion-grid">

                        <Link
                            to="/collections/wedding"
                            className="boys-occasion-card"
                        >
                            <img
                                src="/images/boys/wedding-wear.jpg"
                                alt="Boys wedding wear"
                            />

                            <div className="boys-occasion-overlay"></div>

                            <div className="boys-occasion-content">
                                <span>01</span>
                                <h3>Wedding Wear</h3>
                                <p>
                                    Smart and elegant styles for special celebrations.
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/festive"
                            className="boys-occasion-card"
                        >
                            <img
                                src="/images/boys/festive-wear.jpg"
                                alt="Boys festive wear"
                            />

                            <div className="boys-occasion-overlay"></div>

                            <div className="boys-occasion-content">
                                <span>02</span>
                                <h3>Festive Wear</h3>
                                <p>
                                    Comfortable traditional styles for celebrations.
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/everyday"
                            className="boys-occasion-card"
                        >
                            <img
                                src="/images/boys/everyday-wear.jpg"
                                alt="Boys everyday ethnic wear"
                            />

                            <div className="boys-occasion-overlay"></div>

                            <div className="boys-occasion-content">
                                <span>03</span>
                                <h3>Everyday Ethnic</h3>
                                <p>
                                    Easy and comfortable looks for every day.
                                </p>
                            </div>
                        </Link>

                    </div>
                </section>

                {/* BENEFITS */}
                <section className="boys-benefits">

                    <div className="boys-benefit-item">
                        <div>01</div>
                        <h3>Comfortable Fabrics</h3>
                        <p>
                            Soft fabrics designed for all-day comfort.
                        </p>
                    </div>

                    <div className="boys-benefit-item">
                        <div>02</div>
                        <h3>Easy Movement</h3>
                        <p>
                            Practical designs made for active little boys.
                        </p>
                    </div>

                    <div className="boys-benefit-item">
                        <div>03</div>
                        <h3>Festive Ready</h3>
                        <p>
                            Perfect outfits for weddings and celebrations.
                        </p>
                    </div>

                    <div className="boys-benefit-item">
                        <div>04</div>
                        <h3>Timeless Style</h3>
                        <p>
                            Traditional designs with a modern touch.
                        </p>
                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Boys;