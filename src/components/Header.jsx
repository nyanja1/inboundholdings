import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{
        background: "#007bff",
        color: "white",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>InboundLogistics</h1>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: isOpen ? "block" : { xs: "block", md: "none" },
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          <nav
            style={{ display: isOpen ? "block" : { xs: "none", md: "block" } }}
          >
            <ul
              style={{
                listStyle: "none",
                display: isOpen ? "block" : "flex",
                gap: "1.5rem",
                padding: isOpen ? "1rem 0" : "0",
              }}
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "white",
                    textDecoration: "none",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "white",
                    textDecoration: "none",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "white",
                    textDecoration: "none",
                  })}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "white",
                    textDecoration: "none",
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/documents"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "white",
                    textDecoration: "none",
                  })}
                >
                  Documents
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
