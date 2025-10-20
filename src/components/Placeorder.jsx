import style from "../css/Checkout.module.css";
const Placeorder = () => {
  return (
    <div className={`${style.placeOrder}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentOption"
          id="bankingtransfer"
          value="banktransfer"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="bankingtransfer">
          Direct Bank Transfer
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentOption"
          id="esewa"
          value="esewa"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="esewa">
          Esewa
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </label>
      </div>
      <div className="form-check">
        <button className={`${style.placeOrderBtn}`}>Placeorder</button>
      </div>
      <div className="form-check ">
        <label htmlFor="termandconditions" className="d-flex gap-2  align-items-center justify-content-start">
          <input type="checkbox" id="termandconditions" required />
          <p className="mt-3">
            I have read and agree to the website <b>terms and conditions</b>{" "}
            <span>*</span>
          </p>
        </label>
      </div>
    </div>
  );
};

export default Placeorder;
