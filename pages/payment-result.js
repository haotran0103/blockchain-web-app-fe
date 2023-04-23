import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const VnpayReturn = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://cryptictitans.onrender.com/apiv1/vnpay_return"); // Địa chỉ URL của backend
        const { data } = response;

        if (data.code === "00") {
          setPaymentStatus("success");
        } else {
          setPaymentStatus("failure");
        }
      } catch (error) {
        console.log(error);
        setPaymentStatus("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-header d-flex align-items-center">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="container">
              {paymentStatus === "success" && (
                <>
                  <i className="fas fa-check-circle"></i>
                  <p>Thanh toán thành công!</p>
                </>
              )}
              {paymentStatus === "failure" && (
                <>
                  <i className="fas fa-times-circle"></i>
                  <p>Thanh toán thất bại!</p>
                </>
              )}
              {paymentStatus === "error" && (
                <>
                  <i className="fas fa-exclamation-circle">
                    <p>Có lỗi xảy ra khi xử lý!</p>
                  </i>
                </>
              )}
              <Link href="/">quay về trang chủ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VnpayReturn;
