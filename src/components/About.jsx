import "../styles/About.css";

function About() {
  const employees = [
    {
      name: "Jeremy Otieno",
      role: "Director",
      email: "jeremy@inboundholdingsea.com",
      phone: "+254 723432606",
    },
    {
      name: "Michael Amonde",
      role: "Operations Manager",
      email: "michael@inboundholdingsea.com",
      phone: "+254 711 654321",
    },
    {
      name: "Derrick Wasonga",
      role: "Support Lead",
      email: "Derrick@inboundholdingsea.com",
      phone: "+254 722 987654",
    },
    {
      name: "Derrick Wasonga",
      role: "Support Lead",
      email: "Derrick@inboundholdingsea.com",
      phone: "+254 722 987654",
    },
    {
      name: "Derrick Wasonga",
      role: "Support Lead",
      email: "Derrick@inboundholdingsea.com",
      phone: "+254 722 987654",
    },
    {
      name: "Derrick Wasonga",
      role: "Support Lead",
      email: "Derrick@inboundholdingsea.com",
      phone: "+254 722 987654",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-overlay">
        <div className="about-container">
          <h2>About InboundLogistics</h2>
          <p>
            We’re East Africa’s go-to logistics provider, blending local
            expertise with global standards.
          </p>
          <h3>Our Team</h3>
          <div className="employee-grid">
            {employees.map((emp, index) => (
              <div key={index} className="employee-card">
                <h4>{emp.name}</h4>
                <p>{emp.role}</p>
                <p className="contact">
                  <i className="fas fa-envelope"></i> {emp.email}
                </p>
                <p className="contact">
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
