import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  LogIn,
  UserPlus,
  Loader,
  AlertCircle,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./Account.css";

// ─── Helper: split full_name into first/last ─────────────────────────────────
function splitName(full_name = "") {
  const parts = (full_name || "").trim().split(" ");
  const first = parts[0] || "";
  const last = parts.slice(1).join(" ") || "";
  return { first, last };
}

// ─────────────────────────────────────────────────────────────────────────────
//  LOGIN / REGISTER panel (shown when user is NOT logged in)
// ─────────────────────────────────────────────────────────────────────────────
function AuthPanel() {
  const { login, register, error, setError } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirm: "" });
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    setLocalError("");
    setError(null);
  }, [mode, setError]);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    setError(null);

    if (mode === "register" && form.password !== form.confirm) {
      setLocalError("Passwords do not match.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        await register(form.email, form.password, form.fullName);
      }
      navigate("/account");
    } catch (err) {
      setLocalError(err.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const displayError = localError || error;

  return (
    <>
      <Header />
      <main className="account-page">
        {/* Hero */}
        <section className="account-hero">
          <div className="account-hero-content">
            <span className="section-eyebrow">
              {mode === "login" ? "WELCOME BACK" : "JOIN YAHLEE"}
            </span>
            <h1>
              {mode === "login" ? (
                <>My <span>Account</span></>
              ) : (
                <>Create <span>Account</span></>
              )}
            </h1>
            <p>
              {mode === "login"
                ? "Sign in to view your orders, wishlist and profile."
                : "Join the YAHLEE family and enjoy a personalised shopping experience."}
            </p>
          </div>
        </section>

        {/* Auth Form */}
        <section className="section">
          <div className="container" style={{ maxWidth: 520 }}>

            {/* Tab toggle */}
            <div
              style={{
                display: "flex",
                background: "#f8f3eb",
                borderRadius: 10,
                padding: 4,
                marginBottom: 32,
                border: "1px solid #e3d8ca",
              }}
            >
              {["login", "register"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    border: 0,
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: mode === m ? "#4a2f24" : "transparent",
                    color: mode === m ? "#fff" : "#76675f",
                    letterSpacing: "0.5px",
                  }}
                >
                  {m === "login" ? "Sign In" : "Create Account"}
                </button>
              ))}
            </div>

            {/* Error banner */}
            {displayError && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 18px",
                  background: "rgba(166,75,67,0.08)",
                  border: "1px solid rgba(166,75,67,0.25)",
                  borderRadius: 8,
                  color: "#a64b43",
                  fontSize: "0.9rem",
                  marginBottom: 24,
                }}
              >
                <AlertCircle size={18} />
                {displayError}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {mode === "register" && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    id="auth-full-name"
                    type="text"
                    name="fullName"
                    placeholder="e.g. Priya Sharma"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <input
                  id="auth-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  id="auth-password"
                  type="password"
                  name="password"
                  placeholder={mode === "login" ? "Your password" : "Min. 8 characters"}
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                />
              </div>

              {mode === "register" && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    id="auth-confirm-password"
                    type="password"
                    name="confirm"
                    placeholder="Repeat your password"
                    value={form.confirm}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />
                </div>
              )}

              <button
                id="auth-submit-btn"
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: 8, justifyContent: "center", opacity: busy ? 0.8 : 1 }}
                disabled={busy}
              >
                {busy ? (
                  <Loader size={17} style={{ animation: "spin 1s linear infinite" }} />
                ) : mode === "login" ? (
                  <><LogIn size={17} /> Sign In</>
                ) : (
                  <><UserPlus size={17} /> Create Account</>
                )}
              </button>
            </form>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  ACCOUNT DASHBOARD (shown when user IS logged in)
