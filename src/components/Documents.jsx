function Documents() {
    const docs = [
      { title: 'Logistics License', number: 'EA-LOG-2025-001', issuer: 'East Africa Transport Authority' },
      { title: 'Customs Certification', number: 'CUS-KE-2025-123', issuer: 'Kenya Revenue Authority' },
      { title: 'Trade Membership', number: 'TM-2025-456', issuer: 'EA Logistics Association' },
    ];
  
    return (
      <section
        style={{
          background: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40') no-repeat center/cover`,
          padding: '4rem 0',
          flex: 1,
        }}
      >
        <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '2rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Company Documents</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {docs.map((doc, index) => (
                <div key={index} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '0.5rem' }}>{doc.title}</h3>
                  <p style={{ color: '#555' }}>Number: {doc.number}</p>
                  <p style={{ color: '#555' }}>Issuer: {doc.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Documents;