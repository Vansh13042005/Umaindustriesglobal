import React, { useEffect, useState } from "react";
import "./gallery.css";

import crossUnion from "../assets/gallery/cross-union.png";
import needleValve from "../assets/gallery/needle-valve.png";
import ballValve from "../assets/gallery/ball-valve.png";
import pressureReliefValve from "../assets/gallery/pressure-relief-valve.png";
import checkValve from "../assets/gallery/check-valve.png";
import airHeader from "../assets/gallery/air-header.png";
import industrialFittings from "../assets/gallery/industrial-fittings.png";

const GALLERY = [
  {
    image: crossUnion,
    title: "Cross Union (CV)",
    category: "Fittings",
    spec: "SS 316 • 6000 PSI • 1/2 NPT",
  },
  {
    image: needleValve,
    title: "Multi Part Needle Valve",
    category: "Valves",
    spec: "SS 316 • 6000 PSI • 1/2 NPT",
  },
  {
    image: ballValve,
    title: "High Pressure Ball Valve",
    category: "Valves",
    spec: "SS 316 • 6000 PSI • 1/2 NPT",
  },
  {
    image: pressureReliefValve,
    title: "Pressure Relief Valve",
    category: "Valves",
    spec: "SS 316 • 6000 PSI • 1/2 NPT",
  },
  {
    image: checkValve,
    title: "Check Valve",
    category: "Valves",
    spec: "Precision Industrial Component",
  },
  {
    image: airHeader,
    title: "Air Header",
    category: "Manifolds",
    spec: "SS 316 • Max 6000 PSI • 1/2 NPT",
  },
];

const FILTERS = ["All", "Valves", "Fittings", "Manifolds"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visibleItems =
    filter === "All"
      ? GALLERY
      : GALLERY.filter((item) => item.category === filter);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container gallery-hero__inner">
          <div className="gallery-eyebrow">
            <span />
            Our Gallery
          </div>

          <h1 className="gallery-hero__title">
            Precision you can
            <br />
            <strong>see.</strong>
          </h1>

          <p>
            Explore UMA Industries' precision-engineered valves, fittings and
            instrumentation components, built for demanding industrial
            applications.
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-toolbar">
            <div>
              <span className="gallery-toolbar__label">PRODUCT GALLERY</span>
              <h2>Built with precision. Designed for performance.</h2>
            </div>

            <div className="gallery-filters" aria-label="Gallery filters">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? "is-active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {visibleItems.map((item, index) => (
              <button
                className={`gallery-card ${
                  index === 0 ? "gallery-card--large" : ""
                }`}
                key={item.title}
                type="button"
                onClick={() => setSelected(item)}
                aria-label={`Open ${item.title}`}
              >
                <div className="gallery-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="gallery-card__view">View +</span>
                </div>

                <div className="gallery-card__info">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.spec}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            className="gallery-lightbox__close"
            type="button"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <div
            className="gallery-lightbox__box"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selected.image} alt={selected.title} />
            <div className="gallery-lightbox__caption">
              <span>{selected.category}</span>
              <h3>{selected.title}</h3>
              <p>{selected.spec}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
