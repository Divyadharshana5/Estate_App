import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <span>CasaCrafts</span>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            🌈
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
          <a href="#" aria-label="Facebook">
            📘
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} CasaCrafts. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
