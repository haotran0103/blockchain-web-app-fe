import Link from 'next/link'
import React from 'react'

export default function header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <Link className="logo d-flex align-items-center  me-auto me-lg-0" href='/'>
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <i className="bi bi-camera" />
        <h1>Cryptic Titan</h1>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link href="/arts">Arts</Link>
          </li>
          <li>
            <Link href="/comics-and-illustration">Comics &amp; Illustration</Link>
          </li>
          <li>
            <Link href="/design-tech">Design &amp; Tech</Link>
          </li>
          <li>
            <Link href="/film">Film</Link>
          </li>
          <li>
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <div className="header-social-links">
        <Link href='/login'>
          login
        </Link>
        <Link href='/register'>
          register
        </Link>
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
