import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        background: "#222",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <div className="brand" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/logomarveltech.jpg"
          alt="MarvelTech Logo"
          style={{ height: "70px", width: "80px", marginRight: "50px" }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>MarvelTech</span>
      </div>

      {/* Navigation */}
      <nav style={{ marginLeft: "auto" }}>
        <a
          href="#products"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Products
        </a>
        <a
          href="#about"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          About Us
        </a>
        <a
          href="#company-details"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Our Details
        </a>
        <a
          href="#contact"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

