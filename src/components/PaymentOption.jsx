import style from "../css/Checkout.module.css";
const PaymentOption = () => {
  return (
    <div className={`${style.paymentOptionContainer}`}>
      <h5>Choose Payment Option</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentOption"
          id="shippingonly"
          value="esewa"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="shippingonly">
          Pay <span style={{color:"#1e468bff" , fontWeight: "bold"}}>only shipping now</span>. Product cost will be collected
          after delivery.
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentOption"
          id="paymentinfull"
          value="banktransfer"
        />
        <label className="form-check-label" htmlFor="paymentinfull">
          Pay <span style={{color:"#1e468bff" , fontWeight: "bold"}}>full amount now</span>.
        </label>
      </div>
    </div>
  );
};

export default PaymentOption;
