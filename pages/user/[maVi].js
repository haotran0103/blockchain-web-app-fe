/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Web3 from "web3";
import moment from "moment";
export async function getServerSideProps(context) {
  const id_old = context.query;
  const id = id_old.maVi;
  console.log(id);
  const postData = await fetch(`https://cryptictitans.onrender.com/apiv1/userprofile/${id}`);
  const post = await postData.json();
  const data = await fetch(`https://cryptictitans.onrender.com/apiv1/giaoDich/${id}`);
  const joined = await data.json();
  console.log(joined);
  return {
    props: {
      post,
      joined,
    },
  };
}
export default function userProfile({ post, joined }) {
  const [accountAddress, setAccountAddress] = useState("");

  const getAccountAddress = async () => {
    if (typeof window !== "object") {
      // xử lý lỗi hoặc thực hiện các hành động khác
      return;
    }
    console.log("có chạy qua");
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      setAccountAddress(accounts[0]);
    }
  };

  getAccountAddress();
  const galleryItems = [];
  for (let i = 0; i < post.length; i++) {
    console.log(accountAddress);
    const item = post[i];
    galleryItems.push(
      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
        <div className="gallery-item h-100">
          <img src={item.anhBia} className="img-fluid" alt={item.title} />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a
              href={item.imageSrc}
              title={item.title}
              className="glightbox preview-link"
            />
            <button>
              <Link
                style={{ color: "#858d8a" }}
                href={`/projectDetail/${item.id}`}
              >
                chi tiết
              </Link>
            </button>
          </div>
          <div className="user_information">
            <progress
              className="my_progress"
              value={item.fundProgress}
              max={100}
            />
            <p>Tên dự án : {item.tenProject}</p>
            <p>Số người đã ủng hộ: {item.supportersCount}</p>
            <p>
              Thời gian còn lại:{" "}
              {moment(item.ngayHetHan, "YYYY-MM-DD").diff(moment(), "day")} ngày
            </p>
          </div>
        </div>
      </div>
    );
  }
  const galleryItems1 = [];
  for (let i = 0; i < joined.length; i++) {
    const item = joined[i];
    galleryItems1.push(
      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
        <div className="gallery-item h-100">
          <img src={item.anhBia} className="img-fluid" alt={item.title} />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a
              href={item.imageSrc}
              title={item.title}
              className="glightbox preview-link"
            />
            <Link
              style={{ color: "#858d8a" }}
              href={`/projectDetail/${item.id}`}
            >
              chi tiết
            </Link>
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
              {moment(item.ngayHetHan, "YYYY-MM-DD").diff(moment(), "day")} ngày
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="text-center">Các dự án của bạn</h2>
            </div>
          </div>
        </div>
      </div>
      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>dự án của bạn</h2>
        </div>
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {galleryItems}
            {/* End Gallery Item */}
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>dự án đã đóng góp</h2>
        </div>
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {galleryItems1}
            {/* End Gallery Item */}
          </div>
        </div>
      </section>
    </>
  );
}
