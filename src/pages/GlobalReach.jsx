import React from "react";
import { Link } from "react-router-dom";
import "./GlobalReach.css";

import portImage from "../assets/logo/WhatsApp Image 2026-09-08 at 22.22.39.jpeg";
import factoryImage from "../assets/logo/WhatsApp Image 2026-09-08 at 22.22.38.jpeg";
import shippingImage from "../assets/logo/WhatsApp Image 2026-09-08 at 22.22.39.jpeg";

export default function GlobalReach() {
  return (
    <main className="global-reach-page">

      {/* =================================
          HERO / COVER
      ================================= */}

      <section
        className="global-hero"
        style={{
          backgroundImage: `url(${portImage})`,
        }}
      >
        <div className="global-hero__overlay"></div>

        <div className="container global-hero__content">
          <div className="eyebrow">
            Global Reach
          </div>

          <h1>
            Reliable industrial solutions
            <br />
            for global markets
          </h1>

          <p>
            UMA INDUSTRIES serves customers across domestic and
            international markets, providing reliable industrial
            valves and instrumentation products with a focus on
            quality, precision and dependable service.
          </p>
        </div>
      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="section">
        <div className="container global-intro">

          <div className="global-intro__image frame">
            <img
              src={factoryImage}
              alt="Industrial manufacturing facility"
            />
          </div>

          <div className="global-intro__content">

            <div className="eyebrow">
              Global Reach
            </div>

            <h2>
              Supporting industrial requirements
              across markets
            </h2>

            <p>
              UMA INDUSTRIES serves customers across domestic
              and international markets, providing reliable
              industrial valves and instrumentation products
              with a focus on quality, precision and dependable
              service.
            </p>

            <p>
              Our approach is built around understanding customer
              requirements and supporting them with dependable
              products and responsive service.
            </p>

          </div>

        </div>
      </section>


      {/* =================================
          EXPORT & INTERNATIONAL MARKETS
      ================================= */}

      <section className="section global-feature-section">

        <div className="container global-feature">

          <div className="global-feature__content">

            <div className="eyebrow">
              Export &amp; International Markets
            </div>

            <h2>
              Serving international industrial
              requirements
            </h2>

            <p>
              UMA INDUSTRIES supplies industrial valves and
              instrumentation products to customers in
              international markets, supporting their
              requirements with reliable products, consistent
              quality and dependable service.
            </p>

          </div>

          <div className="global-feature__image frame">
            <img
              src={shippingImage}
              alt="International shipping and global supply"
            />
          </div>

        </div>

      </section>


      {/* =================================
          DOMESTIC & INTERNATIONAL SUPPLY
      ================================= */}

      <section className="section">

        <div className="container global-feature global-feature--reverse">

          <div className="global-feature__image frame">
            <img
              src={portImage}
              alt="International port and industrial logistics"
            />
          </div>

          <div className="global-feature__content">

            <div className="eyebrow">
              Domestic &amp; International Supply
            </div>

            <h2>
              Reliable supply for diverse
              industrial requirements
            </h2>

            <p>
              We support industrial requirements across
              domestic and international markets with reliable
              products, responsive service and a commitment to
              timely supply.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          RELIABLE GLOBAL SUPPLY
      ================================= */}

      <section className="section global-supply">

        <div className="container">

          <div className="global-supply__grid">

            <div className="global-supply__image frame">
              <img
                src={factoryImage}
                alt="Industrial products manufacturing"
              />
            </div>

            <div className="global-supply__content">

              <div className="eyebrow">
                Reliable Global Supply
              </div>

              <h2>
                Dependable products and service
                support
              </h2>

              <p>
                Our focus is on providing dependable industrial
                products and service support to meet the
                requirements of customers in domestic and
                international markets.
              </p>

              <div className="global-supply__points">

                <div>
                  <span>01</span>
                  <strong>Reliable Products</strong>
                  <p>
                    Industrial valves and instrumentation
                    products for demanding applications.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Consistent Quality</strong>
                  <p>
                    Focus on product quality and dependable
                    performance.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Responsive Service</strong>
                  <p>
                    Support for customer requirements and
                    supply needs.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="global-cta">

        <div className="container global-cta__inner">

          <div className="eyebrow">
            Ready to Discuss Your Requirement?
          </div>

          <h2>
            Let’s discuss your industrial
            valve and instrumentation needs.
          </h2>

          <p>
            Contact UMA INDUSTRIES for your industrial valve
            and instrumentation requirements. Our team will
            be happy to discuss your product and supply needs.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary global-cta__button"
          >
            Send Enquiry
          </Link>

        </div>

      </section>

    </main>
  );
}