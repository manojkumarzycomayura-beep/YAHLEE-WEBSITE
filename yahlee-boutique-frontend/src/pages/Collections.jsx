import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Collections.css";

function Collections() {
  const collections = [
    {
      title: "Wedding Wear",
      description: "Elegant ethnic styles for weddings and special celebrations.",
      image: "/images/collections/wedding.jpg",
    },
    {
      title: "Festive Edit",
      description: "Celebrate every festival with timeless Indian fashion.",
      image: "/images/collections/festive.jpg",
    },
    {
      title: "Family Function",
      description: "Beautiful coordinated looks for the whole family.",
      image: "/images/collections/family-function.jpg",
    },
    {
      title: "Temple & Traditional",
      description: "Classic traditional styles inspired by Indian heritage.",
      image: "/images/collections/temple.jpg",
    },
    {
      title: "Kids Festive",
      description: "Festive ethnic outfits for your little ones.",
      image: "/images/collections/kids.jpg",
    },
    {
      title: "Family Coordinated Looks",
      description: "Matching styles designed for memorable family moments.",
      image: "/images/collections/family.jpg",
    },
    {
      title: "New Arrivals",
      description: "Discover the latest additions to YAHLEE.",
      image: "/images/collections/new-arrivals.jpg",
    },
    {
      title: "Everyday Ethnic",
      description: "Comfortable ethnic fashion for everyday occasions.",
      image: "/images/collections/everyday.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="page">

        <section className="page-hero">
          <div>
            <span>YAHLEE COLLECTIONS</span>
            <h1>Collections & Occasions</h1>
            <p>
              Discover thoughtfully curated ethnic fashion for every
              celebration and every generation.
            </p>
          </div>
        </section>

        <section className="collection-page-section">

          <div className="section-heading">
            <span>EXPLORE</span>
            <h2>Shop by Occasion</h2>
          </div>

          <div className="collections-grid">

            {collections.map((collection) => (
              <Link
                to={`/collections/${collection.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="collection-card"
                key={collection.title}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                />

                <div className="collection-card-content">
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                  <span>Explore Collection →</span>
                </div>
              </Link>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Collections;