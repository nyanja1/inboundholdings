import { useState, useEffect } from "react";
import "../styles/Home.css";

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
    <section className="home-section">
      <div className="home-overlay"></div>
      <div className="home-content">
        <div className="container">
          <div
            className="home-slider"
            style={{
              background: `url('${slides[currentSlide].image}') no-repeat center/cover`,
            }}
          >
            <h2>{slides[currentSlide].text}</h2>
            <p>Your trusted partner for logistics in East Africa.</p>
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
