import React from "react";
import { Link } from "react-router-dom";
import "./Infrastructure.css";

import infrastructureCover from "../assets/infrastructure/WhatsApp Image 2026-09-05 at 3_57_32 PM.avif";
import manufacturingImage from "../assets/infrastructure/WhatsApp Image 2026-09-05 at 4_05_25 PM.avif";
import inspectionImage from "../assets/infrastructure/WhatsApp Image 2026-09-05 at 4_11_37 PM.avif";
import machiningImage from "../assets/infrastructure/WhatsApp Image 2026-09-05 at 4_19_59 PM.avif";
import materialImage from "../assets/infrastructure/WhatsApp Image 2026-09-05 at 4_26_16 PM.avif";

const INFRASTRUCTURE_ITEMS = [
  {
    number: "01",
    title: "Manufacturing Facilities",
    image: manufacturingImage,
    description:
      "Our manufacturing facilities support precision production of industrial valves and instrumentation products with consistent quality and reliable performance.",
  },
  {
    number: "02",
    title: "Inspection & Testing",
    image: inspectionImage,
    description:
      "Our manufacturing facilities support precision production of industrial valves and instrumentation products with consistent quality and reliable performance.",
  },
  {
    number: "03",
    title: "Precision Machining",
    image: machiningImage,
    description:
      "Precision machining capabilities support accurate manufacturing of components for industrial valves and instrumentation products.",
  },
  {
    number: "04",
    title: "Material & Component Quality",
    image: materialImage,
    description:
      "We focus on suitable materials and component quality to support reliable manufacturing and consistent product performance.",
  },
];

export default function Infrastructure() {
  return (
    <main className="infrastructure-page">

      {/* =========================================
          HERO
      ========================================== */}

      <section
        className="infrastructure-hero"
        style={{
          backgroundImage: `url(${infrastructureCover})`,
        }}
      >
        <div className="infrastructure-hero__overlay" />

        <div className="container infrastructure-hero__content">

          <div className="eyebrow">
            Our Infrastructure
          </div>

          <h1>
            Manufacturing capability
            <br />
            built around precision
          </h1>

          <p>
            UMA INDUSTRIES is equipped with suitable manufacturing and
            inspection facilities to support precision engineering and
            reliable industrial product manufacturing.
          </p>

        </div>
      </section>


      {/* =========================================
          INTRO
      ========================================== */}

      <section className="section infrastructure-intro">

        <div className="container">

          <div className="section-head infrastructure-intro__head">

            <div className="eyebrow">
              Our Infrastructure
            </div>

            <h2>
              Facilities supporting precision
              industrial manufacturing
            </h2>

            <p>
              UMA INDUSTRIES is equipped with suitable manufacturing and
              inspection facilities to support precision engineering and
              reliable industrial product manufacturing.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          INFRASTRUCTURE CARDS
      ========================================== */}

      <section className="infrastructure-list">

        <div className="container">

          <div className="infrastructure-grid">

            {INFRASTRUCTURE_ITEMS.map((item) => (
              <article
                className="infrastructure-card"
                key={item.number}
              >

                <div className="infrastructure-card__image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="infrastructure-card__number">
                    {item.number}
                  </span>

                </div>


                <div className="infrastructure-card__content">

                  <span className="infrastructure-card__label">
                    INFRASTRUCTURE
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          PRODUCTION CAPABILITY
      ========================================== */}

      <section className="section-dark production-capability">

        <div className="container">

          <div className="production-capability__head">

            <div className="eyebrow">
              Production Capability
            </div>

            <h2>
              Consistent manufacturing,
              precision engineering and reliable delivery
            </h2>

            <p>
              Our production capabilities are focused on consistent
              manufacturing, precision engineering and reliable delivery
              of industrial products.
            </p>

          </div>


          <div className="production-capability__grid">

            <div className="production-capability__item">

              <span>01</span>

              <h3>
                Consistent Manufacturing
              </h3>

              <p>
                Manufacturing processes focused on consistent product
                quality and dependable production.
              </p>

            </div>


            <div className="production-capability__item">

              <span>02</span>

              <h3>
                Precision Engineering
              </h3>

              <p>
                Precision-focused manufacturing to support accurate
                industrial components.
              </p>

            </div>


            <div className="production-capability__item">

              <span>03</span>

              <h3>
                Reliable Delivery
              </h3>

              <p>
                Production capabilities focused on reliable supply and
                dependable delivery of industrial products.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================== */}

      <section className="infrastructure-cta">

        <div className="container infrastructure-cta__inner">

          <div className="eyebrow">
            Manufacturing &amp; Engineering
          </div>

          <h2>
            Looking for a reliable
            industrial manufacturing partner?
          </h2>

          <p>
            Contact UMA INDUSTRIES for your industrial valve and
            instrumentation requirements. Our team will be happy to
            discuss your product and supply needs.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary infrastructure-cta__button"
          >
            Send Enquiry
          </Link>

        </div>

      </section>

    </main>
  );
}