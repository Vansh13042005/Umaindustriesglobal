import React from "react";
import { Link } from "react-router-dom";
import "./Applications.css";

import applicationsCover from "../assets/logo/WhatsApp Image 2026-09-08 at 22.22.38 (1).jpeg";
import oilGas from "../assets/Application/WhatsApp Image 2026-09-04 at 7_56_05 PM.avif";
import chemicalPetrochemical from "../assets/Application/WhatsApp Image 2026-09-04 at 8_07_53 PM.avif";
import powerGeneration from "../assets/Application/WhatsApp Image 2026-09-04 at 8_16_26 PM.avif";
import pharmaceutical from "../assets/Application/WhatsApp Image 2026-09-05 at 3_04_51 PM.avif";
import waterTreatment from "../assets/Application/WhatsApp Image 2026-09-05 at 3_12_51 PM.avif";
import processIndustries from "../assets/Application/WhatsApp Image 2026-09-05 at 3_23_07 PM.avif";

const APPLICATIONS = [
  {
    number: "01",
    title: "Oil & Gas",
    image: oilGas,
    description:
      "Our industrial valves and instrumentation products are widely suited for oil and gas applications, supporting reliable flow control, pressure measurement and process monitoring.",
  },
  {
    number: "02",
    title: "Chemical & Petrochemical",
    image: chemicalPetrochemical,
    description:
      "Our valves and instrumentation products are suitable for chemical and petrochemical processes where precise control, reliable performance and safe operation are essential.",
  },
  {
    number: "03",
    title: "Power Generation",
    image: powerGeneration,
    description:
      "Reliable valves and instrumentation solutions for power generation applications, supporting pressure control, flow management and efficient plant operation.",
  },
  {
    number: "04",
    title: "Pharmaceutical",
    image: pharmaceutical,
    description:
      "Our valves and instrumentation products are suitable for pharmaceutical applications, supporting reliable process control, pressure measurement and monitoring.",
  },
  {
    number: "05",
    title: "Water Treatment",
    image: waterTreatment,
    description:
      "Our valves and instrumentation products are suitable for water treatment applications, supporting reliable flow control, pressure measurement and process monitoring.",
  },
  {
    number: "06",
    title: "Process Industries",
    image: processIndustries,
    description:
      "Our valves and instrumentation products are suitable for process industries, supporting reliable flow control, pressure measurement and process monitoring.",
  },
];

export default function Applications() {
  return (
    <main className="applications-page">

      {/* =================================
          HERO
      ================================= */}

      <section
        className="applications-hero"
        style={{
          backgroundImage: `url(${applicationsCover})`,
        }}
      >
        <div className="applications-hero__overlay"></div>

        <div className="container applications-hero__content">

          <div className="eyebrow">
            Applications
          </div>

          <h1>
            Reliable engineering across
            <br />
            critical process industries
          </h1>

          <p>
            Our products are designed to meet the demanding
            requirements of various industrial applications,
            delivering reliable performance, precision and
            long service life.
          </p>

        </div>
      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="section applications-intro">

        <div className="container">

          <div className="section-head applications-intro__head">

            <div className="eyebrow">
              Our Applications
            </div>

            <h2>
              Precision components for demanding
              industrial environments
            </h2>

            <p>
              Our products are designed to meet the demanding
              requirements of various industrial applications,
              delivering reliable performance, precision and
              long service life.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          APPLICATIONS GRID
      ================================= */}

      <section className="applications-list">

        <div className="container">

          <div className="applications-grid">

            {APPLICATIONS.map((application) => (
              <article
                className="application-card"
                key={application.number}
              >

                {/* IMAGE */}

                <div className="application-card__image">
                  <img
                    src={application.image}
                    alt={application.title}
                    loading="lazy"
                  />

                  <span className="application-card__number">
                    {application.number}
                  </span>
                </div>


                {/* CONTENT */}

                <div className="application-card__content">

                  <span className="application-card__label">
                    INDUSTRIAL APPLICATION
                  </span>

                  <h3>
                    {application.title}
                  </h3>

                  <p>
                    {application.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =================================
          RELIABLE SOLUTIONS
      ================================= */}

      <section className="section-dark applications-solutions">

        <div className="container applications-solutions__inner">

          <div className="eyebrow">
            Reliable Industrial Solutions
          </div>

          <h2>
            Built to support critical
            industrial applications
          </h2>

          <p>
            UMA INDUSTRIES provides reliable valve and
            instrumentation solutions for diverse industrial
            applications.
          </p>

          <div className="applications-solutions__points">

            <div>
              <span>01</span>
              <strong>Reliable Performance</strong>
              <p>
                Products designed for dependable industrial
                operation.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Precision Engineering</strong>
              <p>
                Precision components for demanding process
                environments.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Long Service Life</strong>
              <p>
                Designed with durability and consistent
                performance in mind.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="applications-cta">

        <div className="container applications-cta__inner">

          <div className="eyebrow">
            Industrial Requirements
          </div>

          <h2>
            Need a reliable solution for
            your application?
          </h2>

          <p>
            Contact UMA INDUSTRIES for your industrial valve
            and instrumentation requirements. Our team will be
            happy to discuss your product and supply needs.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary applications-cta__button"
          >
            Send Enquiry
          </Link>

        </div>

      </section>

    </main>
  );
}