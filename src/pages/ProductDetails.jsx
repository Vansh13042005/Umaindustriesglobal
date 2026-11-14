import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { code } = useParams();

  // =====================================================
  // CURRENT PRODUCT
  // =====================================================

  const product = PRODUCTS.find(
    (p) => p.code === code
  );

  // =====================================================
  // NORMAL GALLERY
  // =====================================================

  const normalImages = useMemo(() => {
    if (!product) return [];

    if (
      Array.isArray(product.gallery) &&
      product.gallery.length > 0
    ) {
      return product.gallery.map((item, index) => {
        // gallery object
        if (
          typeof item === "object" &&
          item !== null
        ) {
          return {
            image: item.image,
            name:
              item.name ||
              `${product.name} ${index + 1}`,
            code:
              item.code ||
              product.code,
          };
        }

        // gallery string
        return {
          image: item,
          name: `${product.name} ${index + 1}`,
          code: product.code,
        };
      });
    }

    // single image product
    if (product.image) {
      return [
        {
          image: product.image,
          name: product.name,
          code: product.code,
        },
      ];
    }

    return [];
  }, [product]);

  // =====================================================
  // SELECTED IMAGE
  // =====================================================

  const [selectedImage, setSelectedImage] =
    useState("");

  // =====================================================
  // RESET IMAGE
  // =====================================================

  useEffect(() => {
    setSelectedImage(
      normalImages[0]?.image || ""
    );
  }, [code, normalImages]);

  // =====================================================
  // PRODUCT NOT FOUND
  // =====================================================

  if (!product) {
    return (
      <section className="section">
        <div className="container product-not-found">

          <h2>
            Product Not Found
          </h2>

          <p>
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="btn btn-primary"
          >
            Back to Products
          </Link>

        </div>
      </section>
    );
  }

  // =====================================================
  // TUBE FITTINGS
  // =====================================================

  if (product.code === "TF-06") {
    return (
      <>
        <section className="tube-fittings-section section">

          <div className="container">

            <Link
              to="/products"
              className="back-products"
            >
              ← Back to Products
            </Link>

            <div className="tube-fittings-header">

              <div className="eyebrow">
                Tube Fittings
              </div>

              <h1 className="tube-fittings-title">
                Tube Fittings Range
              </h1>

              <p className="tube-fittings-description">
                Explore our range of precision-engineered
                tube fittings designed for secure and
                leak-tight instrumentation connections.
              </p>

            </div>

            <div className="tube-fittings-grid">

              {normalImages.map(
                (item, index) => (

                  <div
                    className="tube-fitting-card"
                    key={`${item.code}-${index}`}
                  >

                    <div className="tube-fitting-image">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />

                    </div>

                    <div className="tube-fitting-card-content">

                      <span>
                        {item.name}
                      </span>

                      <strong>
                        {item.code}
                      </strong>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        <ProductCTA />
      </>
    );
  }

  if (product.code === "BV-02") {
  return (
    <>
      <section className="ball-valve-section section">
        <div className="container">

          <Link
            to="/products"
            className="back-products"
          >
            ← Back to Products
          </Link>

          <div className="ball-valve-header">

            <div className="eyebrow">
              Ball Valves
            </div>

            <h1 className="ball-valve-title">
              Ball Valves
            </h1>

            <p className="ball-valve-description">
              Explore our range of precision-engineered
              ball valves designed for reliable flow control,
              isolation and industrial applications.
            </p>

          </div>


          <div className="ball-valve-grid">

            {normalImages.map((item, index) => (
              <div
                className="ball-valve-card"
                key={`${item.code}-${index}`}
              >

                <div className="ball-valve-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>

                <div className="ball-valve-card-content">

                  <span>
                    {item.name}
                  </span>

                  <strong>
                    {item.code}
                  </strong>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <ProductCTA />
    </>
  );
}

  // =====================================================
  // INSTRUMENTATION NEEDLE VALVE
  // SAME STYLE AS TUBE FITTINGS
  // =====================================================

  if (product.code === "NV-01") {
    return (
      <>
        <section className="needle-valve-section section">

          <div className="container">

            <Link
              to="/products"
              className="back-products"
            >
              ← Back to Products
            </Link>

            <div className="needle-valve-header">

              <div className="eyebrow">
                Instrumentation Needle Valve
              </div>

              <h1 className="needle-valve-title">
                Instrumentation Needle Valve
              </h1>

              <p className="needle-valve-description">
                Explore our range of precision-engineered
                instrumentation needle valves designed for
                accurate flow control, isolation and reliable
                industrial applications.
              </p>

            </div>

            <div className="needle-valve-grid">

              {normalImages.map(
                (item, index) => (

                  <div
                    className="needle-valve-card"
                    key={`${item.code}-${index}`}
                  >

                    {/* IMAGE */}

                    <div className="needle-valve-image">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />

                    </div>

                    {/* NAME */}

                    <div className="needle-valve-card-content">

                      <span>
                        {item.name}
                      </span>

                      <strong>
                        {item.code}
                      </strong>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        <ProductCTA />
      </>
    );
  }

  // =====================================================
  // NORMAL PRODUCTS
  // =====================================================

  return (
    <>
      <section className="product-detail section">

        <div className="container">

          <Link
            to="/products"
            className="back-products"
          >
            ← Back to Products
          </Link>

          <div className="product-detail-grid">

            {/* LEFT */}

            <div className="product-gallery">

              <div className="product-main-image frame">

                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={
                      normalImages.find(
                        (item) =>
                          item.image === selectedImage
                      )?.name || product.name
                    }
                  />
                )}

              </div>

              <div className="product-image-cards">

                {normalImages.map(
                  (item, index) => (

                    <button
                      key={`${item.code}-${index}`}
                      type="button"
                      className={`product-image-card ${
                        selectedImage === item.image
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedImage(
                          item.image
                        )
                      }
                    >

                      <div className="product-image-card__image">

                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                        />

                      </div>

                      <div className="product-image-card__content">

                        <span>
                          {item.name}
                        </span>

                        <strong>
                          {item.code}
                        </strong>

                      </div>

                    </button>

                  )
                )}

              </div>

            </div>


            {/* RIGHT */}

            <div className="product-detail-content">

              <span className="tag-code">
                {product.code}
              </span>

              <h1>
                {product.name}
              </h1>

              <p className="product-description">
                {product.summary}
              </p>

              <div className="product-info">

                <div>
                  <strong>
                    Product Code
                  </strong>

                  <span>
                    {product.code}
                  </span>
                </div>

                <div>
                  <strong>
                    Category
                  </strong>

                  <span>
                    {product.category ||
                      "Industrial Products"}
                  </span>
                </div>

                <div>
                  <strong>
                    Application
                  </strong>

                  <span>
                    Instrumentation & Process Piping
                  </span>
                </div>

                <div>
                  <strong>
                    Quality
                  </strong>

                  <span>
                    Precision Engineered
                  </span>
                </div>

              </div>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Send Enquiry
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ACCESSORIES */}

      {Array.isArray(product.accessories) &&
        product.accessories.length > 0 && (

          <section className="accessories-section section">

            <div className="container">

              <div className="eyebrow">
                Accessories
              </div>

              <h2 className="accessories-title">
                Accessories Range
              </h2>

              <p className="accessories-description">
                Explore our range of precision-engineered
                accessories designed for reliable
                instrumentation and process applications.
              </p>

              <div className="accessories-grid">

                {product.accessories.map(
                  (item, index) => {

                    const accessory =
                      typeof item === "object"
                        ? item
                        : {
                            image: item,
                            name:
                              `Accessory ${index + 1}`,
                            code:
                              `ACC-${String(
                                index + 1
                              ).padStart(2, "0")}`,
                          };

                    return (
                      <div
                        className="accessory-card"
                        key={`${accessory.code}-${index}`}
                      >

                        <div className="accessory-image">

                          <img
                            src={accessory.image}
                            alt={accessory.name}
                            loading="lazy"
                          />

                        </div>

                        <div className="accessory-card-content">

                          <span>
                            {accessory.name}
                          </span>

                          <strong>
                            {accessory.code}
                          </strong>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </section>
        )}


      <ProductCTA />

    </>
  );
}


// =====================================================
// CTA COMPONENT
// =====================================================

function ProductCTA() {
  return (
    <section className="cta-band">

      <div className="container cta-band__inner">

        <h2>
          Need the right product?
        </h2>

        <p>
          Send us your requirement — size,
          connection type, material and application.
        </p>

        <Link
          to="/contact"
          className="btn btn-primary"
        >
          Send Enquiry
        </Link>

      </div>

    </section>
  );
}