import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="index.html">
          <p class="d-inline font-weight-bold">HeatMap - React-leaflet</p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/pratheep-vr/"
              >
                <i class="fab fa-linkedin"></i> /pratheep-vr
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
