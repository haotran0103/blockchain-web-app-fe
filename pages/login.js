/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function login() {
  return (
    <>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Cryptic Titan</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        
      </Head>
      <main id="main" data-aos="fade">
  {/* ======= End Page Header ======= */}
  <div className="page-header d-flex align-items-center">
    <div className="container position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          <h5>Hãy liên hệ và phản hồi với chúng tôi</h5>
          <a className="cta-btn" href="contact.html">
          bắt đầu dự án đầu tiên
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Header */}
  <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="bi bi-facebook" />
              </button>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="bi bi-twitter" />
              </button>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="bi bi-linkedin" />
              </button>
            </div>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
              />
            </div>
            {/* Password input */}
            <div className="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* Checkbox */}
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue=""
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <Link href="/register" className="link-danger">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

    </>
    
  )
}
