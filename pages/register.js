import React from 'react'
import Link from 'next/link'
export default function register() {
  return (
    <>
    <main id="main" data-aos="fade">

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
              <p className="lead fw-normal mb-0 me-3">Register with</p>
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
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Nhà đầu tư
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Người gọi vốn
              </label>
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
            <div className="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="confirm password"
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
                have you an account?{" "}
                <Link href='/login' className="link-danger">
                  login
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
