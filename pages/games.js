import React from "react";
import Link from "next/link";
import moment from "moment";
import { format } from "date-fns";
export async function getServerSideProps() {
  const postData = await fetch(
    `https://cryptictitans.onrender.com/apiv1/projectCategory/5`
  );
  const post = await postData.json();
  return {
    props: {
      post,
    },
  };
}
export default function games({ post }) {
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
            <p>Tên dự án: {item.tenProject}</p>
            <p>Số người đã ủng hộ: {item.supportersCount}</p>
            <p>
              Thời gian còn lại:{" "}
              {moment(item.ngayHetHan, "YYYY-MM-DD").diff(moment(), "day")}
            </p>
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
                <h2>Games</h2>
                <p>
                  Game là một chủ đề nổi bật trong thế giới giải trí hiện nay.
                  Game được coi là một hình thức giải trí tuyệt vời, có thể kết
                  hợp giữa âm nhạc, đồ họa, nội dung và thao tác, để tạo ra
                  những trải nghiệm mới mẻ và thú vị cho người chơi. Những trò
                  chơi này có thể dành cho mọi lứa tuổi, với nhiều thể loại khác
                  nhau, bao gồm game đối kháng, game phiêu lưu, game giải đố,
                  game thể thao, v.v. Ngoài giải trí, game còn có thể giúp người
                  chơi rèn luyện kỹ năng tư duy, tăng cường trí tuệ và khả năng
                  tập trung.
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
              <p className="fst-italic py-3"><div dangerouslySetInnerHTML={{ __html: post[0].moTa }} /></p>
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
            <h2>Games</h2>
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
