;
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
const PaymentFailure = () => {
    const [accountAddress, setAccountAddress] = useState("");
    useEffect(() => {
      const getAccountAddress = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccountAddress(accounts[0]);
        }
      };
      getAccountAddress();
    }, []);
  
  return (
    <>
      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
        data-aos-delay={1500}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 style={{ fontFamily: "auto" }}>
                Chúng tôi là
                <hao style={{ color: "#e3b11e ", padding: "6px" }}>
                  Cryptic Titan
                </hao>
                nơi khởi nguồn của các nhà đầu tư triệu đô
              </h2>
              <p>
                Đầu tư theo cách bạn muốn, hãy đầu tư vào các dự án khởi nghiệp
                ở đây, bạn sẽ trở thành tỉ phú ngay bâu giờ hoặc không bao giờ
              </p>
              {accountAddress ? (
                <Link href="/create-project" className="btn-get-started">
                  bắt đầu dự án đầu tiên
                </Link>
              ) : (
                <Link href="/login" className="btn-get-started">
                  bắt đầu dự án đầu tiên
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <h1>Thanh thất bại công!</h1>;
    </>
  );
};

export default PaymentFailure;
