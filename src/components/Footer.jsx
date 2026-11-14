import React from "react";
import { Link } from "react-router-dom";
import { CONTACT, PRODUCTS } from "../data/products";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* =================================
          FOOTER CTA
      ================================= */}

      {/* =================================
          MAIN FOOTER
      ================================= */}
      <div className="site-footer__main">

        <div className="container site-footer__grid">

          {/* COMPANY */}
          <div className="site-footer__col site-footer__company">

            <Link to="/" className="footer-logo">
              <span className="footer-logo__mark">UI</span>

              <span className="footer-logo__text">
                UMA
                <em>Industries</em>
              </span>
            </Link>

            <p className="footer-company-copy">
              UMA Industries is a professionally managed manufacturer
              and supplier of industrial valves and precision
              instrumentation products for domestic and global markets.
            </p>

            <Link
              to="/about"
              className="footer-read-more"
            >
              More About Us →
            </Link>

          </div>


          {/* NAVIGATION */}
          <div className="site-footer__col">

            <h4>Navigate</h4>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/products">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* PRODUCTS */}
          <div className="site-footer__col">

            <h4>Our Products</h4>

            <ul className="footer-links">

              {PRODUCTS.slice(0, 5).map((product) => (
                <li key={product.code}>
                  <Link to={`/products/${product.code}`}>
                    {product.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/products"
                  className="footer-products-all"
                >
                  View All Products →
                </Link>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="site-footer__col footer-contact">

            <h4>Get in Touch</h4>

            <div className="footer-contact__item">

              <span className="footer-contact__label">
                ADDRESS
              </span>

              <p>
                {CONTACT.address}
              </p>

            </div>


            <div className="footer-contact__item">

              <span className="footer-contact__label">
                EMAIL
              </span>

              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>

            </div>


            <div className="footer-contact__item">

              <span className="footer-contact__label">
                PHONE
              </span>

              <div className="footer-phone-list">

                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  >
                    {phone}
                  </a>
                ))}

              </div>

            </div>


            <div className="footer-contact__item">

              <span className="footer-contact__label">
                SALES & EXPORT
              </span>

              <a
                href={`tel:${CONTACT.saleExport.replace(
                  /[^0-9+]/g,
                  ""
                )}`}
              >
                {CONTACT.saleExport}
              </a>

            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM BAR
        ================================= */}
        <div className="container site-footer__bottom">

          <div className="footer-copyright">
            © {year} <strong>UMA Industries</strong>.
            All rights reserved.
          </div>

          <div className="footer-tagline">
            Precision Engineering &amp; Instrumentation
            Manufacturing Excellence.
          </div>

        </div>

      </div>

    </footer>
  );
}