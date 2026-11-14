import React, { useState } from "react";
import { CONTACT } from "../data/products";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up — this is where a form service or API call would go.
    setSent(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact Us</div>
          <h1>Tell us what you need — we'll take it from there</h1>
          <p>
            Get in touch with UMA Industries for your industrial valve and
            instrumentation requirements. Share your specification and our
            team will respond with product information and pricing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="panel contact-card">
              <span className="tag-code">Address</span>
              <p>{CONTACT.address}</p>
            </div>
            <div className="panel contact-card">
              <span className="tag-code">Email</span>
              <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            </div>
            <div className="panel contact-card">
              <span className="tag-code">Phone</span>
              <p>
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/-/g, "")}`} style={{ display: "block" }}>
                    {p}
                  </a>
                ))}
              </p>
            </div>
            <div className="panel contact-card">
              <span className="tag-code">Sale &amp; Export</span>
              <p><a href={`tel:${CONTACT.saleExport.replace(/-/g, "")}`}>{CONTACT.saleExport}</a></p>
            </div>
          </div>

          <div className="panel contact-form-panel">
            <h2>Send us an enquiry</h2>
            <p className="contact-form-panel__lead">
              Please share your requirements with us — our team will get back
              to you as soon as possible.
            </p>

            {sent ? (
              <div className="form-success">
                Thanks — your enquiry has been noted. We'll get back to you
                on {form.email || "the details you provided"} shortly.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input type="text" required value={form.name} onChange={update("name")} />
                  </label>
                  <label>
                    Phone
                    <input type="tel" value={form.phone} onChange={update("phone")} />
                  </label>
                </div>
                <label>
                  Email
                  <input type="email" required value={form.email} onChange={update("email")} />
                </label>
                <label>
                  Requirement
                  <textarea
                    rows={5}
                    required
                    placeholder="Product, size, pressure rating, quantity..."
                    value={form.message}
                    onChange={update("message")}
                  />
                </label>
                <button type="submit" className="btn btn-primary">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame frame">
            <iframe
              title="UMA Industries location"
              src="https://www.google.com/maps?q=39%2C%20Omkar%20Estate%2C%20Near%20Mahadev%20Estate%2C%20CTM%20Ramol%20Road%2C%20Ramol%2C%20Ahmedabad%2C%20382449&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
