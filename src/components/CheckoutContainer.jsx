import CheckoutForm from "./CheckoutForm";
import style from "../css/Checkout.module.css";
import CartDescription from "../components/CartDescription";
import Coupon from "../components/Coupon";
import PaymentOption from "../components/PaymentOption";
import Placeorder from "../components/Placeorder";
import { FaCheckCircle } from "react-icons/fa";
import Login from "./Login";
const CheckoutContainer = () => {
  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className={`col-12 ${style.imgSection}`}>
            <h1>Checkout</h1>
          </div>
        </div>
        <div className="row pt-3">
          <div className={`${style.textSection}`}>
            <p>
              <span>
                <FaCheckCircle />
              </span>
              Customer matched zone "Nepal"
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-6">
            <Login />
            <br />
            <CheckoutForm />
          </div>
          <div className="col-6 ">
            <CartDescription />
            <br />
            <div className={`${style.checkoutCoupon}`}>
              <p className={`d-inline-flex gap-1 `}>
                Do you have coupon code?
                <a
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Click here to enter your coupon code
                </a>
              </p>
              <div className="collapse" id="collapseExample">
                <Coupon />
                <br />
              </div>
            </div>
            <PaymentOption />
            <br />
            <Placeorder />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutContainer;
