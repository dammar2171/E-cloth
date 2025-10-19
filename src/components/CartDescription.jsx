import { useContext } from "react";
import style from "../css/Cart.module.css";
import { AppContext } from "../store/Context";

function CartDescription() {
  const { bagProducts, totalPrice } = useContext(AppContext);
  return (
    <div className={`${style.cartDescriptionContainer}`}>
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
            {item.pName}{" "}
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
      <button className={`${style.proceedCheckoutBtn}`}>Proceed to checkout</button>
    </div>
  );
}

export default CartDescription;
