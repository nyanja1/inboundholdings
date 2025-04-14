import { useState, useEffect } from "react";

function Home() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3a8dd22",
      text: "Reliable Logistics Solutions",
    },
    {
      image: "https://images.unsplash.com/photo-1596727147705-61a6a4e82535",
      text: "Fast Freight Transport",
    },
    {
      image: "https://images.unsplash.com/photo-1563201516-67400e7f9341",
      text: "Secure Warehousing",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      style={{
        background: `url('https://images.unsplash.com/photo-1586528116149-3feb3a58e513') no-repeat center/cover`,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        flex: 1,
        position: "relative",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="container">
          <div
            style={{
              background: `url('${slides[currentSlide].image}') no-repeat center/cover`,
              padding: "4rem 2rem",
              borderRadius: "10px",
              maxWidth: "800px",
              margin: "0 auto",
              transition: "background 0.5s ease",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              {slides[currentSlide].text}
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Your trusted partner for logistics in East Africa.
            </p>
            <a href="/services" className="btn">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
