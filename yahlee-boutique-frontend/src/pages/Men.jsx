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
import "./Men.css";

const menProducts = [
    {
        id: 101,
        name: "Classic Ivory Kurta",
        category: "Kurtas",
        price: 1899,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 124,
        image: "/images/men/ivory-kurta.jpg",
        badge: "Bestseller",
    },
    {
        id: 102,
        name: "Royal Blue Nehru Jacket",
        category: "Jackets",
        price: 2799,
        oldPrice: 3499,
        rating: 4.7,
        reviews: 86,
        image: "/images/men/blue-nehru-jacket.jpg",
        badge: "New",
    },
    {
        id: 103,
        name: "Festive Printed Kurta Set",
        category: "Kurta Sets",
        price: 2299,
        oldPrice: 2999,
        rating: 4.6,
        reviews: 92,
        image: "/images/men/printed-kurta-set.jpg",
        badge: "Popular",
    },
    {
        id: 104,
        name: "Elegant Black Sherwani",
        category: "Sherwanis",
        price: 5999,
        oldPrice: 6999,
        rating: 4.9,
        reviews: 61,
        image: "/images/men/black-sherwani.jpg",
        badge: "Premium",
    },
    {
        id: 105,
        name: "Cotton Pathani Kurta",
        category: "Kurtas",
        price: 1999,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 74,
        image: "/images/men/pathani-kurta.jpg",
    },
    {
        id: 106,
        name: "Beige Linen Kurta",
        category: "Kurtas",
        price: 1799,
        oldPrice: 2199,
        rating: 4.6,
        reviews: 58,
        image: "/images/men/beige-linen-kurta.jpg",
    },
    {
        id: 107,
        name: "Maroon Wedding Kurta Set",
        category: "Kurta Sets",
        price: 3299,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 103,
        image: "/images/men/maroon-kurta-set.jpg",
        badge: "Wedding Edit",
    },
    {
        id: 108,
        name: "Embroidered Cream Jacket",
        category: "Jackets",
        price: 2999,
        oldPrice: 3699,
        rating: 4.7,
        reviews: 67,
        image: "/images/men/cream-jacket.jpg",
    },
];

const categories = [
    "All",
    "Kurtas",
    "Kurta Sets",
    "Jackets",
    "Sherwanis",
];

