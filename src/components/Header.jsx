import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import "./Header.css";

import companyLogo from "../assets/logo/Screenshot 2026-09-08 212927.png";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
];

const LINK = [
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* =========================================
     HEADER SCROLL
  ========================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================
     MOBILE MENU
  ========================================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* =========================================
     CLOSE PRODUCT DROPDOWN OUTSIDE
  ========================================= */

  useEffect(() => {
    if (!productsOpen) return;

    const onClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setProductsOpen(false);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      onClickOutside
    );

    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener(
        "mousedown",
        onClickOutside
      );

      window.removeEventListener("keydown", onKey);
    };
  }, [productsOpen]);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header
      className={`site-header${
        scrolled ? " is-scrolled" : ""
      }`}
    >

      <div className="site-header__bar container">

        {/* =====================================
            LOGO
        ====================================== */}

        <NavLink
          to="/"
          className="site-header__brand"
          onClick={closeMobileMenu}
        >
          <img
            src={companyLogo}
            alt="UMA Industries"
            className="company-logo"
          />
        </NavLink>


        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}

        <nav
          className="site-header__nav site-header__nav--desktop"
          aria-label="Primary"
        >

          {/* HOME */}

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" +
              (isActive ? " is-active" : "")
            }
          >
            Home
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" +
              (isActive ? " is-active" : "")
            }
          >
            About Us
          </NavLink>


          {/* =================================
              PRODUCTS DROPDOWN
          ================================== */}

          <div
            className="nav-dropdown"
            ref={dropdownRef}
          >

            <button
              type="button"
              className={
                "nav-link nav-dropdown__trigger" +
                (productsOpen ? " is-active" : "")
              }
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() =>
                setProductsOpen((value) => !value)
              }
            >

              Products

              <svg
                className={
                  "nav-dropdown__chevron" +
                  (productsOpen
                    ? " is-open"
                    : "")
                }
                viewBox="0 0 12 8"
                width="10"
                height="7"
                aria-hidden="true"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>

            </button>


            <div
              className={
                "nav-dropdown__panel" +
                (productsOpen
                  ? " is-open"
                  : "")
              }
            >

              {/* VIEW ALL */}

              <Link
                to="/products"
                className="nav-dropdown__all"
                onClick={() =>
                  setProductsOpen(false)
                }
              >
                View All Products
              </Link>


              {/* GLOBAL REACH */}

              <Link
                to="/global-reach"
                className="nav-dropdown__all"
                onClick={() =>
                  setProductsOpen(false)
                }
              >
                Global Reach
              </Link>


              {/* APPLICATION */}

              <Link
                to="/applications"
                className="nav-dropdown__all"
                onClick={() =>
                  setProductsOpen(false)
                }
              >
                Application
              </Link>


              {/* QUALITY */}

              <Link
                to="/quality"
                className="nav-dropdown__all"
                onClick={() =>
                  setProductsOpen(false)
                }
              >
                Quality
              </Link>


              {/* INFRASTRUCTURE */}

              <Link
                to="/infrastructure"
                className="nav-dropdown__all"
                onClick={() =>
                  setProductsOpen(false)
                }
              >
                Infrastructure
              </Link>


              {/* =================================
                  PRODUCT LIST
              ================================== */}

              <ul>

                {PRODUCTS.map((p) => (
                  <li key={p.code}>

                    <Link
                      to={`/products/${p.code}`}
                      onClick={() =>
                        setProductsOpen(false)
                      }
                    >
                      {p.name}
                    </Link>

                  </li>
                ))}

              </ul>

            </div>

          </div>


          {/* GALLERY */}

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              "nav-link" +
              (isActive ? " is-active" : "")
            }
          >
            Gallery
          </NavLink>


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" +
              (isActive ? " is-active" : "")
            }
          >
            Contact Us
          </NavLink>

        </nav>


        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* =========================================
          MOBILE OVERLAY
      ========================================= */}

      <div
        className={`mobile-overlay${
          open ? " is-open" : ""
        }`}
      >

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="mobile-overlay__close"
          aria-label="Close menu"
          onClick={closeMobileMenu}
        >

          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            />

            <line
              x1="20"
              y1="4"
              x2="4"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

        </button>


        {/* MOBILE NAV */}

        <nav
          className="mobile-overlay__nav"
          aria-label="Primary mobile"
        >

          {/* HOME */}

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "mobile-overlay__link" +
              (isActive
                ? " is-active"
                : "")
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "mobile-overlay__link" +
              (isActive
                ? " is-active"
                : "")
            }
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>


          {/* =================================
              MOBILE PRODUCTS
          ================================== */}

          <div className="mobile-accordion">

            <button
              type="button"
              className="mobile-overlay__link mobile-accordion__trigger"
              aria-expanded={mobileProductsOpen}
              onClick={() =>
                setMobileProductsOpen(
                  (value) => !value
                )
              }
            >

              Products

              <svg
                className={
                  "nav-dropdown__chevron" +
                  (mobileProductsOpen
                    ? " is-open"
                    : "")
                }
                viewBox="0 0 12 8"
                width="13"
                height="9"
                aria-hidden="true"
              >

                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />

              </svg>

            </button>


            <div
              className={
                "mobile-accordion__panel" +
                (mobileProductsOpen
                  ? " is-open"
                  : "")
              }
            >

              {/* VIEW ALL */}

              <Link
                to="/products"
                className="mobile-accordion__link"
                onClick={closeMobileMenu}
              >
                View All Products
              </Link>


              {/* GLOBAL REACH */}

              <Link
                to="/global-reach"
                className="mobile-accordion__link"
                onClick={closeMobileMenu}
              >
                Global Reach
              </Link>


              {/* APPLICATION */}

              <Link
                to="/applications"
                className="mobile-accordion__link"
                onClick={closeMobileMenu}
              >
                Application
              </Link>


              {/* QUALITY */}

              <Link
                to="/quality"
                className="mobile-accordion__link"
                onClick={closeMobileMenu}
              >
                Quality
              </Link>


              {/* INFRASTRUCTURE */}

              <Link
                to="/infrastructure"
                className="mobile-accordion__link"
                onClick={closeMobileMenu}
              >
                Infrastructure
              </Link>


              {/* =================================
                  PRODUCT LINKS
              ================================== */}

              {PRODUCTS.map((p) => (
                <Link
                  key={p.code}
                  to={`/products/${p.code}`}
                  className="mobile-accordion__link"
                  onClick={closeMobileMenu}
                >
                  {p.name}
                </Link>
              ))}

            </div>

          </div>


          {/* GALLERY */}

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              "mobile-overlay__link" +
              (isActive
                ? " is-active"
                : "")
            }
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "mobile-overlay__link" +
              (isActive
                ? " is-active"
                : "")
            }
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>

        </nav>


        {/* CALL BUTTON */}

        <a
          href="tel:+917227977917"
          className="btn btn-primary mobile-overlay__cta"
        >
          Call +91-7227977917
        </a>

      </div>

    </header>
  );
}