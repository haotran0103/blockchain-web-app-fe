import { useEffect } from "react";
import { useRouter } from "next/router";

export default function VNPayReturn() {
  const router = useRouter();

  useEffect(() => {
    router.push(window.location.href.replace("localhost:3000", ""));
  }, []);

  return <div>Đang chuyển hướng...</div>;
}
