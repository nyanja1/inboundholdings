import "../styles/Services.css";

function Services() {
  const services = [
    {
      title: "Warehousing",
      desc: "Our state-of-the-art facilities offer secure storage with real-time inventory tracking, ensuring your goods are safe and accessible.",
      icon: "fa-warehouse",
    },
    {
      title: "Customs Clearance",
      desc: "We streamline border processes with expert documentation and compliance, saving you time and hassle.",
      icon: "fa-file-alt",
    },
    {
      title: "Freight Transport",
      desc: "Reliable road, air, and sea transport solutions tailored to your needs, delivering across East Africa.",
      icon: "fa-truck",
    },
  ];
  const industries = [
    { name: "Aviation", logo: "https://via.placeholder.com/100?text=Aviation" },
    { name: "Medicine", logo: "https://via.placeholder.com/100?text=Medicine" },
    { name: "Retail", logo: "https://via.placeholder.com/100?text=Retail" },
  ];

  return (
    <section className="services-section">
      <div className="services-overlay">
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <i className={`fas ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <img src={industry.logo} alt={`${industry.name} logo`} />
                <p>{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
