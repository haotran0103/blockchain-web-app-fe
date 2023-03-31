import Link from 'next/link'
import React from 'react'

export default function film() {
  return (
    <>
        <main id="main" data-aos="fade" data-aos-delay={1500}>
  {/* ======= End Page Header ======= */}
  <div className="page-header d-flex align-items-center">
    <div className="container position-relative">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>Film</h2>
          <p>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
          <Link className="cta-btn" href="/create-project">
          bắt đầu dự án đầu tiên
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Header */}
  <div className="container">
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-4">
        <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 content">
        <h2>Professional Photographer from New York</h2>
        <progress className="my_progress" value={0} max={100} />
        <p className="fst-italic py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="row">
          <h4>Thông tin người gọi vốn</h4>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <strong>Birthday:</strong>{" "}
                <span>1 May 1995</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <strong>Website:</strong>{" "}
                <span>www.example.com</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                <span>+123 456 7890</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                <span>30</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                <span>Master</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <strong>PhEmailone:</strong> <span>email@example.com</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <strong>Freelance:</strong> <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="py-3"></p>
        <h4>Mô tả cuộc gọi vốn</h4>
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
        Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt
        officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
        quidem quia. Sed et consectetur qui quia repellendus itaque neque.
        Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus
        omnis culpa magni laudantium dolores.
        <p />
      </div>
    </div>
  </div>
  {/* End About Section */}
  {/* ======= Gallery Section ======= */}
  <section id="gallery" className="gallery">
    <div className="section-header">
      <h2>Film</h2>
      <p>Tiêu biểu khác</p>
    </div>
    <div className="container-fluid">
      <div className="row gy-4 justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img
              src="assets/img/gallery/gallery-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                title="Gallery 2"
                className="glightbox preview-link"
              />
              <a href="gallery-single.html" className="details-link">
                <i className="bi bi-link-45deg" />
              </a>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Thông tin người gọi vốn:</p>
              <p>Số người đã ủng hộ:</p>
              <p>Thời gian còn lại:</p>
            </div>
          </div>
        </div>
        {/* End Gallery Item */}
      </div>
    </div>
  </section>
  {/* End Gallery Section */}
</main>

    </>
  )
}
