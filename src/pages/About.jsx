import React from "react";
import { Link } from "react-router-dom";
import { STATS, INDUSTRIES } from "../data/products";
import "./About.css";
import aboutHeroImage from "../assets/logo/WhatsApp Image 2026-09-08 at 22.33.07.jpeg";
const VALUES = [
  {
    title: "Precision Manufacturing",
    desc: "Precision-engineered components designed for demanding industrial applications, made to hold tolerance under real process conditions.",
  },
  {
    title: "Reliable Products",
    desc: "Durable and dependable solutions focused on long-term industrial performance, not just a passing inspection.",
  },
  {
    title: "Quality Assurance",
    desc: "Consistent attention to product quality, accuracy and manufacturing requirements at every stage of production.",
  },
  {
    title: "Customer Support",
    desc: "Dedicated support to help with product selection, technical requirements and enquiries — from first drawing to delivery.",
  },
];

export default function About() {
  return (
    <>
      <section
  className="page-hero about-hero"
  style={{
    backgroundImage: `url(${aboutHeroImage})`,
  }}
>
  <div className="about-hero__overlay"></div>

  <div className="container about-hero__content">
    <div className="eyebrow">About Us</div>

    <h1>
      Engineering that earns its place on the line
    </h1>

    <p>
      A professionally managed manufacturer and supplier of industrial
      valves and precision instrumentation products, built for
      reliability across domestic and global markets.
    </p>
  </div>
</section>

      <section className="section">
        <div className="container about-lead">
          <div className="frame about-lead__frame">
            <img
              src="https://static.wixstatic.com/media/a0c39b_76ce08dcba6b4ce2b69aaa8450e633eb~mv2.jpeg/v1/fill/w_980,h_522,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202026-08-26%20at%2010_42_30%20PM.jpeg"
              alt="UMA Industries manufacturing facility"
            />
          </div>
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>Manufacturing valves and instrumentation people can rely on</h2>
            <p className="lead-copy">
              UMA Industries is committed to delivering reliable industrial
              valves and precision engineering solutions for domestic and
              global markets. Every component we ship is built around a
              simple standard: it has to perform exactly as specified, every
              time, under pressure.
            </p>
            <p className="lead-copy">
              From needle valves and manifolds to diaphragm seals and tube
              fittings, our catalogue covers the instrumentation and
              flow-control components that keep process plants running
              safely — supported by a team that understands the technical
              detail behind every enquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Choose Us</div>
            <h2>What sits behind the UMA Industries name</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="panel values-grid__item" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Industries We Serve</div>
            <h2>Engineering solutions across critical process industries</h2>
          </div>
          <div className="industry-list">
            {INDUSTRIES.map((ind) => (
              <div className="industry-list__row" key={ind.name}>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Have a technical requirement?</h2>
          <p>Talk to our team about product selection, specifications and enquiries.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
