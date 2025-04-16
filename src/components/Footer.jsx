import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3>InboundLogistics</h3>
            <p>Leading logistics solutions in East Africa since 2025.</p>
          </div>
          <div>
            <h3>Developed by</h3>
            <p>Elvis Amonde</p>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/254723432606"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">© Hatta Logistics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
