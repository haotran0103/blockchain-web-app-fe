import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import moment from "moment";
export async function getServerSideProps() {
  const postData = await fetch(`https://cryptictitans.onrender.com/apiv1/projectCategory/2`);
  const post = await postData.json();
  return {
    props: {
      post,
    },
  };
}
export default function comics_and_illustration({ post }) {
  const projectArr = [];
  if (post[0]) {
    projectArr.push(
      <>
        {/* ======= End Page Header ======= */}
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Truyện và truyện tranh</h2>
                <p>
                  Truyện và truyện tranh là những chủ đề thú vị về nghệ thuật và
                  văn hóa, có sức hấp dẫn đối với nhiều độc giả trên khắp thế
                  giới. Truyện và truyện tranh là những hình thức văn học thịnh
                  hành, có thể kể chuyện, phản ánh tâm lý con người và thể hiện
                  nhiều giá trị văn hóa khác nhau. Trong truyện tranh, hình ảnh
                  được sử dụng để kể chuyện, tạo ra những tác phẩm độc đáo với
                  phong cách nghệ thuật riêng biệt. Từ những truyện và truyện
                  tranh đa dạng này, người đọc có thể tìm thấy niềm vui và sự
                  giải trí,
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
            <div className="col-lg-6">
              <img
                src={post[0].anhBia}
                className="img-fluid"
                alt=""
                style={{ width: 407, height: 432, objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-5 content">
              <h2>{post[0].tenProject}</h2>
              <progress className="my_progress" value={0} max={100} />
              <p className="fst-italic py-3">{post[0].loiHua}</p>
              <div className="row">
                <h4>Thông tin người gọi vốn</h4>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website : </strong>{" "}
                      <span>{post[0].diaChiWeb.slice(0, 20)}...</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>số điện thoại : </strong>{" "}
                      <span>{post[0].phoneNumber}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>địa chỉ: </strong>
                      <span>{post[0].address}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>ngày tạo :</strong>{" "}
                      <span>
                        {format(new Date(post[0].ngayTao), "dd/MM/yyyy")}
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>ngày còn lại:</strong>{" "}
                      <span>
                        {moment(post[0].ngayHetHan, "YYYY-MM-DD").diff(
                          moment(),
                          "day"
                        )}
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>{post[0].email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>chức vụ trong dự án:</strong>{" "}
                      <span>{post[0].chucVu}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3"></p>
              <h4>Mô tả cuộc gọi vốn</h4>
              {post[0].moTa}
              <p />
              <p className="py-3"></p>
              <Link href={`/projectDetail/${post[0].id}`}>
                <h5>xem chi tiết</h5>
              </Link>
              <p />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    projectArr.push(
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h4>Hiện tại chủ đề này không có bất cứ dự án nào</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const galleryItems = [];
  for (let i = 1; i < post.length; i++) {
    const item = post[i];
    galleryItems.push(
      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
        <div className="gallery-item h-100">
          <img src={item.imageSrc} className="img-fluid" alt={item.title} />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a
              href={item.imageSrc}
              title={item.title}
              className="glightbox preview-link"
            />
            <a href={item.detailsUrl} className="details-link">
              <i className="bi bi-link-45deg" />
            </a>
            <button>Join</button>
          </div>
          <div className="user_information">
            <progress
              className="my_progress"
              value={item.fundProgress}
              max={100}
            />
            <p>Thông tin người gọi vốn: {item.callerInfo}</p>
            <p>Số người đã ủng hộ: {item.supportersCount}</p>
            <p>Thời gian còn lại: {item.remainingTime}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <main id="main" data-aos="fade" data-aos-delay={1500}>
      {projectArr}
      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>Comics &amp; Illustration</h2>
          <p>Tiêu biểu khác</p>
        </div>
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {galleryItems}
            {/* End Gallery Item */}
          </div>
        </div>
      </section>
    </main>
  );
}
