import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const VnpayReturn = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/apiv1/vnpay_return"); // Địa chỉ URL của backend
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
    <div className="container">
      {paymentStatus === "success" && <p>Thanh toán thành công!</p>}
      {paymentStatus === "failure" && <p>Thanh toán thất bại!</p>}
      {paymentStatus === "error" && <p>Có lỗi xảy ra khi xử lý!</p>}
      <Link href="/">quay về trang chủ</Link>
    </div>
  );
};

export default VnpayReturn;
