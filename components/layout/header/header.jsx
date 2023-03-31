import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

          <Link href='/' className="logo d-flex align-items-center me-auto me-lg-0">
            <i className="bi bi-camera"></i>
            <h1>Cryptic Titan</h1>
          </Link>
          <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/arts">
                Arts
              </Link>
            </li>
            <li>
              <Link href="/comics-and-illustration">
                Comics &amp; Illustration
              </Link>
            </li>
            <li>
              <Link href="/design-tech">
                Design &amp; Tech
              </Link>
            </li>
            <li>
              <Link href="/film">
                Film
              </Link>
            </li>
            <li>
              <Link href="/games">
                Games
              </Link>
            </li>
          </ul>
          </nav>

        <nav id="navbar" className={` ${showNav ? 'navbar mobile-nav-show' : 'navbar mobile-nav-hide'}`}>
          <ul>
            <li>
              <Link href="/arts">
                Arts
              </Link>
            </li>
            <li>
              <Link href="/comics-and-illustration">
                Comics &amp; Illustration
              </Link>
            </li>
            <li>
              <Link href="/design-tech">
                Design &amp; Tech
              </Link>
            </li>
            <li>
              <Link href="/film">
                Film
              </Link>
            </li>
            <li>
              <Link href="/games">
                Games
              </Link>
            </li>
          </ul>
        </nav>
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
        <i className="mobile-nav-toggle ${showNav ? 'mobile-nav-hide' : 'mobile-nav-show'} bi bi-list" onClick={toggleNav} />
        <i className="mobile-nav-toggle ${showNav ? 'mobile-nav-show' : 'mobile-nav-hide'} d-none bi bi-x" onClick={toggleNav} />
      </div>
    </header>
  );
}

export default Header;
