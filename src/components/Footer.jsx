import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-2">
      <div className="container py-4 text-center">
        <p className="mb-1 text-muted small">
          © 2025 • Student CRUD Application
        </p>

        <h6 className="fw-semibold text-secondary">
          Made with <span className="text-danger">❤️</span> by{" "}
          <a
            href="https://sagar-portfolio-mern.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none fw-bold">Sagar Rathor
          </a>
        </h6>
        <p className="mt-2 text-semibold small">
          React • JavaScript • CRUD Project
        </p>
      </div>
    </footer>
  );
}

export default Footer;
