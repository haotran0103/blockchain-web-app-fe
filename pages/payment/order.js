import { useState } from "react";
import QueryString from "qs";
export default function Order() {
  const [amount, setAmount] = useState(0);
  const [noiDung, setNoiDung] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datapayment = {
        amount: amount,
        bankCode: "",
        orderInfo: noiDung,
        orderType: "paybill",
      };
      const queryString = QueryString.stringify(datapayment);
      const rp = await fetch(
        "https://cryptictitans.onrender.com/apiv1/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: queryString,
        }
      );
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
                  value={amount !== 0 ? amount : ""}
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
