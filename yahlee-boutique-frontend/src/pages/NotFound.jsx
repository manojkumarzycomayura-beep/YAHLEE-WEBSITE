import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./NotFound.css";

function NotFound() {

  return (
    <>
      <Header />

      <main className="not-found-page">

        <span>YAHLEE</span>

        <h1>404</h1>

        <h2>
          This page has gone out of style.
        </h2>

        <p>
          The page you're looking for could not be found.
          Let's get you back to something beautiful.
        </p>

        <div className="not-found-actions">

          <Link
            to="/"
            className="btn-primary"
          >
            Back to Home
          </Link>

          <Link
            to="/collections"
            className="btn-secondary-dark"
          >
            Shop Collections
          </Link>

        </div>

        <div className="not-found-search">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search YAHLEE"
          />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default NotFound;
