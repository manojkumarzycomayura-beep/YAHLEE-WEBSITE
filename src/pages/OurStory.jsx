import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function OurStory() {

  return (
    <>
      <Header />

      <main className="story-page">

        <section className="story-hero">

          <img
            src="/images/hero/family.jpg"
            alt="Three generation family wearing YAHLEE ethnic fashion"
          />

          <div className="story-hero-content">

            <span>OUR STORY</span>

            <h1>
              One family.
              <br />
              Many generations.
              <br />
              One YAHLEE.
            </h1>

            <p className="story-hero-tagline">
              Fashion for Every Generation.
            </p>

          </div>

        </section>

        <section className="story-introduction">

          <span>THE YAHLEE PHILOSOPHY</span>

          <h2>
            At YAHLEE, we believe fashion is more beautiful
            when it brings the whole family together.
          </h2>

          <p>
            Inspired by India’s rich ethnic traditions, YAHLEE
            brings together thoughtfully chosen collections for
            Women, Men, Boys and Girls — along with handcrafted
            accessories that complete every look.
          </p>

          <p>
            From your little one’s first traditional outfit to
            your family’s special celebrations, we are here to
            dress every generation with style, comfort and
            tradition.
          </p>

          <div className="story-motto-box">
            <h3>One family. Many generations. One YAHLEE.</h3>
            <span className="story-tagline-highlight">Fashion for Every Generation.</span>
          </div>

        </section>

        <section className="story-values">

          <div>
            <img
              src="/images/story/craft.jpg"
              alt="Traditional craftsmanship"
            />
          </div>

          <div className="story-values-content">

            <span>OUR BELIEF</span>

            <h2>
              Tradition meets modern style.
            </h2>

            <p>
              We celebrate the beauty of Indian ethnic fashion
              while embracing the changing styles and lifestyles
              of today's families.
            </p>

            <p>
              Every collection is chosen with an eye for
              craftsmanship, comfort, occasion and timeless style.
            </p>

          </div>

        </section>

        <section className="story-generations">

          <div className="section-heading">
            <span>FOR EVERYONE</span>

            <h2>
              Fashion for Every Generation.
            </h2>
          </div>

          <div className="generation-story-grid">

            <div>
              <h3>Women</h3>
              <p>
                Sarees, salwar, kurtis, lehengas and ethnic sets.
              </p>
            </div>

            <div>
              <h3>Men</h3>
              <p>
                Kurta, veshti, shirts, ethnic sets and wedding wear.
              </p>
            </div>

            <div>
              <h3>Boys</h3>
              <p>
                Traditional outfits for festive family moments.
              </p>
            </div>

            <div>
              <h3>Girls</h3>
              <p>
                Pattu pavadai, frocks, lehengas and ethnic sets.
              </p>
            </div>

          </div>

        </section>

        <section className="story-final">

          <h2>
            Dress every generation.
          </h2>

          <p>
            Create beautiful memories together with YAHLEE.
          </p>

          <Link to="/collections" className="btn-primary">
            Shop Fashion for Every Generation
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default OurStory;
