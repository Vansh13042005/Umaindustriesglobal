import React from "react";
import { Link } from "react-router-dom";
import "./Quality.css";

import qualityCover from "../assets/Quality/WhatsApp Image 2026-09-08 at 22.24.13 (2).jpeg";
import precisionImage from "../assets/Quality/WhatsApp Image 2026-09-08 at 22.24.13 (1).jpeg";
import performanceImage from "../assets/Quality/WhatsApp Image 2026-09-08 at 22.24.13.jpeg";

export default function Quality() {
  return (
    <main className="quality-page">

      {/* =================================
          HERO / COVER
      ================================= */}

      <section
        className="quality-hero"
        style={{
          backgroundImage: `url(${qualityCover})`,
        }}
      >
        <div className="quality-hero__overlay"></div>

        <div className="container quality-hero__content">

          <div className="eyebrow">
            Quality &amp; Commitment
          </div>

          <h1>
            Quality built into
            <br />
            every component
          </h1>

          <p>
            At UMA INDUSTRIES, quality is a key part of our manufacturing
            process. We focus on precision, reliable performance and
            consistent product quality to meet industrial requirements.
          </p>

        </div>
      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="section">
        <div className="container quality-intro">

          <div className="quality-intro__content">

            <div className="eyebrow">
              Quality &amp; Commitment
            </div>

            <h2>
              Consistent quality for
              demanding applications
            </h2>

            <p>
              Our products undergo careful inspection and quality checks
              to ensure reliable performance and consistent manufacturing
              standards.
            </p>

          </div>

          <div className="quality-intro__image frame">
            <img
              src={qualityCover}
              alt="UMA Industries quality manufacturing"
            />
          </div>

        </div>
      </section>


      {/* =================================
          PRECISION & INSPECTION
      ================================= */}

      <section className="section quality-feature-section">

        <div className="container quality-feature">

          <div className="quality-feature__image frame">
            <img
              src={precisionImage}
              alt="Precision inspection and measurement"
              loading="lazy"
            />
          </div>

          <div className="quality-feature__content">

            <div className="eyebrow">
              Precision &amp; Inspection
            </div>

            <h2>
              Precision manufacturing
              backed by inspection
            </h2>

            <p>
              We focus on precision manufacturing and thorough inspection
              to maintain consistent quality and dependable product
              performance.
            </p>

            <div className="quality-feature__points">

              <div>
                <span>01</span>
                <strong>Precision Manufacturing</strong>
                <p>
                  Focus on accuracy and consistent manufacturing
                  requirements.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Careful Inspection</strong>
                <p>
                  Products are checked to support consistent
                  manufacturing quality.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Reliable Performance</strong>
                <p>
                  Quality-focused production for dependable
                  industrial performance.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          RELIABLE PERFORMANCE
      ================================= */}

      <section className="section">

        <div className="container quality-feature quality-feature--reverse">

          <div className="quality-feature__content">

            <div className="eyebrow">
              Reliable Performance
            </div>

            <h2>
              Built for dependable
              long-term performance
            </h2>

            <p>
              Our quality-focused manufacturing approach helps deliver
              reliable performance and long service life in demanding
              industrial applications.
            </p>

            <div className="quality-performance-box">

              <div className="quality-performance-number">
                01
              </div>

              <div>
                <strong>
                  Quality-focused Manufacturing
                </strong>

                <p>
                  Consistent attention to manufacturing quality and
                  dependable product performance.
                </p>
              </div>

            </div>

            <div className="quality-performance-box">

              <div className="quality-performance-number">
                02
              </div>

              <div>
                <strong>
                  Industrial Reliability
                </strong>

                <p>
                  Designed to support reliable operation in demanding
                  industrial environments.
                </p>
              </div>

            </div>

          </div>

          <div className="quality-feature__image frame">
            <img
              src={performanceImage}
              alt="Industrial valve manufacturing"
              loading="lazy"
            />
          </div>

        </div>

      </section>


      {/* =================================
          QUALITY VALUES
      ================================= */}

      <section className="section-dark quality-values">

        <div className="container">

          <div className="section-head">

            <div className="eyebrow">
              Our Quality Focus
            </div>

            <h2>
              Precision, inspection and
              reliable performance
            </h2>

          </div>

          <div className="quality-values__grid">

            <div className="quality-value-card">
              <span>01</span>
              <h3>Precision</h3>
              <p>
                Focus on precision manufacturing to maintain consistent
                product quality and performance.
              </p>
            </div>

            <div className="quality-value-card">
              <span>02</span>
              <h3>Inspection</h3>
              <p>
                Careful inspection and quality checks throughout the
                manufacturing process.
              </p>
            </div>

            <div className="quality-value-card">
              <span>03</span>
              <h3>Reliability</h3>
              <p>
                Quality-focused manufacturing for dependable industrial
                performance and long service life.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="quality-cta">

        <div className="container quality-cta__inner">

          <div className="eyebrow">
            Quality &amp; Commitment
          </div>

          <h2>
            Looking for reliable
            industrial components?
          </h2>

          <p>
            Contact UMA INDUSTRIES for your industrial valve and
            instrumentation requirements. Our team will be happy to
            discuss your product and supply needs.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary quality-cta__button"
          >
            Send Enquiry
          </Link>

        </div>

      </section>

    </main>
  );
}