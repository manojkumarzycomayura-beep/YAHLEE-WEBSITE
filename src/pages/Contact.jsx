import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {

  return (
    <>
      <Header />

      <main className="contact-page">

        <div className="page-title">
          <span>WE'RE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>
            Have a question about an order, product or size?
            We'd love to hear from you.
          </p>
        </div>

        <section className="contact-layout">

          <div className="contact-information">

            <div>
              <h3>Customer Support</h3>
              <p>
                Contact information can be added here once
                YAHLEE's official support details are finalized.
              </p>
            </div>

            <div>
              <h3>Email</h3>
              <p>
                support@yahlee.com
              </p>
            </div>

            <div>
              <h3>WhatsApp</h3>
              <p style={{ marginBottom: "8px" }}>
                Chat with our styling concierge on WhatsApp for quick sizing, delivery, and order assistance.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hello%20YAHLEE%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#128c7e",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                +91 99999 99999 (Chat Now)
              </a>
            </div>

          </div>

          <form className="contact-form">

            <h2>Send us a message</h2>

            <label>
              Name
              <input type="text" placeholder="Your Name" />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="Your Email"
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                placeholder="Subject"
              />
            </label>

            <label>
              Message
              <textarea
                rows="6"
                placeholder="How can we help?"
              ></textarea>
            </label>

            <button type="submit">
              Send Message
            </button>

          </form>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;
