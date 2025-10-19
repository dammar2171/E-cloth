import { useContext } from "react";
import style from "../css/Cart.module.css";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../store/Context";
function CartProductUpdater() {
  const { bagProducts } = useContext(AppContext);
  return (
    <div className={`${style.productUpdaterContainer} py-3`}>
      <div className="row">
        {bagProducts.map((item) => (
          <div
            className="col-12 d-flex gap-2 justify-content-start align-items-center pb-4
          "
            key={item.id}
          >
            <button>
              <MdDeleteForever />
            </button>
            <img src={item.pimage} alt="product-image" height={70} />
            <div>
              <p>Product</p>
              <span>{item.pName}</span>
            </div>
            <div>
              <p>price</p>
              <span>RS {item.sPrice}</span>
            </div>
            <div>
              <p>Quantity</p>

              <span>
                <button>+</button>
                {item.quantity}
                <button>-</button>
              </span>

              <button>update</button>
            </div>
            <div>
              <p>subtotal</p>
              <span>Rs {Number(item.quantity) * Number(item.sPrice)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartProductUpdater;
