import React, { useState, useRef } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Editor } from "@tinymce/tinymce-react";
import serviceAccount from "../configs/serviceAccountKey.json";
import { resolveProperties } from "ethers/lib/utils.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export async function getServerSideProps() {
  const res = await fetch("https://cryptictitans.onrender.com/apiv1/category");
  const data = await res.json();
  return { props: { data } };
}
const firebaseConfig = {
  credential: serviceAccount,
  storageBucket: "blockchainweb-5f8bb.appspot.com",
};
initializeApp(firebaseConfig);
const storage = getStorage();
import Web3 from "web3";
export default function CreateProject({ data }) {
  const [web3, setWeb3] = useState(null);
  const [accountAddress, setAccountAddress] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setuserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [projecttitle, setprojecttitle] = useState("");
  const [address, setaddress] = useState("");
  const [emailAdress, setemailAdress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [Amounts, setAmounts] = useState("");
  const [khoangTien, setkhoangTien] = useState("");
  const [chucVu, setchucVu] = useState("");
  const [loiHua, setloiHua] = useState("");
  const [theLoai, settheLoai] = useState("");
  const [moTaDuAn, setmoTaDuAn] = useState("");
  const [tienDo, settienDo] = useState("");
  const [anhBia, setanhBia] = useState(null);
  const [avatar, setavatar] = useState(null);
  const [websiteAddress, setwebsiteAddress] = useState("");
  const [video, setVideo] = useState(null);
  const currentDate = moment().format("DD/MM/YYYY");
  const [startDate, setStartDate] = useState(new Date());
  const disabledDates = [new Date(currentDate)];
  const editorRef = useRef(null);
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
    setLoading(true);
    e.preventDefault();

    // Create a reference for the project's image file
    const projectImageRef = storageRef(
      storage,
      `projectImages/${selectedFile1.name}`
    );
    const projectImageRef2 = storageRef(
      storage,
      `projectImages/${selectedFile2.name}`
    );
    // Upload the image file to Firebase storage
    const projectImageSnapshot = await uploadBytesResumable(
      projectImageRef,
      selectedFile1
    );
    const projectImageSnapshot2 = await uploadBytesResumable(
      projectImageRef2,
      selectedFile2
    );
    const projectImageUrl = await getDownloadURL(projectImageSnapshot.ref);
    const projectImageUrl2 = await getDownloadURL(projectImageSnapshot.ref);
    // Create a reference for the project's video file
    const projectVideoRef = storageRef(storage, `projectVideos/${video.name}`);

    // Upload the video file to Firebase storage
    const projectVideoSnapshot = await uploadBytesResumable(
      projectVideoRef,
      video
    );
    const projectVideoUrl = await getDownloadURL(projectVideoSnapshot.ref);

    const projectData = {
      userName,
      projecttitle,
      Amounts,
      websiteAddress,
      phoneNumber,
      emailAdress,
      address,
      khoangTien,
      chucVu,
      loiHua,
      moTaDuAn,
      maVi: accountAddress,
      anhBia: projectImageUrl,
      theLoai,
      video: projectVideoUrl,
      startDate,
      avatarDuAn: projectImageUrl2,
      tienDo,
    };
    console.log(accountAddress);

    // Send a POST request to the backend with the project data
    const res = await axios.post(
      "https://cryptictitans.onrender.com/apiv1/projects",
      projectData
    );
    setLoading(false);
    const datares = await res.data;
    // Check the response from the backend
    if (res.status === 200) {
      console.log("Project created successfully!");
      alert("thêm thành công");

      window.location.href = datares.dict;
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
                  tên người tạo dự án:
                  <input
                    type="text"
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName}
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
                    value={projecttitle}
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
                    value={Amounts}
                    className="form-control form-control-lg"
                    placeholder="nhập vào số tiền muốn huy động"
                    required
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
                    value={websiteAddress}
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
                    value={phoneNumber}
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
                    value={emailAdress}
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
                    value={address}
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
                      required
                      className="form-control form-control-lg"
                      placeholder="upload hình ảnh đánh giá"
                      onChange={handleFileInputChange2}
                    />
                  </label>
                  {selectedFile2 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl2}
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
                      required
                      accept="image/*"
                      className="form-control form-control-lg"
                      placeholder="upload hình ảnh đánh giá"
                      onChange={handleFileInputChange1}
                    />
                  </label>
                  {selectedFile1 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={imageUrl1}
                      alt="Selected file"
                    />
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label>
                    video:
                    <input
                      type="file"
                      required
                      accept="video/*"
                      onChange={(e) => setVideo(e.target.files[0])}
                    />
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
                    value={khoangTien}
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
                    value={chucVu}
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
                  initialValue=""
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
                  initialValue=""
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
                  initialValue=""
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
              <select
                className="form-outline mb-4"
                aria-label="Default select example"
                id="theLoai"
                onChange={(e) => settheLoai(e.target.value)}
                value={theLoai}
              >
                <option key="a" disabled value="">
                  chọn loại dự án
                </option>
                {data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.tenLoai}
                  </option>
                ))}
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
                        disabled={false}
                        excludeDates={disabledDates}
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
        </div>
      </div>
    </>
  );
}
