import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">

        <Mail
          size={28}
          className="newsletter-icon"
        />

        <h2>Stay in the YAHLEE Circle</h2>

        <p>
          Be the first to discover new collections, festive edits,
          exclusive offers and stories from YAHLEE.
        </p>

        {!submitted ? (
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />

            <button type="submit" className="btn btn-primary">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="newsletter-success">
            Thank you for joining the YAHLEE Circle! ✨
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsletterSignup;
