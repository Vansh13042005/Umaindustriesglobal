import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ProductDetails from "./pages/ProductDetails";
import GlobalReach from "./pages/GlobalReach";
import Applications from "./pages/Applications";
import Quality from "./pages/Quality";
import Infrastructure from "./pages/Infrastructure";
import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      requestAnimationFrame(() => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        window.scrollTo(0, 0);
      });

      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function WhatsAppButton() {
  const phoneNumber = "917227977917";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello UMA Industries, I would like to enquire about your products."
  )}`;

  return (
    <a
      href={whatsappUrl}
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with UMA Industries on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.03c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
        />
        <path
          fill="currentColor"
          d="M16.02 3.2a12.76 12.76 0 0 0-10.9 19.4L3.2 28.8l6.37-1.87a12.77 12.77 0 1 0 6.45-23.73zm0 23.35c-2.05 0-4.06-.55-5.81-1.6l-.42-.25-3.78 1.11 1.13-3.68-.28-.43a10.58 10.58 0 1 1 9.16 4.85z"
        />
      </svg>

      <span className="whatsapp-tooltip">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:code"
            element={<ProductDetails />}
          />
          <Route path="/global-reach" element={<GlobalReach />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* WhatsApp floating button - all pages */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}