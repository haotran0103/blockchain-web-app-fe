import React, { useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import serviceAccount from "../configs/serviceAccountKey.json";
import { resolveProperties } from "ethers/lib/utils.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/apiv1/category");
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
  const [imageUrl1, setImageUrl1] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setuserName] = useState("");
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
  const [anhBia, setanhBia] = useState(null);
  const [websiteAddress, setwebsiteAddress] = useState("");
  const [video, setVideo] = useState(null);
  const currentDate = moment().format("DD/MM/YYYY");
  const [startDate, setStartDate] = useState(new Date());
  const disabledDates = [new Date(currentDate)];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a reference for the project's image file
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

    // Create a reference for the project's video file
    const projectVideoRef = storageRef(storage, `projectVideos/${video.name}`);

    // Upload the video file to Firebase storage
    const projectVideoSnapshot = await uploadBytesResumable(
      projectVideoRef,
      video
    );
    const projectVideoUrl = await getDownloadURL(projectVideoSnapshot.ref);
    const getAccountAddress = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccountAddress(accounts[0]);
      }
    };

    getAccountAddress();
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
    };

    // Send a POST request to the backend with the project data
    const res = await axios.post(
      "http://localhost:8080/apiv1/projects",
      projectData
    );
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
              <h2>
                Chúng tôi là<span>Cryptic Titan</span>, nơi khởi nguồn của các
                nhà đầu tư triệu đô
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
                  {selectedFile1 && <img src={imageUrl1} alt="Selected file" />}
                </div>

                <div className="form-outline mb-4">
                  <label>
                    video:
                    <input
                      type="file"
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
                  chức vụ
                  <input
                    type="text"
                    id="chucVu"
                    onChange={(e) => setchucVu(e.target.value)}
                    value={chucVu}
                    className="form-control form-control-lg"
                    placeholder="chức vụ trong dự án:"
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label htmlFor="comment">
                  Lời hứa của người tạo dự án:
                  <textarea
                    className="form-control"
                    rows={5}
                    onChange={(e) => setloiHua(e.target.value)}
                    value={loiHua}
                    id="loiHua"
                    style={{ width: "200%" }}
                  />
                </label>
              </div>
              <div className="form-outline mb-4">
                <label htmlFor="comment">
                  Mô Tả Dự Án:
                  <textarea
                    className="form-control"
                    rows={5}
                    id="moTa"
                    onChange={(e) => setmoTaDuAn(e.target.value)}
                    value={moTaDuAn ?? ""}
                    style={{ width: "200%" }}
                  />
                </label>
              </div>

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
