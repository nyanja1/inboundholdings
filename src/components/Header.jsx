import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <h1 className="header-logo">InboundLogistics</h1>
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <nav>
          <ul className={`nav-list ${isOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Documents
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
