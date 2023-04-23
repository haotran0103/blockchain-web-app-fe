import { useRouter } from 'next/router';
import { useEffect } from 'react';

function PaymentResult() {
  const router = useRouter();

  useEffect(() => {
    const { vnp_ResponseCode, vnp_TransactionNo } = router.query;

    // Thực hiện xử lý dữ liệu trả về tại đây
    console.log(`Response code: ${vnp_ResponseCode}`);
    console.log(`Transaction No: ${vnp_TransactionNo}`);
  }, [router]);

  return <div>Xử lý dữ liệu trả về</div>;
}

export default PaymentResult;
