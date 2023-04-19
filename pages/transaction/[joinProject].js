/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import LoadingOverlay from "react-loading-overlay";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import axios from "axios";
import Web3 from "web3";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";



export async function getServerSideProps(context) {
  try {
    const id_old = context.query;
    const id = id_old.joinProject;

    const postData = await axios.get(
      `http://localhost:8080/apiv1/projects/${id}`
    );
    const post = postData.data;

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
  const [amount, setamount] = useState(0);
  const [noiDung, setnoiDung] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getAccountAddress() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.window.ethereum.send("eth_requestAccounts")
          // Get first account address
          const accounts = await web3.eth.getAccounts();
          setAccountAddress(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getAccountAddress();
  }, []);
  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    try {
      const projectData = {
        amount: amount,
        toAddress: post.maVi,
        fromAddress: accountAddress,
      };
      console.log(projectData);
      const res = await axios.post(
        "http://localhost:8080/apiv1/transactionCtrl",
        projectData
      );
      // setLoading(false);
      const data = await res.json();
      window.location.href = data.successUrl; // redirect to payment gateway URL
    } catch (error) {
      console.error(error);
    }
    try {

      if (!window.ethereum) {
        throw  new  Error("No crypto wallet found. Please install it.");
      }

        await  window.ethereum.send("eth_requestAccounts");

        const  provider = new  ethers.providers.Web3Provider(window.ethereum);

        const  signer = provider.getSigner();

      ethers.utils.getAddress(toAddress);

        const  transactionResponse = await  signer.sendTransaction({

          to:  toAddress,
    
          value:  ethers.utils.parseEther(amount.toString())
    
      });

        console.log({transactionResponse});
    
    } catch (error) {
    
        console.log({error});
    
    }

    try {

      if (!window.ethereum) {
          throw  new  Error("No crypto wallet found. Please install it.");
      }

          await  window.ethereum.send("eth_requestAccounts");

          const  provider = new  ethers.providers.Web3Provider(window.ethereum);

          const  signer = provider.getSigner();

      ethers.utils.getAddress(accountAddress);

          const  transactionResponse = await  signer.sendTransaction({

            to:  accountAddress,
      
            value:  ethers.utils.parseEther(amount.toString())
      
      });

          console.log({transactionResponse});
      
    } catch (error) {
      
          console.log({error});
      
    }
  };

  return (
    <>
      <LoadingOverlay active={loading} spinner text="Đang thực hiện tác vụ...">
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
                    value={amount ? amount : ""}
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
                  <button
                    style={{ marginTop: 10 }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    hoàn thành thanh toán
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};
export default conductTransaction;
