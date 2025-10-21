import { useContext } from "react";
import style from "../css/Cart.module.css";
import { AppContext } from "../store/Context";
import { useNavigate, useLocation } from "react-router";

function CartDescription() {
  const { bagProducts, totalPrice } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onProceedToCheckout = () => {
    navigate("/checkout");
  };

  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div
      className={`${style.cartDescriptionContainer} ${
        isCheckoutPage ? style.checkoutMode : ""
      }`}
    >
      <h1>Cart Total</h1>
      <p>
        Number of product:{" "}
        <span>
          {bagProducts.length} {bagProducts.length > 1 ? "items" : "item"}
        </span>
      </p>
      <p>Selected product name:</p>
      <ul className={style.productListCart}>
        {bagProducts.map((item) => (
          <li key={item.id}>
            {item.pName}:{" "}
            <span style={{ float: "right" }}>RS {item.sPrice}</span>
          </li>
        ))}
      </ul>
      <p>
        Total : <span>RS {totalPrice}</span>
      </p>
      <p>
        Shipping Cost: <span>Free</span>
      </p>
      {!isCheckoutPage && (
        <button
          className={`${style.proceedCheckoutBtn}`}
          onClick={onProceedToCheckout}
        >
          Proceed to checkout
        </button>
      )}
    </div>
  );
}

export default CartDescription;