// ─────────────────────────────────────────────────────────────────────────────
function AccountDashboard() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Profile form state
  const { first, last } = splitName(user?.full_name);
  const [profileForm, setProfileForm] = useState({
    firstName: first,
    lastName: last,
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState("");

  // Static demo orders (backend doesn't have orders yet)
  const orders = [
    { id: "#YH10245", date: "06 Sep 2026", items: 2, total: 4298, status: "Delivered" },
    { id: "#YH10218", date: "28 Aug 2026", items: 1, total: 1899, status: "Shipped" },
    { id: "#YH10187", date: "15 Aug 2026", items: 3, total: 6597, status: "Delivered" },
  ];

  const addresses = [
    { id: 1, type: "Home", name: user?.full_name || "Your Name", address: "123 Main Street, Bengaluru, Karnataka - 560001", phone: "+91 98765 43210", default: true },
    { id: 2, type: "Work", name: user?.full_name || "Your Name", address: "Business Park, MG Road, Bengaluru, Karnataka - 560001", phone: "+91 98765 43210", default: false },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/");
    }
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileMsg("");
    try {
      await updateProfile({
        full_name: `${profileForm.firstName} ${profileForm.lastName}`.trim(),
      });
      setProfileMsg("Profile updated successfully!");
    } catch (err) {
      setProfileMsg("Failed to update profile: " + err.message);
    } finally {
      setSavingProfile(false);
      setTimeout(() => setProfileMsg(""), 4000);
    }
  };

  const navItems = [
    { id: "overview",  label: "Overview",    icon: User },
    { id: "orders",   label: "My Orders",   icon: Package },
    { id: "addresses",label: "Addresses",   icon: MapPin },
    { id: "wishlist", label: "Wishlist",    icon: Heart },
    { id: "settings", label: "Settings",   icon: Settings },
  ];

  return (
    <>
      <Header />
      <main className="account-page">

        {/* Hero */}
        <section className="account-hero">
          <div className="account-hero-content">
            <span className="section-eyebrow">WELCOME BACK</span>
            <h1>My <span>Account</span></h1>
            <p>Manage your orders, profile, addresses and wishlist from one place.</p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="section">
          <div className="container">
            <div className="account-layout">

              {/* ── Sidebar ── */}
              <aside className="account-sidebar">
                {/* Avatar */}
                <div className="account-profile-card">
                  <div className="account-avatar">
                    <User size={28} />
                  </div>
                  <div>
                    <p className="account-name">{user?.full_name || "My Account"}</p>
                    <p className="account-email">{user?.email}</p>
                  </div>
                </div>

                {/* Nav */}
                <nav className="account-nav">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      id={`account-tab-${id}`}
                      className={`account-nav-item ${activeTab === id ? "active" : ""}`}
                      onClick={() => setActiveTab(id)}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                      <ChevronRight size={16} className="nav-arrow" />
                    </button>
                  ))}

                  <button id="account-logout-btn" className="account-nav-item logout" onClick={handleLogout}>
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </nav>
              </aside>

              {/* ── Main Panel ── */}
              <div className="account-main">

                {/* OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="account-overview">
                    <div className="account-heading">
                      <div>
                        <span className="section-eyebrow">DASHBOARD</span>
                        <h2>Welcome, <span>{user?.full_name?.split(" ")[0] || "there"}!</span></h2>
                        <p>Here's a quick look at your account activity.</p>
                      </div>
                    </div>

                    <div className="overview-stats">
                      <div className="stat-card">
                        <ShoppingBag size={24} />
                        <div>
                          <strong>{orders.length}</strong>
                          <p>Total Orders</p>
                        </div>
                      </div>
                      <div className="stat-card">
                        <Truck size={24} />
                        <div>
                          <strong>{orders.filter(o => o.status === "Shipped").length}</strong>
                          <p>Shipped</p>
                        </div>
                      </div>
                      <div className="stat-card">
                        <Heart size={24} />
                        <div>
                          <strong>0</strong>
                          <p>Wishlist Items</p>
                        </div>
                      </div>
                    </div>

                    <div className="recent-orders-preview">
                      <h3>Recent Orders</h3>
                      {orders.slice(0, 2).map((order) => (
                        <article key={order.id} className="order-card">
                          <div className="order-info">
                            <strong>{order.id}</strong>
                            <span>{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</span>
                          </div>
                          <div className="order-meta">
                            <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                            <strong>₹{order.total.toLocaleString("en-IN")}</strong>
                          </div>
                        </article>
                      ))}
                      <button className="account-link-btn" onClick={() => setActiveTab("orders")}>
                        View All Orders <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* ORDERS */}
                {activeTab === "orders" && (
                  <div className="account-orders">
                    <div className="account-heading">
                      <div>
                        <span className="section-eyebrow">ORDER HISTORY</span>
                        <h2>My <span>Orders</span></h2>
                        <p>Track and manage your recent purchases.</p>
                      </div>
                    </div>

                    <div className="orders-list">
                      {orders.map((order) => (
                        <article key={order.id} className="order-card-full">
                          <div className="order-header">
                            <div>
                              <strong>{order.id}</strong>
                              <span className="order-date">{order.date}</span>
                            </div>
                            <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                          </div>
                          <div className="order-body">
                            <span>{order.items} item{order.items > 1 ? "s" : ""}</span>
                            <strong>₹{order.total.toLocaleString("en-IN")}</strong>
                          </div>
                          <div className="order-progress">
                            <div className={`progress-step ${order.status === "Shipped" || order.status === "Delivered" ? "completed" : ""}`}>
                              <span>{order.status === "Shipped" || order.status === "Delivered" ? "✓" : "1"}</span>
                              <p>Confirmed</p>
                            </div>
                            <div className={`progress-line ${order.status === "Shipped" || order.status === "Delivered" ? "completed" : ""}`} />
                            <div className={`progress-step ${order.status === "Shipped" || order.status === "Delivered" ? "completed" : ""}`}>
                              <span>{order.status === "Shipped" || order.status === "Delivered" ? "✓" : "2"}</span>
                              <p>Shipped</p>
                            </div>
                            <div className={`progress-line ${order.status === "Delivered" ? "completed" : ""}`} />
                            <div className={`progress-step ${order.status === "Delivered" ? "completed" : ""}`}>
                              <span>{order.status === "Delivered" ? "✓" : "3"}</span>
                              <p>Delivered</p>
                            </div>
                          </div>
                          <button className="track-order-button">
                            <Truck size={17} /> Track Order
                          </button>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* ADDRESSES */}
                {activeTab === "addresses" && (
                  <div className="account-addresses">
                    <div className="account-heading">
                      <div>
                        <span className="section-eyebrow">DELIVERY INFORMATION</span>
                        <h2>Saved <span>Addresses</span></h2>
                        <p>Manage your delivery addresses.</p>
                      </div>
                      <button className="account-add-button">+ Add New Address</button>
                    </div>
                    <div className="addresses-grid">
                      {addresses.map((address) => (
                        <article className="address-card" key={address.id}>
                          <div className="address-card-header">
                            <div className="address-type">
                              <MapPin size={18} />
                              <strong>{address.type}</strong>
                            </div>
                            {address.default && <span className="default-address">Default</span>}
                          </div>
                          <div className="address-card-body">
                            <h3>{address.name}</h3>
                            <p>{address.address}</p>
                            <p><strong>Phone:</strong> {address.phone}</p>
                          </div>
                          <div className="address-actions">
                            <button><Edit3 size={15} /> Edit</button>
                            <button className="delete-address">Delete</button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* WISHLIST */}
                {activeTab === "wishlist" && (
                  <div className="account-orders">
                    <div className="account-heading">
                      <div>
                        <span className="section-eyebrow">SAVED ITEMS</span>
                        <h2>My <span>Wishlist</span></h2>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", padding: "60px 20px", color: "#76675f" }}>
                      <Heart size={48} style={{ margin: "0 auto 20px", opacity: 0.3 }} />
                      <p>No items saved to your wishlist yet.</p>
                      <Link to="/" className="btn btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                )}

                {/* SETTINGS */}
                {activeTab === "settings" && (
                  <div className="account-settings">
                    <div className="account-heading">
                      <div>
                        <span className="section-eyebrow">ACCOUNT SETTINGS</span>
                        <h2>Profile <span>Settings</span></h2>
                        <p>Update your personal information.</p>
                      </div>
                    </div>

                    {profileMsg && (
                      <div style={{
                        padding: "12px 18px",
                        background: profileMsg.includes("Failed") ? "rgba(166,75,67,0.08)" : "rgba(80,160,100,0.1)",
                        border: `1px solid ${profileMsg.includes("Failed") ? "rgba(166,75,67,0.25)" : "rgba(80,160,100,0.3)"}`,
                        borderRadius: 8,
                        color: profileMsg.includes("Failed") ? "#a64b43" : "#3a7a50",
                        fontSize: "0.9rem",
                        marginBottom: 20,
                      }}>
                        {profileMsg}
                      </div>
                    )}

                    <form className="account-form" onSubmit={handleProfileSave}>
                      <div className="account-form-grid">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            id="settings-first-name"
                            type="text"
                            value={profileForm.firstName}
                            onChange={(e) => setProfileForm(f => ({ ...f, firstName: e.target.value }))}
                            placeholder="First name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            id="settings-last-name"
                            type="text"
                            value={profileForm.lastName}
                            onChange={(e) => setProfileForm(f => ({ ...f, lastName: e.target.value }))}
                            placeholder="Last name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email Address</label>
                          <input
                            id="settings-email"
                            type="email"
                            value={profileForm.email}
                            readOnly
                            style={{ opacity: 0.6, cursor: "not-allowed" }}
                            title="Email cannot be changed"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            id="settings-phone"
                            type="tel"
                            value={profileForm.phone}
                            onChange={(e) => setProfileForm(f => ({ ...f, phone: e.target.value }))}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="account-form-actions">
                        <button type="button" className="cancel-button" onClick={() => setActiveTab("overview")}>
                          Cancel
                        </button>
                        <button type="submit" className="save-button" disabled={savingProfile}>
                          {savingProfile ? "Saving..." : "Save Changes"}
                        </button>
                      </div>
                    </form>

                    {/* Password section */}
                    <div className="password-section">
                      <div>
                        <span className="section-eyebrow">SECURITY</span>
                        <h3>Change Password</h3>
                        <p>Keep your account secure with a strong password.</p>
                      </div>
                      <button className="change-password-button">Change Password</button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN: Account (router between auth panel and dashboard)
// ─────────────────────────────────────────────────────────────────────────────
function Account() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ textAlign: "center", padding: "100px 20px", color: "#76675f" }}>
          <Loader size={36} style={{ animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
          <p>Loading your account…</p>
        </div>
        <Footer />
      </>
    );
  }

  return isAuthenticated ? <AccountDashboard /> : <AuthPanel />;
}

export default Account;