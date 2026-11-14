import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, INDUSTRIES, STATS } from "../data/products";
import "./Home.css";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);


  const [productStart, setProductStart] = useState(0);

  const productsPerView = 3;

  const nextProducts = () => {
    setProductStart((prev) => {
      if (prev + productsPerView >= PRODUCTS.length) {
        return 0;
      }

      return prev + productsPerView;
    });
  };

  const previousProducts = () => {
    setProductStart((prev) => {
      if (prev === 0) {
        const lastStart =
          Math.floor((PRODUCTS.length - 1) / productsPerView) *
          productsPerView;

        return lastStart;
      }

      return Math.max(0, prev - productsPerView);
    });
  };

  const visibleProducts = PRODUCTS.slice(
    productStart,
    productStart + productsPerView
  );

  return (
    <>
      {/* HERO */}
      {/* HERO */}
      <section className="hero">
        <div className="hero__overlay"></div>

        <div className="container hero__content">
          <div className="eyebrow">
            Industrial Products Manufacturer
          </div>

          <h1>
            Precision engineering for instrumentation &amp; piping components
          </h1>

          <p>
            UMA Industries designs and manufactures valves and precision
            instrumentation components built to hold their spece under
            pressure — for plants that can't afford to guess.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn-primary">
              View Products
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section">
        <div className="container about-strip">
          <div className="about-strip__frame frame">
            <img
              src="https://static.wixstatic.com/media/a0c39b_e68b4124feab44298474dfe951d8aa54~mv2.jpeg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%201_48_58%20PM.jpeg"
              alt="Stainless steel valves manufactured by UMA Industries"
            />
          </div>
          <div>
            <div className="eyebrow">About UMA Industries</div>
            <h2>Built to spec. Trusted across industries.</h2>
            <p style={{ marginTop: 16, color: "var(--ink-700)", fontSize: 17 }}>
              UMA Industries is a professionally managed manufacturer and
              supplier of industrial valves and precision instrumentation
              products. We are committed to delivering reliable, high-quality
              solutions for industrial applications and global markets.
            </p>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: 26 }}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="container">

          {/* SECTION HEADING */}

          <div className="section-head">

            <div className="eyebrow">
              Our Products
            </div>

            <h2>
              Precision-engineered components, built to perform
            </h2>

          </div>


          {/* PRODUCT CAROUSEL */}

          <div className="home-products-carousel">

            {/* LEFT BUTTON */}

            <button
              type="button"
              className="home-carousel-arrow home-carousel-arrow-left"
              onClick={previousProducts}
              aria-label="Previous products"
            >
              ←
            </button>


            {/* PRODUCTS */}

            <div className="product-grid">

              {visibleProducts.map((p) => (

                <article
                  className="product-card"
                  key={p.code}
                >

                  {/* IMAGE */}

                  <div className="frame product-card__frame">

                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                    />

                  </div>


                  {/* CODE */}

                  <span className="tag-code">
                    {p.code}
                  </span>


                  {/* NAME */}

                  <h3>
                    {p.name}
                  </h3>


                  {/* DESCRIPTION */}

                  <p>
                    {p.summary}
                  </p>


                  {/* VIEW PRODUCT */}

                  <Link
                    to={`/products/${p.code}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>

                </article>

              ))}

            </div>


            {/* RIGHT BUTTON */}

            <button
              type="button"
              className="home-carousel-arrow home-carousel-arrow-right"
              onClick={nextProducts}
              aria-label="Next products"
            >
              →
            </button>

          </div>


          {/* VIEW ALL */}

          <div
            style={{
              marginTop: 40,
              textAlign: "center",
            }}
          >

            <Link
              to="/products"
              className="btn btn-ghost"
            >
              View All Products
            </Link>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="section-dark">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Choose UMA Industries</div>
            <h2>Precision, reliability &amp; quality you can trust</h2>
            <p>
              Engineered for durability, smooth operation and dependable
              performance in demanding industrial applications — backed by
              dedicated support for product selection and technical requirements.
            </p>
          </div>
          <div className="stat-row">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Industries We Serve</div>
            <h2>Reliable engineering across critical process environments</h2>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map((ind, i) => (
              <div className="industry-card" key={ind.name}>
                <span className="industry-card__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Need a reliable industrial solution?</h2>
          <p>Contact us for product information, technical requirements and industrial enquiries.</p>
          <Link to="/contact" className="btn btn-primary">Send Enquiry</Link>
        </div>
      </section>
    </>
  );
}
