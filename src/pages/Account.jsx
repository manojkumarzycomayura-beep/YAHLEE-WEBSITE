import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Package,
  MapPin,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Edit3,
  ShoppingBag,
  Truck,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Account() {
  const [activeTab, setActiveTab] = useState("overview");

  const orders = [
    {
      id: "#YH10245",
      date: "06 Sep 2026",
      items: 2,
      total: 4298,
      status: "Delivered",
    },
    {
      id: "#YH10218",
      date: "28 Aug 2026",
      items: 1,
      total: 1899,
      status: "Shipped",
    },
    {
      id: "#YH10187",
      date: "15 Aug 2026",
      items: 3,
      total: 6597,
      status: "Delivered",
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Your Name",
      address:
        "123 Main Street, Bengaluru, Karnataka - 560001",
      phone: "+91 98765 43210",
      default: true,
    },
    {
      id: 2,
      type: "Work",
      name: "Your Name",
      address:
        "Business Park, MG Road, Bengaluru, Karnataka - 560001",
      phone: "+91 98765 43210",
      default: false,
    },
  ];

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmed) {
      alert("You have been logged out.");
    }
  };

  return (
    <>
      <Header />

      <main className="account-page">

        {/* =====================================================
            ACCOUNT HERO
        ====================================================== */}
        <section className="account-hero">
          <div className="account-hero-content">
            <span className="section-eyebrow">
              WELCOME BACK
            </span>

            <h1>
              My <span>Account</span>
            </h1>

            <p>
              Manage your orders, profile, addresses and
              wishlist from one place.
            </p>
          </div>
        </section>

        {/* =====================================================
            ACCOUNT CONTAINER
        ====================================================== */}
        <section className="account-container">

          {/* SIDEBAR */}
          <aside className="account-sidebar">

            <div className="account-profile">
              <div className="account-avatar">
                <User size={30} />
              </div>

              <div>
                <h3>Your Name</h3>
                <p>your@email.com</p>
              </div>
            </div>

            <nav className="account-navigation">

              <button
                className={
                  activeTab === "overview"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab("overview")}
              >
                <User size={18} />
                <span>Overview</span>
              </button>

              <button
                className={
                  activeTab === "orders"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab("orders")}
              >
                <Package size={18} />
                <span>My Orders</span>
              </button>

              <button
                className={
                  activeTab === "addresses"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab("addresses")
                }
              >
                <MapPin size={18} />
                <span>Saved Addresses</span>
              </button>

              <Link to="/wishlist">
                <Heart size={18} />
                <span>My Wishlist</span>
                <ChevronRight size={16} />
              </Link>

              <button
                className={
                  activeTab === "settings"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab("settings")
                }
              >
                <Settings size={18} />
                <span>Account Settings</span>
              </button>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>

            </nav>
          </aside>

          {/* =====================================================
              MAIN ACCOUNT CONTENT
          ====================================================== */}
          <div className="account-content">

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="account-overview">

                <div className="account-heading">
                  <div>
                    <span className="section-eyebrow">
                      MY ACCOUNT
                    </span>

                    <h2>
                      Hello, <span>Your Name</span>
                    </h2>

                    <p>
                      Here's a quick look at your YAHLEE
                      account.
                    </p>
                  </div>

                  <button
                    className="account-edit-button"
                    onClick={() =>
                      setActiveTab("settings")
                    }
                  >
                    <Edit3 size={16} />
                    Edit Profile
                  </button>
                </div>

                {/* ACCOUNT CARDS */}
                <div className="account-summary-grid">

                  <button
                    className="account-summary-card"
                    onClick={() =>
                      setActiveTab("orders")
                    }
                  >
                    <div className="summary-icon">
                      <Package size={23} />
                    </div>

                    <div>
                      <span>Orders</span>
                      <strong>3</strong>
                    </div>

                    <ChevronRight size={18} />
                  </button>

                  <Link
                    to="/wishlist"
                    className="account-summary-card"
                  >
                    <div className="summary-icon">
                      <Heart size={23} />
                    </div>

                    <div>
                      <span>Wishlist</span>
                      <strong>4</strong>
                    </div>

                    <ChevronRight size={18} />
                  </Link>

                  <button
                    className="account-summary-card"
                    onClick={() =>
                      setActiveTab("addresses")
                    }
                  >
                    <div className="summary-icon">
                      <MapPin size={23} />
                    </div>

                    <div>
                      <span>Addresses</span>
                      <strong>2</strong>
                    </div>

                    <ChevronRight size={18} />
                  </button>

                </div>

                {/* RECENT ORDERS */}
                <div className="account-section">

                  <div className="account-section-header">
                    <div>
                      <span className="section-eyebrow">
                        RECENT ACTIVITY
                      </span>

                      <h3>Recent Orders</h3>
                    </div>

                    <button
                      onClick={() =>
                        setActiveTab("orders")
                      }
                      className="account-view-link"
                    >
                      View All
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="recent-orders">

                    {orders.slice(0, 2).map((order) => (
                      <div
                        className="recent-order"
                        key={order.id}
                      >
                        <div className="order-icon">
                          <ShoppingBag size={20} />
                        </div>

                        <div className="order-details">
                          <h4>{order.id}</h4>
                          <p>
                            {order.items}{" "}
                            {order.items === 1
                              ? "item"
                              : "items"}{" "}
                            • {order.date}
                          </p>
                        </div>

                        <div className="order-price">
                          ₹
                          {order.total.toLocaleString(
                            "en-IN"
                          )}
                        </div>

                        <span
                          className={`order-status ${order.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {order.status}
                        </span>

                        <ChevronRight size={18} />
                      </div>
                    ))}

                  </div>
                </div>

                {/* PROFILE */}
                <div className="account-section">

                  <div className="account-section-header">
                    <div>
                      <span className="section-eyebrow">
                        PERSONAL DETAILS
                      </span>

                      <h3>Profile Information</h3>
                    </div>

                    <button
                      onClick={() =>
                        setActiveTab("settings")
                      }
                      className="account-view-link"
                    >
                      Edit
                      <Edit3 size={15} />
                    </button>
                  </div>

                  <div className="profile-information">

                    <div className="profile-field">
                      <span>Full Name</span>
                      <strong>Your Name</strong>
                    </div>

                    <div className="profile-field">
                      <span>Email</span>
                      <strong>your@email.com</strong>
                    </div>

                    <div className="profile-field">
                      <span>Phone</span>
                      <strong>+91 98765 43210</strong>
                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                ORDERS
            ================================================== */}
            {activeTab === "orders" && (
              <div className="account-orders">

                <div className="account-heading">
                  <div>
                    <span className="section-eyebrow">
                      YOUR SHOPPING HISTORY
                    </span>

                    <h2>
                      My <span>Orders</span>
                    </h2>

                    <p>
                      Track and manage your YAHLEE orders.
                    </p>
                  </div>
                </div>

                <div className="orders-list">

                  {orders.map((order) => (
                    <article
                      className="order-card"
                      key={order.id}
                    >

                      <div className="order-card-top">

                        <div>
                          <span>Order ID</span>
                          <h3>{order.id}</h3>
                        </div>

                        <div>
                          <span>Order Date</span>
                          <p>{order.date}</p>
                        </div>

                        <div>
                          <span>Total</span>
                          <strong>
                            ₹
                            {order.total.toLocaleString(
                              "en-IN"
                            )}
                          </strong>
                        </div>

                        <span
                          className={`order-status ${order.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {order.status}
                        </span>

                      </div>

                      <div className="order-card-bottom">

                        <div className="order-progress">

                          <div className="progress-step completed">
                            <span>✓</span>
                            <p>Ordered</p>
                          </div>

                          <div
                            className={`progress-line ${order.status === "Shipped" ||
                                order.status === "Delivered"
                                ? "completed"
                                : ""
                              }`}
                          ></div>

                          <div
                            className={`progress-step ${order.status === "Shipped" ||
                                order.status === "Delivered"
                                ? "completed"
                                : ""
                              }`}
                          >
                            <span>
                              {order.status === "Shipped" ||
                                order.status === "Delivered"
                                ? "✓"
                                : "2"}
                            </span>
                            <p>Shipped</p>
                          </div>

                          <div
                            className={`progress-line ${order.status === "Delivered"
                                ? "completed"
                                : ""
                              }`}
                          ></div>

                          <div
                            className={`progress-step ${order.status === "Delivered"
                                ? "completed"
                                : ""
                              }`}
                          >
                            <span>
                              {order.status === "Delivered"
                                ? "✓"
                                : "3"}
                            </span>
                            <p>Delivered</p>
                          </div>

                        </div>

                        <button className="track-order-button">
                          <Truck size={17} />
                          Track Order
                        </button>

                      </div>

                    </article>
                  ))}

                </div>
              </div>
            )}

            {/* =================================================
                ADDRESSES
            ================================================== */}
            {activeTab === "addresses" && (
              <div className="account-addresses">

                <div className="account-heading">
                  <div>
                    <span className="section-eyebrow">
                      DELIVERY INFORMATION
                    </span>

                    <h2>
                      Saved <span>Addresses</span>
                    </h2>

                    <p>
                      Manage your delivery addresses.
                    </p>
                  </div>

                  <button className="account-add-button">
                    + Add New Address
                  </button>
                </div>

                <div className="addresses-grid">

                  {addresses.map((address) => (
                    <article
                      className="address-card"
                      key={address.id}
                    >

                      <div className="address-card-header">
                        <div className="address-type">
                          <MapPin size={18} />
                          <strong>{address.type}</strong>
                        </div>

                        {address.default && (
                          <span className="default-address">
                            Default
                          </span>
                        )}
                      </div>

                      <div className="address-card-body">
                        <h3>{address.name}</h3>

                        <p>{address.address}</p>

                        <p>
                          <strong>Phone:</strong>{" "}
                          {address.phone}
                        </p>
                      </div>

                      <div className="address-actions">
                        <button>
                          <Edit3 size={15} />
                          Edit
                        </button>

                        <button className="delete-address">
                          Delete
                        </button>
                      </div>

                    </article>
                  ))}

                </div>

              </div>
            )}

            {/* =================================================
                SETTINGS
            ================================================== */}
            {activeTab === "settings" && (
              <div className="account-settings">

                <div className="account-heading">
                  <div>
                    <span className="section-eyebrow">
                      ACCOUNT SETTINGS
                    </span>

                    <h2>
                      Profile <span>Settings</span>
                    </h2>

                    <p>
                      Update your personal information.
                    </p>
                  </div>
                </div>

                <form
                  className="account-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Profile updated successfully!");
                  }}
                >

                  <div className="account-form-grid">

                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        defaultValue="Your"
                        placeholder="First name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        defaultValue="Name"
                        placeholder="Last name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        defaultValue="your@email.com"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+91 98765 43210"
                        placeholder="Phone number"
                      />
                    </div>

                  </div>

                  <div className="account-form-actions">

                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() =>
                        setActiveTab("overview")
                      }
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="save-button"
                    >
                      Save Changes
                    </button>

                  </div>

                </form>

                {/* PASSWORD */}
                <div className="password-section">

                  <div>
                    <span className="section-eyebrow">
                      SECURITY
                    </span>

                    <h3>Change Password</h3>

                    <p>
                      Keep your account secure by using a
                      strong password.
                    </p>
                  </div>

                  <button className="change-password-button">
                    Change Password
                  </button>

                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Account;