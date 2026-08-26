import { useState } from "react";
import "./App.css";

function App() {
  const [bookingCount, setBookingCount] = useState(12);

  const services = [
    {
      title: "Acrylic Extensions",
      desc: "Long-lasting, strong extensions with a natural look.",
      img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1816e334-c9ba-514d-a2db-b5abd56de3f2/bb0fd7c6-d162-546d-9fe2-cdbd585595ad.jpg"
    },
    {
      title: "Gel Extensions",
      desc: "Lightweight, flexible, and glossy finish.",
      img: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e28471c364f2e5eb3e713035d0a9038cf32cd32b30c09f82c2bf3aea90089609899a77fcf4dcf6e2489c6d86892ae788b16d6b56356a3ce4aab2844eef7fe3793"
    },
    {
      title: "Polygel Extensions",
      desc: "Hybrid of acrylic and gel—strong yet lightweight.",
      img: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e639c05845bb3656ad63992455e06f221df88f41e7e2d95c032e737da5320938ac5f4f28faea548ed04a2545d84efb2ea572d6d414143e09815701e1dda20c243"
    },
    {
      title: "Nail Art & Design",
      desc: "Custom designs, ombre, glitter, and hand-painted art.",
      img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3094eb23-bc5d-5102-a897-4aebd19122d9/6f73f8db-b49c-5551-8b6c-a95abac11ab2.jpg"
    }
  ];

  const galleryImages = [
    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1816e334-c9ba-514d-a2db-b5abd56de3f2/bb0fd7c6-d162-546d-9fe2-cdbd585595ad.jpg",
    "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e28471c364f2e5eb3e713035d0a9038cf32cd32b30c09f82c2bf3aea90089609899a77fcf4dcf6e2489c6d86892ae788b16d6b56356a3ce4aab2844eef7fe3793",
    "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e639c05845bb3656ad63992455e06f221df88f41e7e2d95c032e737da5320938ac5f4f28faea548ed04a2545d84efb2ea572d6d414143e09815701e1dda20c243",
    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3094eb23-bc5d-5102-a897-4aebd19122d9/6f73f8db-b49c-5551-8b6c-a95abac11ab2.jpg"
  ];

  return (
    <div className="app">
      <header className="hero">
        <h1>Glow Nail Studio</h1>
        <p>Premium nail extensions & custom nail art</p>
        <a href="#book" className="cta-btn">Book Appointment</a>
      </header>

      <main className="main-content">
        {/* Services */}
        <section id="services" className="section-card">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <img src={s.img} alt={s.title} className="service-img" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-card">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <img key={i} src={src} alt="Nail extension design" className="gallery-img" />
            ))}
          </div>
        </section>

        {/* Price List */}
        <section id="prices" className="section-card">
          <h2>Price List</h2>
          <ul className="price-list">
            <li>
              <span>Acrylic Full Set</span>
              <span className="price">₹1,499</span>
            </li>
            <li>
              <span>Gel Extensions</span>
              <span className="price">₹1,799</span>
            </li>
            <li>
              <span>Polygel Full Set</span>
              <span className="price">₹1,999</span>
            </li>
            <li>
              <span>Nail Art (per nail)</span>
              <span className="price">₹99</span>
            </li>
            <li>
              <span>Refill / Infill</span>
              <span className="price">₹999</span>
            </li>
          </ul>
        </section>

        {/* Booking Demo */}
        <section id="book" className="section-card interactive">
          <h2>Book Your Slot</h2>
          <p>Click to simulate a booking request.</p>
          <div className="booking-box">
            <p className="booking-text">
              {bookingCount} appointments booked today
            </p>
            <button
              className="book-btn"
              onClick={() => setBookingCount((c) => c + 1)}
            >
              Book Now
            </button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-card">
          <h2>Contact Us</h2>
          <p>📍 Shop 12, Main Market, Delhi</p>
          <p>📞 +91 98XXX XXXXX</p>
          <p>📸 @glownailstudio</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Glow Nail Studio • Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;