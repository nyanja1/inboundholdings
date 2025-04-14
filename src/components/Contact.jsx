import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with EmailJS Template ID
        { ...form, to_email: "info@inboundholdingsea.com" },
        "YOUR_PUBLIC_KEY" // Replace with EmailJS Public Key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Try again."));
  };

  return (
    <section
      style={{
        background: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') no-repeat center/cover`,
        padding: "4rem 0",
        flex: 1,
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
            Get in Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  minHeight: "100px",
                }}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
          {status && (
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: status.includes("Failed") ? "red" : "green",
              }}
            >
              {status}
            </p>
          )}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <p>
              <i className="fas fa-phone"></i> +254 723 432606
            </p>
            <p>
              <i className="fas fa-phone"></i> +254 732 208109
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
