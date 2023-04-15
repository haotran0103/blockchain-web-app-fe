/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Web3 from "web3";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export async function getServerSideProps(context) {
  try {
    console.log(context.query)

    const {id } = context.query;

    const postData = await fetch(`http://localhost:8080/apiv1/projects/${context.query}`);
    const post = await postData.sendToken.json();
    console.log(post)  
    
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return {
      props: {},
    };
  }
}


  
  const conductTransaction = ({ post }) => {
    const [accountAddress, setAccountAddress] = useState("");
    const [amount, setamount] = useState("");
    const [noiDung, setnoiDung] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/apiv1/transactionCtrl",
                projectData
              );
              const projectData = {
                recipientAddress: accountAddress,
                amount: amount,
            
              }
          const data = await res.json();
          window.location.href = data.successUrl; // redirect to payment gateway URL
        } catch (error) {
          console.error(error);
        }
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
                  <h2>Chuyển Token</h2>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      id="amount"
                      placeholder="Nhập vào số lượng token muốn chuyển"
                      type="number"
                      value={amount}
                      onChange={(e) => setamount(e.target.value)}
                      className="form-control"
                      style={{ maxWidth: "400px", margin: "auto" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description"></label>
                    <input
                      id="description"
                      placeholder="Địa chỉ ví muốn gửi"
                      type="text"
                      value={accountAddress}
                      className="form-control"
                      style={{ maxWidth: "400px", margin: "auto" }}
                    />
                  </div>
                  <div className="form-group text-center">
                    <label htmlFor="submita"></label>
                    <button
                      style={{ marginTop: 10 }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
  }
  export default conductTransaction;