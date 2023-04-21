import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { format } from "date-fns";

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);
  const postData = await fetch(
    `https://cryptictitans.onrender.com/apiv1/projects/${id}`
  );
  const post = await postData.json();

  return {
    props: {
      post,
    },
  };
}
const DetailProject = ({ post }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rp = await fetch(
        "https://cryptictitans.onrender.com/apiv1/payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: 10000,
            bankCode: "EXIMBANK",
            orderDescription: "no orderDescription",
            orderType: "billPayment",
            language: "",
          }),
        }
      );
      const data = await rp.json();
      window.location.href = data.successUrl; // redirect to payment gateway URL
    } catch (error) {
      console.error(error);
    }
  };

  if (!isMounted) {
    // Render a placeholder on the server side to avoid the hydration error
    return null;
  }

  return (
    <main id="main" data-aos="fade" data-aos-delay={1500}>
      {/* ======= End Page Header ======= */}
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Chi Tiết Dự Án</h2>
              <p>{post.tenProject}</p>
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
                <div
                  className="video-container"
                  style={{ height: "100vh", width: "100vw" }}
                >
                  <ReactPlayer
                    url={post.video}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
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
                <h2>{post.tenProject}</h2>
                <p>Mô tả: <div dangerouslySetInnerHTML={{ __html: post.moTa }} /></p>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    {post.loiHua}
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                  <div>
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Tên người gọi vốn : {post.userName}</h3>
                    <h4>chức vụ: {post.chucVu}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>loại dự án</strong> <span>{post.tenLoai}</span>
                  </li>
                  <li>
                    <strong>ngày tạo</strong>{" "}
                    <span>{format(new Date(post.ngayTao), "dd/MM/yyyy")}</span>
                  </li>
                  <li>
                    <strong>website</strong> <a href="#">{post.diaChiWeb}</a>
                  </li>
                  <li>
                    {accountAddress ? (
                      <button className="btn-visit align-self-start">
                        <Link
                          style={{ color: "#ada9a9" }}
                          href={`/transaction/${post.id}`}
                        >
                          tham gia dự án
                        </Link>
                      </button>
                    ) : (
                      <button className="btn-visit align-self-start">
                        <Link style={{ color: "#ada9a9" }} href={`/login`}>
                          tham gia dự án
                        </Link>
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery Single Section */}
    </main>
  );
};
export default DetailProject;
