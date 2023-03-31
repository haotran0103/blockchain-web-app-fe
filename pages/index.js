
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
export default function Home() {
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
          <Link href="/create-project" className="btn-get-started">
            bắt đầu dự án đầu tiên
          </Link>
        </div>
      </div>
    </div>
  </section>
  <main id="main" data-aos="fade">
  {/* ======= Gallery Section ======= */}
  <section id="gallery" className="gallery">
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
              <Link href="/detail-project" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
              <button>Join</button>
            </div>
            <div className="user_information">
              <progress className="my_progress" value={0} max={100} />
              <p>Tên dự án:</p>
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
              <Link href="detail-project" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
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
              <Link href="detail-project" className="details-link">
                <i className="bi bi-link-45deg" />
              </Link>
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
  {/* ======= Testimonials Section ======= */}
  <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="section-header">
        <h2>Testimonials</h2>
        <p>What they are saying</p>
      </div>
      <div className="slides-3 swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>Hãy sài tiền theo cách của bạn</p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-6.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Trần Quốc Hào</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                Đến năm 2025, Khoa Công nghệ Thông tin - Đại học Nguyễn Tất
                Thành là nơi uy tín về đào tạo và cung cấp nguồn nhân lực công
                nghệ thông tin có trình độ và chất lượng tiên tiến trong khu vực
                để đáp ứng các yêu cầu về quản lý, sản xuất, dịch vụ và ứng dụng
                của công nghệ thông tin trong nước và quốc tế
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-8.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>NTTU</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                Hãy đầu ngay khi bạn có thể hoặc về già bạn chả có cái gì hết
                ngoài bộ xương
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/img/testimonials/testimonials-7.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Hoài Fong</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* End Testimonials Section */}
</main>
 </>
  )
}
