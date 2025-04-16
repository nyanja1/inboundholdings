import "../styles/Documents.css";

function Documents() {
  const docs = [
    {
      title: "Logistics License",
      number: "EA-LOG-2025-001",
      issuer: "East Africa Transport Authority",
    },
    {
      title: "Customs Certification",
      number: "CUS-KE-2025-123",
      issuer: "Kenya Revenue Authority",
    },
    {
      title: "Trade Membership",
      number: "TM-2025-456",
      issuer: "EA Logistics Association",
    },
  ];

  return (
    <section className="documents-section">
      <div className="documents-overlay">
        <div className="documents-container">
          <h2>Company Documents</h2>
          <div className="documents-grid">
            {docs.map((doc, index) => (
              <div key={index} className="document-card">
                <h3>{doc.title}</h3>
                <p>Number: {doc.number}</p>
                <p>Issuer: {doc.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documents;
