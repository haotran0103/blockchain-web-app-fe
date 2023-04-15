import { useState } from "react";

export default function Order() {
  const [amount, setAmount] = useState();
  const [noiDung, setNoiDung] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rp = await fetch("http://localhost:8080/apiv1/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          bankCode: "",
          orderDescription: noiDung,
          orderType: "billPayment",
          language: "",
        }),
      });
      const data = await rp.json();
      window.location.href = data.successUrl; // redirect to payment gateway URL
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNoiDungChange = (event) => {
    setNoiDung(event.target.value);
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
              <h2>nạp token</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  id="amount"
                  placeholder="nhập vào số tiền muốn nạp"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  className="form-control"
                  style={{ maxWidth: "400px", margin: "auto" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description"></label>
                <input
                  id="description"
                  placeholder="lời nhắn"
                  type="text"
                  value={noiDung}
                  onChange={handleNoiDungChange}
                  className="form-control"
                  style={{ maxWidth: "400px", margin: "auto" }}
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="submita"></label>
                <button
                  style={{ marginTop: 10 }}
                  type="submit"
                  className="btn btn-primary"
                >
                  thanh toán
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
