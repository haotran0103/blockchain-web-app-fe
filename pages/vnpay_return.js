import { useRouter } from "next/router";
import { useEffect } from "react";

const VnpayReturn = () => {
  const router = useRouter();

  useEffect(() => {
    const vnpResponse = router.query;
    if (vnpResponse.vnp_ResponseCode === "00") {
      router.push("/payment-success"); // Điều hướng đến trang thanh toán thành công
    } else {
      router.push("/payment-failure"); // Điều hướng đến trang thanh toán thất bại
    }
  }, []);

  return <div>Đang xử lý...</div>;
};

export default VnpayReturn;
