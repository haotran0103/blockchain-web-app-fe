import React from 'react'

export default function header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <a
        href="index.html"
        className="logo d-flex align-items-center  me-auto me-lg-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <i className="bi bi-camera" />
        <h1>Cryptic Titan</h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="gallery-1.html">Arts</a>
          </li>
          <li>
            <a href="gallery-2.html">Comics &amp; Illustration</a>
          </li>
          <li>
            <a href="gallery-3.html">Design &amp; Tech</a>
          </li>
          <li>
            <a href="gallery-4.html">Film</a>
          </li>
          <li>
            <a href="gallery-5.html">Games</a>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <div className="header-social-links">
        <a href="#" className="twitter">
          <i className="bi bi-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram" />
        </a>
        <a href="#" className="linkedin">
          <i className="bi bi-linkedin" />
        </a>
      </div>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  )
}
