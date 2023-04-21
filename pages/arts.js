import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import moment from "moment";
export async function getServerSideProps() {
  const postData = await fetch(
    `https://cryptictitans.onrender.com/apiv1/projectCategory/1`
  );
  const post = await postData.json();
  return {
    props: {
      post,
    },
  };
}
export default function arts({ post }) {
  const galleryItems = [];
  for (let i = 1; i < post.length; i++) {
    const item = post[i];
    galleryItems.push(
      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
        <div className="gallery-item h-100">
          <img
            src={item.anhBia}
            className="img-fluid"
            alt={item.title}
            style={{ width: 407, height: 432, objectFit: "cover" }}
          />
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
    <>
      <main id="main" data-aos="fade" data-aos-delay={1500}>
        {/* ======= End Page Header ======= */}
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Nghệ thuật</h2>
                <p>
                  Đề tài nghệ thuật là một chủ đề mà người ta thường khám phá và
                  sáng tạo để tạo ra các tác phẩm có tính thẩm mỹ cao, bao gồm
                  nhiều lĩnh vực như hội họa, điêu khắc, âm nhạc, vũ đạo và
                  nhiếp ảnh. Nó có thể phản ánh tâm trạng, suy nghĩ, tư duy, hay
                  đơn giản là thể hiện sự đam mê và khát khao của người sáng
                  tác. Từ những tác phẩm nghệ thuật đa dạng này, ta có thể cảm
                  nhận được sự đa dạng và sáng tạo của con người trong việc thể
                  hiện nghệ thuật.
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
              <div dangerouslySetInnerHTML={{ __html: post[0].moTa }} />
              <p />
              <p className="py-3"></p>
              <Link href={`/projectDetail/${post[0].id}`}>
                <h5>xem chi tiết</h5>
              </Link>
              <p />
            </div>
          </div>
        </div>
        {/* End About Section */}
        {/* ======= Gallery Section ======= */}
        <section id="gallery" className="gallery">
          <div className="section-header">
            <h2>Arts</h2>
            <p>Tiêu biểu khác</p>
          </div>
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              {galleryItems}
              {/* End Gallery Item */}
            </div>
          </div>
        </section>
        {/* End Gallery Section */}
      </main>
    </>
  );
}
