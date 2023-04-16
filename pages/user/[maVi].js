/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Web3 from "web3";

export async function getServerSideProps(context) {
  const { userID } = context.query;
  const postData = await fetch(
    `http://localhost:8080/apiv1/userprofile/${userID}`
  );
  const post = await postData.json();
  return {
    props: {
      post,
    },
  };
}
export default function userProfile({ post }) {
  console.log(post);
  const [accountAddress, setAccountAddress] = useState("");
  const [userName, setuserName] = useState("");
  const [emailAdress, setemailAdress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);

  const getAccountAddress = async () => {
    if (typeof window !== "object") {
      // xử lý lỗi hoặc thực hiện các hành động khác
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      setAccountAddress(accounts[0]);
    }
  };

  getAccountAddress();
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
  const handleSubmit = async (e) => {
    const projectImageRef = storageRef(
      storage,
      `projectImages/${selectedFile1.name}`
    );

    // Upload the image file to Firebase storage
    const projectImageSnapshot = await uploadBytesResumable(
      projectImageRef,
      selectedFile1
    );
    const projectImageUrl = await getDownloadURL(projectImageSnapshot.ref);
    e.preventDefault();
    try {
      const rp = await fetch(
        `http://localhost:8080/apiv1/userprofile/${accountAddress}`,
        {
          method: "PACTH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            maVi: accountAddress,
            userName: userName,
            emailAdress: emailAdress,
            phoneNumber: phoneNumber,
            avatar: projectImageUrl,
          }),
        }
      );
      const data = await rp.json();
      window.location.href = data.successUrl; // redirect to payment gateway URL
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
    setImageUrl1(URL.createObjectURL(file));
    setanhBia(event.target.files[0]);
  };
  return (
    <>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="text-center">Thông tin cá nhân của bạn</h2>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              {selectedFile1 && <img src={imageUrl1} alt="Selected file" />}
              <img
                src={
                  post.avatar
                    ? post.avatar
                    : "../../public/assets/img/shiba.jpg"
                }
                className="img-fluid"
                alt=""
              />
              <input
                type="file"
                id="anhbia"
                accept="image/*"
                className="form-control form-control-lg"
                placeholder="upload hình ảnh đánh giá"
                onChange={handleFileInputChange1}
              />
            </div>
            <div className="col-lg-5 offset-lg-3">
              <div className="form-group">
                <label htmlFor="diachivi">địa chỉ ví</label>
                <input
                  id="diachivi"
                  type="number"
                  placeholder={accountAddress}
                  onChange={(e) => setmaVi(e.target.value)}
                  value={post.maVi}
                  disabled
                  className="form-control"
                  style={{ maxWidth: "500px", margin: "auto" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">tên người dùng</label>
                <input
                  id="username"
                  placeholder="nhập vào họ và tên của bạn"
                  type="text"
                  onChange={(e) => setuserName(e.target.value)}
                  value={userName ? userName : ""}
                  className="form-control"
                  style={{ maxWidth: "500px", margin: "auto" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="diachimail">địa chỉ mail</label>
                <input
                  id="diachimail"
                  placeholder="nhập vào địa chỉ mail của bạn"
                  type="text"
                  onChange={(e) => setemailAdress(e.target.value)}
                  value={emailAdress ? emailAdress : ""}
                  className="form-control"
                  style={{ maxWidth: "500px", margin: "auto" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sodienthoai">số điện thoại</label>
                <input
                  id="sodienthoai"
                  placeholder="nhập vào số điện thoại của bạn"
                  type="text"
                  onChange={(e) => setphoneNumber(e.target.value)}
                  value={phoneNumber ? phoneNumber : ""}
                  className="form-control"
                  style={{ maxWidth: "500px", margin: "auto" }}
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="submita"></label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto my-4">
          chỉnh sửa thông tin
        </button>
      </form>
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
            {galleryItems}
            {/* End Gallery Item */}
          </div>
        </div>
      </section>
    </>
  );
}
