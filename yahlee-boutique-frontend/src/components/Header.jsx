import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
} from "lucide-react";
import "./Header.css";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const text = searchText.trim();

    if (text) {
      navigate(`/category?search=${encodeURIComponent(text)}`);
      setSearchText("");
      setSearchOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="header-icon menu-toggle"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <Link to="/" className="brand-logo" aria-label="YAHLEE Boutique Home">
          <img
            src="/images/logo.png"
            alt="YAHLEE Salon & Boutique"
            className="header-logo-img"
          />
        </Link>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/boys">Boys</Link>
          <Link to="/girls">Girls</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/our-story">Our Story</Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          <button
            type="button"
            className="header-icon"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link
            to="/account"
            className="header-icon"
            aria-label="Account"
          >
            <User size={20} />
          </Link>

          <Link
            to="/wishlist"
            className="header-icon"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </Link>

          <Link
            to="/cart"
            className="header-icon"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </Link>

        </div>
      </div>

      {/* Search Box */}
      {searchOpen && (
        <div className="header-search-box">
          <form
            onSubmit={handleSearch}
            className="header-search-form"
          >
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search kurtas, sarees, dresses..."
              autoFocus
              className="header-search-input"
            />

            <button
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;