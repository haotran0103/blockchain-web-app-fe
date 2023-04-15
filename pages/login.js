import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Link from "next/link";
export default function Login() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const getWeb3 = async () => {
      // Modern dapp browsers
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access
          await window.ethereum.enable();
          setWeb3(web3);
          window.location.href = '/';
        } catch (error) {
          // User denied account access
          console.error(error);
        }
      }
      // Legacy dapp browsers
      else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      }
      // Non-dapp browsers
      else {
        alert(
          "Please install MetaMask to use this website"
        );
      }
    };
    getWeb3();
  }, []);

  const handleAuth = async () => {
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        // Authenticate the user with the backend using the account address
        // e.g. call an API endpoint with the address as a parameter
      }
    }
  };

  const handleLoginClick = async () => {
    if (web3) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        handleAuth();
      } catch (error) {
        // User denied account access
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <p>Login to get started</p>
              <button type="sumit">
              <Link href='/Login'>Login with Metamask</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
