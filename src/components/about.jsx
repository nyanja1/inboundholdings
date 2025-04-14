function About() {
  const employees = [
    {
      name: "Jane Mwangi",
      role: "CEO",
      email: "jane@inboundholdingsea.com",
      phone: "+254 700 123456",
    },
    {
      name: "Sam Okoth",
      role: "Operations Manager",
      email: "sam@inboundholdingsea.com",
      phone: "+254 711 654321",
    },
    {
      name: "Lisa Wanjiru",
      role: "Support Lead",
      email: "lisa@inboundholdingsea.com",
      phone: "+254 722 987654",
    },
  ];

  return (
    <section
      style={{
        background: `url('https://images.unsplash.com/photo-14973662105479-4275897d9f1e') no-repeat center/cover`,
        padding: "4rem 0",
        flex: 1,
      }}
    >
      <div style={{ background: "rgba(255, 255, 255, 0.9)", padding: "2rem" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            About InboundLogistics
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Founded in 2025, we’re East Africa’s go-to logistics provider,
            blending local expertise with global standards.
          </p>
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Our Team
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {employees.map((emp, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.2rem",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  {emp.name}
                </h4>
                <p style={{ color: "#007bff", marginBottom: "0.5rem" }}>
                  {emp.role}
                </p>
                <p style={{ color: "#555", fontSize: "0.9rem" }}>
                  <i className="fas fa-envelope"></i> {emp.email}
                </p>
                <p style={{ color: "#555", fontSize: "0.9rem" }}>
                  <i className="fas fa-phone"></i> {emp.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
