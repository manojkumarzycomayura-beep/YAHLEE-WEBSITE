import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import "./Women.css";

const Women = () => {
    const womenProducts = products.filter(
        (product) => product.category === "Women"
    );

    return (
        <>
            <Header />

            <main>
                {/* Page Hero */}
                <section
                    className="page-hero"
                    style={{
                        backgroundImage:
                            "url('/images/women/women-main.jpg')",
                    }}
                >
                    <div className="page-hero-content">
                        <p className="eyebrow">YAHLEE WOMEN</p>

                        <h1>Women&apos;s Collection</h1>

                        <p>
                            Discover elegant ethnic styles crafted for celebrations,
                            traditions and beautiful everyday moments.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className="section">
                    <div className="container">
                        <div className="section-heading">
                            <p className="eyebrow">SHOP WOMEN</p>

                            <h2>Timeless Styles for Every Occasion</h2>

                            <p>
                                Explore our curated collection of sarees, kurta sets,
                                Anarkalis and festive essentials.
                            </p>
                        </div>

                        <ProductGrid
                            products={womenProducts}
                            title="Women&apos;s Collection"
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Women;