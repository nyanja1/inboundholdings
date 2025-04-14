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
    <section
      style={{
        background: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c') no-repeat center/cover`,
        padding: "4rem 0",
        flex: 1,
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ background: "rgba(255, 255, 255, 0.9)", padding: "2rem" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <i
                  className={`fas ${service.icon}`}
                  style={{
                    fontSize: "2rem",
                    color: "#007bff",
                    marginBottom: "1rem",
                  }}
                ></i>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#555" }}>{service.desc}</p>
              </div>
            ))}
          </div>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Industries We Serve
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            {industries.map((industry, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={industry.logo}
                  alt={`${industry.name} logo`}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "0.5rem",
                  }}
                />
                <p style={{ color: "#333" }}>{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
