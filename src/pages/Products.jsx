import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import "./Products.css";

export default function Products() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return PRODUCTS;

    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="page-hero">
        <div className="container products-hero">
          <div>
            <div className="eyebrow">Our Products</div>

            <h1>
              Precision-engineered components for accurate, reliable performance
            </h1>
          </div>

          <label className="search-field">
            <span className="sr-only">Search products</span>

            <input
              type="text"
              placeholder="Search products, e.g. needle valve"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {filtered.length === 0 ? (
            <p className="no-results">
              No products match “{query}”. Try a different search term or{" "}
              <Link to="/contact">contact us</Link> with your requirement.
            </p>
          ) : (
            <div className="products-grid">

              {filtered.map((p) => (
                <article
                  className="product-row panel"
                  key={p.code}
                  id={p.code}
                >
                  <div className="frame product-row__frame">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="product-row__body">

                    <span className="tag-code">
                      {p.code}
                    </span>

                    <h3>{p.name}</h3>

                    <p>{p.summary}</p>

                    {/* VIEW BUTTON */}
                    <Link
                      to={`/products/${p.code}`}
                      className="btn btn-primary product-view-btn"
                    >
                      View Product
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">

          <h2>Can't find the exact spec you need?</h2>

          <p>
            Send us your requirement — sizes, pressure rating, material —
            and our team will get back to you.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Send Enquiry
          </Link>

        </div>
      </section>
    </>
  );
}