function Men() {
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
                ? [...menProducts]
                : menProducts.filter(
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

            <main className="men-page">
                {/* ================= HERO ================= */}
                <section className="men-hero">
                    <img
                        src="/images/men/men-hero.jpg"
                        alt="YAHLEE Men's ethnic fashion collection"
                        className="men-hero-image"
                    />

                    <div className="men-hero-overlay"></div>

                    <div className="men-hero-content">
                        <span className="men-eyebrow">THE MEN'S EDIT</span>

                        <h1>
                            Timeless
                            <br />
                            <span>Indian Elegance</span>
                        </h1>

                        <p>
                            Refined ethnic wear crafted for celebrations,
                            traditions and every memorable occasion.
                        </p>

                        <Link to="#men-products" className="men-primary-btn">
                            Shop Men's Collection
                        </Link>
                    </div>
                </section>

                {/* ================= INTRO ================= */}
                <section className="men-intro">
                    <span className="section-eyebrow">YAHLEE MEN</span>

                    <h2>
                        Tradition, Tailored
                        <br />
                        <span>for Today</span>
                    </h2>

                    <p>
                        Discover sophisticated Indian wear designed for the modern man.
                        From effortless everyday kurtas to statement wedding pieces,
                        every YAHLEE creation blends heritage craftsmanship with
                        contemporary style.
                    </p>
                </section>

                {/* ================= CATEGORY NAV ================= */}
                <section className="men-category-section">
                    <div className="men-category-wrapper">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`men-category-btn ${selectedCategory === category ? "active" : ""
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* ================= PRODUCTS ================= */}
                <section className="men-products-section" id="men-products">
                    <div className="men-products-header">
                        <div>
                            <span className="section-eyebrow">SHOP MEN</span>

                            <h2>
                                Men's <span>Collection</span>
                            </h2>

                            <p>
                                {filteredProducts.length}{" "}
                                {filteredProducts.length === 1 ? "product" : "products"}
                            </p>
                        </div>

                        <div className="men-controls">
                            <button
                                className="filter-button"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={18} />
                                Filters
                            </button>

                            <div className="sort-wrapper">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="sort-select"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>

                                <ChevronDown
                                    size={16}
                                    className="sort-icon"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter Panel */}
                    {showFilters && (
                        <div className="men-filter-panel">
                            <h3>Filter by Category</h3>

                            <div className="filter-options">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={
                                            selectedCategory === category ? "selected" : ""
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
                    <div className="men-product-grid">
                        {filteredProducts.map((product) => (
                            <article className="men-product-card" key={product.id}>
                                <div className="men-product-image-wrapper">
                                    <Link to={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="men-product-image"
                                        />
                                    </Link>

                                    {product.badge && (
                                        <span className="product-badge">
                                            {product.badge}
                                        </span>
                                    )}

                                    <button
                                        className={`wishlist-button ${wishlist.includes(product.id) ? "liked" : ""
                                            }`}
                                        onClick={() => toggleWishlist(product.id)}
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
                                        className="quick-shop"
                                    >
                                        <ShoppingBag size={16} />
                                        Quick Shop
                                    </Link>
                                </div>

                                <div className="men-product-info">
                                    <span className="product-category">
                                        {product.category}
                                    </span>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="product-name"
                                    >
                                        {product.name}
                                    </Link>

                                    <div className="product-rating">
                                        <Star
                                            size={14}
                                            fill="currentColor"
                                        />

                                        <span>{product.rating}</span>

                                        <span className="review-count">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <div className="product-price">
                                        <span className="current-price">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </span>

                                        {product.oldPrice && (
                                            <span className="old-price">
                                                ₹{product.oldPrice.toLocaleString("en-IN")}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ================= COLLECTION BANNER ================= */}
                <section className="men-feature-banner">
                    <img
                        src="/images/men/men-collection-banner.jpg"
                        alt="YAHLEE men's festive collection"
                    />

                    <div className="men-feature-overlay"></div>

                    <div className="men-feature-content">
                        <span>THE FESTIVE COLLECTION</span>

                        <h2>
                            Dress for
                            <br />
                            <strong>Every Celebration</strong>
                        </h2>

                        <p>
                            Sophisticated silhouettes, rich textures and
                            timeless Indian craftsmanship.
                        </p>

                        <Link to="/collections" className="men-secondary-btn">
                            Explore Collection
                        </Link>
                    </div>
                </section>

                {/* ================= SHOP BY OCCASION ================= */}
                <section className="men-occasion-section">
                    <div className="men-section-heading">
                        <span className="section-eyebrow">STYLE GUIDE</span>

                        <h2>
                            Shop by <span>Occasion</span>
                        </h2>

                        <p>
                            Find the perfect look for every special moment.
                        </p>
                    </div>

                    <div className="men-occasion-grid">
                        <Link
                            to="/collections/wedding"
                            className="occasion-card"
                        >
                            <img
                                src="/images/men/wedding-wear.jpg"
                                alt="Wedding wear for men"
                            />

                            <div className="occasion-overlay"></div>

                            <div className="occasion-content">
                                <span>01</span>
                                <h3>Wedding Edit</h3>
                                <p>Regal looks for unforgettable celebrations</p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/festive"
                            className="occasion-card"
                        >
                            <img
                                src="/images/men/festive-wear.jpg"
                                alt="Festive wear for men"
                            />

                            <div className="occasion-overlay"></div>

                            <div className="occasion-content">
                                <span>02</span>
                                <h3>Festive Edit</h3>
                                <p>Celebrate tradition in contemporary style</p>
                            </div>
                        </Link>

                        <Link
                            to="/collections/everyday"
                            className="occasion-card"
                        >
                            <img
                                src="/images/men/everyday-wear.jpg"
                                alt="Everyday ethnic wear for men"
                            />

                            <div className="occasion-overlay"></div>

                            <div className="occasion-content">
                                <span>03</span>
                                <h3>Everyday Classics</h3>
                                <p>Effortless comfort with timeless elegance</p>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* ================= BENEFITS ================= */}
                <section className="men-benefits">
                    <div className="benefit-item">
                        <div className="benefit-number">01</div>

                        <h3>Premium Fabrics</h3>

                        <p>
                            Carefully selected fabrics designed for
                            comfort and lasting quality.
                        </p>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-number">02</div>

                        <h3>Fine Craftsmanship</h3>

                        <p>
                            Traditional detailing meets contemporary
                            silhouettes.
                        </p>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-number">03</div>

                        <h3>Made for Moments</h3>

                        <p>
                            Thoughtfully designed for weddings,
                            festivals and everyday celebrations.
                        </p>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-number">04</div>

                        <h3>Easy Shopping</h3>

                        <p>
                            Secure checkout, easy returns and
                            reliable delivery.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Men;
