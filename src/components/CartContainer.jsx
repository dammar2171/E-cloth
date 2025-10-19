import CartProductUpdater from "../components/CartProductUpdater";
import style from "../css/Cart.module.css";
import bgImage from "../assets/cart-image.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Coupon from "./Coupon";
import CartDescription from "./CartDescription";
const CartContainer = () => {
  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div
            className={`col-12 ${style.imgSection}`}
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <h1>Cart</h1>
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
        <div className="row pt-3">
          <div className="col-6">
            <CartProductUpdater />
            <br />
            <Coupon />
          </div>
          <div className="col-6">
            <CartDescription />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartContainer;
