import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import TrustStrip from "../components/TrustStrip";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import CollectionBanner from "../components/CollectionBanner";
import FamilyLookCard from "../components/FamilyLookCard";
import ReviewCard from "../components/ReviewCard";
import NewsletterSignup from "../components/NewsletterSignup";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  /* =========================================
     CATEGORIES
     ========================================= */

  const categories = [
    {
      title: "Women",
      description: "Elegant styles for every occasion",
      image: "/images/women/women-main.jpg",
      link: "/women",
    },
    {
      title: "Men",
      description: "Timeless ethnic wear for him",
      image: "/images/men/men-main.jpg",
      link: "/men",
    },
    {
      title: "Boys",
      description: "Festive styles for little gentlemen",
      image: "/images/boys/boys-main.jpg",
      link: "/boys",
    },
    {
      title: "Girls",
      description: "Beautiful styles for every celebration",
      image: "/images/girls/girls-main.jpg",
      link: "/girls",
    },
  ];

  /* =========================================
     FEATURED PRODUCTS — from backend
     ========================================= */

  const { products: backendProducts, loading: productsLoading } = useProducts({ limit: 8 });
  const featuredProducts = Array.isArray(backendProducts) ? backendProducts.slice(0, 8) : [];

  /* =========================================
     REVIEWS
     ========================================= */

  const reviews = [
    {
      name: "Priya",
      rating: 5,
      review:
        "The quality and finishing are beautiful. The outfit looked elegant and was very comfortable.",
    },
    {
      name: "Ananya",
      rating: 5,
      review:
        "I loved the family collection. Everything looked premium and perfect for our celebration.",
    },
    {
      name: "Rahul",
      rating: 5,
      review:
        "The kurta quality and fit were excellent. The design is traditional but still feels modern.",
    },
  ];

  return (
    <div className="home-page">

      {/* =========================================
          HEADER
          ========================================= */}

      <Header />

      <main>

        {/* =========================================
            HERO SECTION
            ========================================= */}

        <HeroBanner
          image="/images/hero/hero-main.jpg"
          title="Tradition, Beautifully Reimagined"
          description="Discover timeless ethnic fashion crafted for every generation, every celebration and every beautiful moment."
          primaryButton="Shop Collection"
          primaryLink="/collections"
          secondaryButton="Explore Women"
          secondaryLink="/women"
        />

        {/* =========================================
            TRUST STRIP
            ========================================= */}

        <TrustStrip />

        {/* =========================================
            INTRODUCTION
            ========================================= */}

        <section className="section">
          <div className="container">

            <div
              className="text-center"
              style={{ maxWidth: "750px", margin: "0 auto" }}
            >
              <Sparkles
                size={28}
                style={{
                  color: "#b08a45",
                  margin: "0 auto 15px",
                }}
              />

              <h2>
                Indian Tradition, Made for Today
              </h2>

              <p style={{ marginTop: "18px" }}>
                At YAHLEE, we celebrate the beauty of Indian
                craftsmanship through thoughtfully designed
                ethnic wear for the whole family.
              </p>

              <p style={{ marginTop: "12px" }}>
                From everyday elegance to grand celebrations,
                discover pieces created to make every moment
                feel special.
              </p>

              <Link
                to="/our-story"
                className="btn btn-outline"
                style={{ marginTop: "25px" }}
              >
                Discover Our Story
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================
            SHOP BY CATEGORY
            ========================================= */}

        <section className="section" style={{ background: "#f8f3eb" }}>
          <div className="container">

            <h2 className="section-title">
              Shop by Category
            </h2>

            <p className="section-subtitle">
              Find timeless ethnic styles for every member
              of your family.
            </p>

            <div className="category-grid">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  link={category.link}
                />
              ))}
            </div>

            {/* Accessories */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                to="/accessories"
                className="btn btn-outline"
              >
                Explore Accessories
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================
            FEATURED PRODUCTS
            ========================================= */}

        {featuredProducts.length > 0 ? (
          <ProductGrid
            title="Featured Collection"
            products={featuredProducts}
          />
        ) : (
          <section className="section">
            <div className="container">

              <h2 className="section-title">
                Featured Collection
              </h2>

              <p className="section-subtitle">
                Our latest styles are coming soon.
              </p>

            </div>
          </section>
        )}

        {/* =========================================
            FESTIVE COLLECTION
            ========================================= */}

        <CollectionBanner
          image="/images/collections/festive-banner.jpg"
          title="Celebrate in YAHLEE"
          description="Elegant ethnic wear for weddings, festivals and the moments that bring families together."
          buttonText="Explore Festive Collection"
          link="/collections"
        />

        {/* =========================================
            FAMILY LOOKS
            ========================================= */}

        <section className="section">
          <div className="container">

            <h2 className="section-title">
              Together in Tradition
            </h2>

            <p className="section-subtitle">
              Coordinated ethnic styles made for family
              celebrations and unforgettable memories.
            </p>

            <div className="family-grid">

              <FamilyLookCard
                image="/images/collections/family-look.jpg"
                title="Family Festive Looks"
                description="Create beautiful memories together with coordinated styles for every generation."
                link="/collections"
              />

              <div className="family-content">

                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "12px",
                    color: "#b08a45",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Made for Families
                </span>

                <h2>
                  One Celebration.
                  <br />
                  Every Generation.
                </h2>

                <p style={{ marginTop: "20px" }}>
                  Whether it is a wedding, festival, family
                  gathering or a special occasion, YAHLEE
                  brings everyone together through timeless
                  Indian fashion.
                </p>

                <p style={{ marginTop: "15px" }}>
                  Discover coordinated looks designed to make
                  your family photographs even more memorable.
                </p>

                <Link
                  to="/collections"
                  className="btn btn-primary"
                  style={{ marginTop: "20px" }}
                >
                  Shop Family Looks
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            OCCASIONS
            ========================================= */}

        <section
          className="section"
          style={{ background: "#f8f3eb" }}
        >
          <div className="container">

            <h2 className="section-title">
              Dress for Every Occasion
            </h2>

            <p className="section-subtitle">
              From intimate gatherings to grand celebrations,
              find the perfect ethnic look.
            </p>

            <div className="category-grid">

              <CategoryCard
                title="Festivals"
                description="Celebrate traditions in style"
                image="/images/collections/festive.jpg"
                link="/collections"
              />

              <CategoryCard
                title="Weddings"
                description="Elegant looks for special days"
                image="/images/collections/wedding.jpg"
                link="/collections"
              />

              <CategoryCard
                title="Celebrations"
                description="Make every moment memorable"
                image="/images/collections/celebration.jpg"
                link="/collections"
              />

              <CategoryCard
                title="Everyday"
                description="Effortless ethnic elegance"
                image="/images/collections/everyday.jpg"
                link="/collections"
              />

            </div>

          </div>
        </section>

        {/* =========================================
            OUR STORY
            ========================================= */}

        <section className="section">
          <div className="container">

            <div className="story-grid">

              <div className="story-image">
                <img
                  src="/images/hero/our-story.jpg"
                  alt="YAHLEE craftsmanship and Indian fashion"
                  loading="lazy"
                />
              </div>

              <div className="story-content">

                <span
                  style={{
                    color: "#b08a45",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Our Story
                </span>

                <h2 style={{ marginTop: "12px", lineHeight: "1.3" }}>
                  At YAHLEE, we believe fashion is more beautiful when it brings the whole family together.
                </h2>

                <p style={{ marginTop: "20px" }}>
                  Inspired by India’s rich ethnic traditions, YAHLEE brings together thoughtfully chosen collections for Women, Men, Boys and Girls — along with handcrafted accessories that complete every look.
                </p>

                <p style={{ marginTop: "15px" }}>
                  From your little one’s first traditional outfit to your family’s special celebrations, we are here to dress every generation with style, comfort and tradition.
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px 20px",
                    background: "rgba(176, 138, 69, 0.08)",
                    borderLeft: "3px solid #b08a45",
                    borderRadius: "4px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      color: "#2e1c15",
                    }}
                  >
                    One family. Many generations. One YAHLEE.
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      color: "#b08a45",
                      fontWeight: "700",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                    }}
                  >
                    Fashion for Every Generation.
                  </p>
                </div>

                <Link
                  to="/our-story"
                  className="btn btn-primary"
                  style={{ marginTop: "25px" }}
                >
                  Read Full Story
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* =========================================
            CUSTOMER REVIEWS
            ========================================= */}

        <section
          className="section"
          style={{ background: "#f8f3eb" }}
        >
          <div className="container">

            <h2 className="section-title">
              Loved by Families
            </h2>

            <p className="section-subtitle">
              A few words from our YAHLEE family.
            </p>

            <div className="review-grid">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.name}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                />
              ))}
            </div>

          </div>
        </section>

        {/* =========================================
            FINAL CTA
            ========================================= */}

        <section className="section">
          <div className="container">

            <div
              style={{
                textAlign: "center",
                padding: "70px 25px",
                background: "#4a2f24",
                borderRadius: "12px",
              }}
            >
              <Sparkles
                size={28}
                style={{
                  color: "#d1b273",
                  margin: "0 auto 15px",
                }}
              />

              <h2 style={{ color: "#ffffff" }}>
                Find Something Beautiful
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "600px",
                  margin: "15px auto 25px",
                }}
              >
                Explore YAHLEE's collection of timeless ethnic
                fashion and find something special for your
                next celebration.
              </p>

              <Link
                to="/collections"
                className="btn btn-gold"
              >
                Shop YAHLEE
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================
            NEWSLETTER
            ========================================= */}

        <NewsletterSignup />

      </main>

      {/* =========================================
          FOOTER
          ========================================= */}

      <Footer />

    </div>
  );
};

export default Home;
