import Link from "next/link";
import Web3 from "web3";
import React, { useState } from "react";
const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMenuMobie, setShowMenuMobie] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const getAccountAddress = async () => {
    if (typeof window !== "object") {
      // xử lý lỗi hoặc thực hiện các hành động khác
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      setAccountAddress(accounts[0]);
    }
  };

  getAccountAddress();

  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      style={{ maxHeight: "50px", paddingTop: "50px" }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="logo-header">
          <Link href="/" style={{ paddingRight: "50px" }}>
            <img src="assets/img/logo2.png" alt="logo" />
          </Link>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/arts">Nghệ thuật</Link>
            </li>
            <li>
              <Link href="/comics-and-illustration">Truyện & truyện Tranh</Link>
            </li>
            <li>
              <Link href="/design-tech">Thiết kế và công nghệ</Link>
            </li>
            <li>
              <Link href="/film">Phim</Link>
            </li>
            <li>
              <Link href="/games">Games</Link>
            </li>
            <li>
              <Link href="/tuThien">Từ thiện</Link>
            </li>
          </ul>
        </nav>
        <nav
          id="navbar"
          className={` ${
            showNav ? "navbar mobile-nav-show" : "navbar mobile-nav-hide"
          }`}
        >
          <ul>
            <li>
              <Link href="/arts">Arts</Link>
            </li>
            <li>
              <Link href="/comics-and-illustration">
                Comics &amp; Illustration
              </Link>
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
        <div className="header-social-links">
          {accountAddress ? (
            <>
              <Link href={`/user/${accountAddress}`}>trang cá nhân</Link>
              <Link href="/payment/order"> nạp token </Link>
            </>
          ) : (
            <>
              <Link href="/login">Đăng nhập</Link>
            </>
          )}
        </div>
        {showMenuMobie && (
          <>
            <i
              className="mobile-nav-toggle ${showNav ? 'mobile-nav-hide' : 'mobile-nav-show'} bi bi-list"
              onClick={toggleNav}
            />
            <i
              className="mobile-nav-toggle ${showNav ? 'mobile-nav-show' : 'mobile-nav-hide'} d-none bi bi-x"
              onClick={toggleNav}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
