import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Folio
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}