function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              InboundLogistics
            </h3>
            <p style={{ fontSize: "0.9rem" }}>
              Leading logistics solutions in East Africa since 2025.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Developed by
            </h3>
            <p style={{ fontSize: "0.9rem" }}>Elvis Amonde</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              Connect
            </h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i
                  className="fab fa-facebook-f"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="https://wa.me/254723432606"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i
                  className="fab fa-whatsapp"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i
                  className="fab fa-twitter"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <p
          style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.8rem" }}
        >
          © 2025 InboundLogistics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
