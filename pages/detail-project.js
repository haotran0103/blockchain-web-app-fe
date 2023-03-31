import React from 'react'

export default function detail_project() {
  return (
    <main id="main" data-aos="fade" data-aos-delay={1500}>
  {/* ======= End Page Header ======= */}
  <div className="page-header d-flex align-items-center">
    <div className="container position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>Chi Tiết Dự Án</h2>
          <p>
            Tên dự án ở đây
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Header */}
  {/* ======= Gallery Single Section ======= */}
  <section id="gallery-single" className="gallery-single">
    <div className="container">
      <div className="position-relative h-100">
        <div className="slides-1 portfolio-details-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-8.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-9.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-10.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-11.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-12.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/gallery/gallery-13.jpg" alt="" />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
      <div className="row justify-content-between gy-4 mt-4">
        <div className="col-lg-8">
          <div className="portfolio-description">
            <h2>1 lần nửa tên dự án</h2>
            <p>
             Mô tả
            </p>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                chổ này chứa lời hứa
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <div>
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Tên người gọi vốn</h3>
                <h4>chức vụ:</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>loại dự án</strong> <span>Nature Photography</span>
              </li>
              <li>
                <strong>khách hàng:</strong> <span>ASU Company</span>
              </li>
              <li>
                <strong>ngày tạo</strong> <span>01 March, 2022</span>
              </li>
              <li>
                <strong>website</strong> <a href="#">www.example.com</a>
              </li>
              <li>
                <a href="#" className="btn-visit align-self-start">
                  tham gia dự án
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Gallery Single Section */}
</main>

  )
}
