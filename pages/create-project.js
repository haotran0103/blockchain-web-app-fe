/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
export default function create_project() {
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
          <h2>
            Chúng tôi là<span>Cryptic Titan</span>, nơi khởi nguồn của các nhà
            đầu tư triệu đô
          </h2>
          <p>
            Đầu tư theo cách bạn muốn, hãy đầu tư vào các dự án khởi nghiệp ở
            đây, bạn sẽ trở thành tỉ phú ngay bâu giờ hoặc không bao giờ
          </p>
        </div>
      </div>
    </div>
  </section>
      <div className="container">
    <div className="row d-flex justify-content-center align-items-center">

      <div className="col-md-12 col-lg-4 col-xl-4 offset-xl-1">
        <form>
  
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="nhập vào tên dự án của bạn"
              required
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="nhập vào số tiền muốn huy động"
              required
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="website (nếu có)"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="số điện thoại"
              required
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="email"
              required
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="Địa chỉ"
              required
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="xác định khách hàng"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="số tiền tối thiểu() bỏ trống nếu không có)"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="formTenProject"
              className="form-control form-control-lg"
              placeholder="chức vụ trong dự án:"
            />
          </div>
          <div className="form-outline mb-4">
          <label htmlFor="comment">Lời hứa của người tạo dự án</label>
            <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="comment">Mô Tả Dự Án</label>
            <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
          </div>
          <select className="form-outline mb-4" aria-label="Default select example">
              <option selected="">chọn loại dự án </option>
              <option value={1}>Arts</option>
              <option value={2}>comics</option>
              <option value={3}>design & tech</option>
              <option value={3}>film</option>
              <option value={3}>games</option>
            </select>
          <div className="text-center text-lg-start mt-4 pt-2 justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              tạo dự án
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}
