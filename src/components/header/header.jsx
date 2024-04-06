import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul className="header-btn">
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <a href="#">realestate@home.com</a>
                </li>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <a href="#">15/a New Tower, Mumbai</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 mt-2 mb-2">
              <div className="btn">
                <button className="header-top-btn">Login</button>
                <button className="header-top-btn">Register</button>
                <button className="header-top-btn">Add Listing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src="https://codewithsadee.github.io/homeverse/assets/images/logo.png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon">
              <i className="fa fa-bars" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Property
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="header-actions">
            <button className="header-actions-btn">
            <i class="fa fa-duotone fa-magnifying-glass"></i>
            </button>
            <button className="header-actions-btn">
            <i class="fa fa-duotone fa-user"></i>
            </button>
            <button className="header-actions-btn">
            <i class="fa fa-duotone fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
