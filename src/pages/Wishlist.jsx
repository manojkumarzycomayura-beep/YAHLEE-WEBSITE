import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Wishlist() {

  const wishlistItems = [
    {
      id: 1,
      name: "Traditional Silk Saree",
      price: 4999,
      image: "/images/products/saree-1.jpg",
    },
    {
      id: 2,
      name: "Classic Men's Kurta",
      price: 2499,
      image: "/images/products/kurta-1.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="wishlist-page">

        <div className="page-title">
          <span>SAVED FOR YOU</span>
          <h1>My Wishlist</h1>
        </div>

        {wishlistItems.length === 0 ? (

          <div className="empty-page">

            <Heart size={45} />

            <h2>Your wishlist is empty</h2>

            <p>
              Save your favourite YAHLEE styles here.
            </p>

            <Link to="/" className="btn-primary">
              Explore Collection
            </Link>

          </div>

        ) : (

          <div className="wishlist-grid">

            {wishlistItems.map((item) => (

              <div className="wishlist-card" key={item.id}>

                <div className="wishlist-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <button>
                    <Heart size={20} />
                  </button>

                </div>

                <div className="wishlist-info">

                  <h3>{item.name}</h3>

                  <strong>
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>

                  <button className="wishlist-cart">
                    <ShoppingBag size={17} />
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Wishlist;