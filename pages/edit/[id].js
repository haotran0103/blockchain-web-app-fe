/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import format from "date-fns/format";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Editor } from "@tinymce/tinymce-react";
import serviceAccount from "../../configs/serviceAccountKey.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Web3 from "web3";
export async function getServerSideProps(context) {
  const id_old = context.query;
  const id = id_old.id;
  const res = await fetch("https://cryptictitans.onrender.com/apiv1/category");
  const dataProject = await fetch(
    `https://cryptictitans.onrender.com/apiv1/projects/${id}`
  );
  const data = await res.json();
  const dataProject1 = await dataProject.json();
  return { props: { data, dataProject1 } };
}
const firebaseConfig = {
  credential: serviceAccount,
  storageBucket: "blockchainweb-5f8bb.appspot.com",
};
initializeApp(firebaseConfig);
const storage = getStorage();
export default function edit({ data, dataProject1 }) {
  const [accountAddress, setAccountAddress] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setuserName] = useState("");
  const [projecttitle, setprojecttitle] = useState("");
  const [address, setaddress] = useState("");
  const [emailAdress, setemailAdress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [Amounts, setAmounts] = useState(0);
  const [khoangTien, setkhoangTien] = useState("");
  const [chucVu, setchucVu] = useState("");
  const [loiHua, setloiHua] = useState("");
  const [theLoai, settheLoai] = useState("");
  const [moTaDuAn, setmoTaDuAn] = useState("");
  const [tienDo, settienDo] = useState("");
  const [anhBia, setanhBia] = useState(null);
  const [avatar, setavatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [websiteAddress, setwebsiteAddress] = useState("");
  const [video, setVideo] = useState(null);
  const [galleryItems, setGalleryItems] = useState("");
  const currentDate = moment().format("DD/MM/YYYY");
  const [startDate, setStartDate] = useState(new Date());
  const disabledDates = [new Date(currentDate)];
  const editorRef = useRef(null);
  var projectImageUrl = useRef(null);
  var projectImageUrl2 = useRef(null);
  var projectVideoUrl = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setmoTaDuAn(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    async function getAccountAddress() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Get first account address
          const accounts = await web3.eth.getAccounts();
          setAccountAddress(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getAccountAddress();
  }, []);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log("a");
    // Create a reference for the project's image file
    if (selectedFile1) {
      const projectImageRef = storageRef(
        storage,
        `projectImages/${selectedFile1.name}`
      );
      const projectImageSnapshot = await uploadBytesResumable(
        projectImageRef,
        selectedFile1
      );
      projectImageUrl = await getDownloadURL(projectImageSnapshot.ref);
    }
    console.log("a");
    if (selectedFile2) {
      const projectImageRef2 = storageRef(
        storage,
        `projectImages/${selectedFile2.name}`
      );
      const projectImageSnapshot2 = await uploadBytesResumable(
        projectImageRef2,
        selectedFile2
      );
      projectImageUrl2 = await getDownloadURL(projectImageSnapshot2.ref);
    }

    // Create a reference for the project's video file
    if (video) {
      const projectVideoRef = storageRef(
        storage,
        `projectVideos/${video.name}`
      );
      const projectVideoSnapshot = await uploadBytesResumable(
        projectVideoRef,
        video
      );
      projectVideoUrl = await getDownloadURL(projectVideoSnapshot.ref);
    }
    // Upload the video file to Firebase storage

    const projectData = {
      userName: userName ? userName : dataProject1.userName,
      tenProject: projecttitle ? projecttitle : dataProject1.tenProject,
      soTien: dataProject1.soTien,
      diaChiWeb:
        !websiteAddress === "" ? websiteAddress : dataProject1.diaChiWeb,
      phoneNumber: phoneNumber ? phoneNumber : dataProject1.phoneNumber,
      emailAddress: emailAdress ? emailAdress : dataProject1.emailAddress,
      address: address ? address : dataProject1.address,
      soTienToiThieu: khoangTien ? khoangTien : dataProject1.soTienToiThieu,
      chucVu: chucVu ? chucVu : dataProject1.chucVu,
      loiHua: loiHua ? loiHua : dataProject1.loiHua,
      moTa: moTaDuAn ? moTaDuAn : dataProject1.moTa,
      maVi: accountAddress,
      anhBia: !projectImageUrl === null ? projectImageUrl : dataProject1.anhBia,
      loaiDuAn: dataProject1.loaiDuAn,
      video: !projectVideoUrl === null ? projectVideoUrl : dataProject1.video,
      ngayHetHan: dataProject1.ngayHetHan,
      avatarDuAn:
        !projectImageUrl2 === null ? projectImageUrl2 : dataProject1.avatarDuAn,
      tienDo: tienDo ? tienDo : dataProject1.tienDo,
    };
    console.log(projectData);

    // Send a POST request to the backend with the project data
    // console.log("a");
    const res = await axios.put(
      `https://cryptictitans.onrender.com/apiv1/projects/${dataProject1.id}`,
      projectData
    );
    // Check the response from the backend
    if (res.status === 200) {
      setIsLoading(false);
      console.log("Project update successfully!");
      alert("update thành công");
      window.location.href = `/user/${accountAddress}`;
    } else {
      console.log("Failed to create project");
    }
  };

  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
    setImageUrl1(URL.createObjectURL(file));
    setanhBia(event.target.files[0]);
  };
  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedFile2(file);
    setImageUrl2(URL.createObjectURL(file));
    setavatar(event.target.files[0]);
  };
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
              <h2 style={{ fontFamily: "auto" }}>
                Chúng tôi là
                <hao style={{ color: "#e3b11e ", padding: "6px" }}>
                  Cryptic Titan
                </hao>
                nơi khởi nguồn của các nhà đầu tư triệu đô
              </h2>
              <p>
                Đầu tư theo cách bạn muốn, hãy đầu tư vào các dự án khởi nghiệp
                ở đây, bạn sẽ trở thành tỉ phú ngay bâu giờ hoặc không bao giờ
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-8 col-xl-8 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  Người chịu trách nhiệm:
                  <input
                    type="text"
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName ? userName : dataProject1.userName}
                    id="userName"
                    className="form-control form-control-lg"
                    placeholder="nhập vào tên của bạn"
                    required
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  tên dự án
                  <input
                    type="text"
                    onChange={(e) => setprojecttitle(e.target.value)}
                    value={
                      projecttitle ? projecttitle : dataProject1.tenProject
                    }
                    id="TenProject"
                    className="form-control form-control-lg"
                    placeholder="nhập vào tên dự án của bạn"
                    required
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  số tiền muốn huy động
                  <input
                    type="number"
                    id="soTien"
                    onChange={(e) => setAmounts(e.target.value)}
                    value={Amounts ? Amounts : dataProject1.soTien}
                    className="form-control form-control-lg"
                    placeholder="nhập vào số tiền muốn huy động"
                    disabled
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  địa chỉ website or fanpage của dự án
                  <input
                    type="text"
                    id="website"
                    onChange={(e) => setwebsiteAddress(e.target.value)}
                    value={
                      websiteAddress ? websiteAddress : dataProject1.diaChiWeb
                    }
                    className="form-control form-control-lg"
                    placeholder="website (nếu có)"
                    style={{ width: "200%" }}
                  />
                </label>
              </div>

              <div className="form-outline mb-4">
                <label>
                  {" "}
                  số điện thoại
                  <input
                    type="number"
                    id="soDienThoai"
                    onChange={(e) => setphoneNumber(e.target.value)}
                    value={phoneNumber ? phoneNumber : dataProject1.phoneNumber}
                    className="form-control form-control-lg"
                    placeholder="số điện thoại"
                    required
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  email:
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setemailAdress(e.target.value)}
                    value={
                      emailAdress ? emailAdress : dataProject1.emailAddress
                    }
                    className="form-control form-control-lg"
                    placeholder="email"
                    required
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  {" "}
                  Địa chỉ của bạn:
                  <input
                    type="text"
                    id="diaChi"
                    onChange={(e) => setaddress(e.target.value)}
                    value={address ? address : dataProject1.address}
                    className="form-control form-control-lg"
                    placeholder="Địa chỉ"
                    required
                    style={{ width: "200%" }}
                  />
                </label>
                <div className="form-outline mb-4">
                  <label>
                    avatar dự án
                    <input
                      type="file"
                      id="anhbia"
                      accept="image/*"
                      className="form-control form-control-lg"
                      placeholder="upload hình ảnh đánh giá"
                      onChange={handleFileInputChange2}
                    />
                  </label>
                  {selectedFile2 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl2 ? imageUrl2 : dataProject1.avatarDuAn}
                      alt="Selected file"
                    />
                  )}

                  {!selectedFile2 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl2 ? imageUrl2 : dataProject1.avatarDuAn}
                      alt="Selected file"
                    />
                  )}
                </div>
                <div className="form-outline mb-4">
                  <label>
                    ảnh bìa
                    <input
                      type="file"
                      id="anhbia"
                      accept="image/*"
                      className="form-control form-control-lg"
                      placeholder="upload hình ảnh đánh giá"
                      onChange={handleFileInputChange1}
                    />
                  </label>
                  {selectedFile1 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl1 ? imageUrl1 : dataProject1.anhBia}
                      alt="Selected file"
                    />
                  )}

                  {!selectedFile1 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl1 ? imageUrl1 : dataProject1.anhBia}
                      alt="Selected file"
                    />
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label>
                    video:
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setVideo(e.target.files[0])}
                    />
                    <div className="video-container">
                      <ReactPlayer
                        url={dataProject1.video}
                        controls={true}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="form-outline mb-4">
                <label>
                  khoảng tiền:
                  <input
                    type="number"
                    id="khoangTien"
                    onChange={(e) => setkhoangTien(e.target.value)}
                    value={
                      khoangTien ? khoangTien : dataProject1.soTienToiThieu
                    }
                    className="form-control form-control-lg"
                    placeholder="khoảng tiền (dùng cho gọi vốn có chia %)"
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label>
                  Chức vụ của bạn trong dự án
                  <input
                    type="text"
                    id="chucVu"
                    required
                    onChange={(e) => setchucVu(e.target.value)}
                    value={chucVu ? chucVu : dataProject1.chucVu}
                    className="form-control form-control-lg"
                    placeholder="chức vụ trong dự án:"
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <label htmlFor="comment">
                Mô Tả Dự Án:
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={dataProject1.moTa}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  onChange={(event, editor) => {
                    const content = editor.getContent();
                    setmoTaDuAn(content);
                  }}
                />
              </label>
              <label htmlFor="comment">
                lời hứa của người tạo dự án:
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={dataProject1.loiHua}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  onChange={(event, editor) => {
                    const content = editor.getContent();
                    setloiHua(content);
                  }}
                />
              </label>
              <label htmlFor="comment">
                tiến độ và cách dùng tiền kêu gọi:
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={dataProject1.tienDo}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  onChange={(event, editor) => {
                    const content = editor.getContent();
                    settienDo(content);
                  }}
                />
              </label>
              <h1>{message}</h1>
              <select>
                {data.map(
                  (item, index) =>
                    item.id === dataProject1.loaiDuAn && (
                      <option>{item.tenLoai}</option>
                    )
                )}
              </select>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {" "}
                    thời gian kết thúc gọi vốn:
                    <div>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        disabled={true}
                        excludeDates={disabledDates}
                        value={format(
                          new Date(dataProject1.ngayHetHan),
                          "dd/MM/yyyy"
                        )}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2 justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  tạo dự án
                </button>
              </div>
            </form>
          </div>

          {isLoading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
            >
              <div className="spinner" />
              <p style={{ color: "white", marginLeft: 10 }}>
                Vui lòng đợi trong giây lát...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
