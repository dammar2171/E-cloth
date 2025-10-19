import { useContext, useEffect, useState } from "react";
import style from "../css/Cart.module.css";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../store/Context";

function CartProductUpdater() {
  const {
    bagProducts,
    // productQuantity, setProductQuantity,  // Not used now (we manage per-item quantities)
    addProducts,
    updateBagProduct,
    removeBagProduct,
  } = useContext(AppContext);

  // local state to keep per-item quantities before updating the store
  const [quantities, setQuantities] = useState({});

  // sync quantities initial state whenever bagProducts change
  useEffect(() => {
    const map = {};
    bagProducts.forEach((item) => {
      const key = `${item.id}-${item.selectedSize || ""}`;
      map[key] = Number(item.quantity) || 1;
    });
    setQuantities(map);
  }, [bagProducts]);

  const inc = (item) => {
    const key = `${item.id}-${item.selectedSize || ""}`;
    setQuantities((q) => ({ ...q, [key]: (Number(q[key]) || 1) + 1 }));
  };

  const dec = (item) => {
    const key = `${item.id}-${item.selectedSize || ""}`;
    setQuantities((q) => {
      const current = Number(q[key]) || 1;
      return { ...q, [key]: current > 1 ? current - 1 : 1 };
    });
  };

  const handleUpdate = (item) => {
    const key = `${item.id}-${item.selectedSize || ""}`;
    const newQty = Number(quantities[key]) || 1;

    // Use updateBagProduct to set the exact quantity (replace)
    if (typeof updateBagProduct === "function") {
      updateBagProduct(item.id, item.selectedSize ?? null, newQty);
    } else {
      // fallback: if update not available, call addProducts with quantity (this WILL add to existing)
      addProducts({ ...item, quantity: newQty });
    }
  };

  const handleRemove = (item) => {
    if (typeof removeBagProduct === "function") {
      removeBagProduct(item.id, item.selectedSize ?? null);
    }
  };

  return (
    <div className={`${style.productUpdaterContainer} py-3`}>
      <div className="row">
        {bagProducts.map((item) => {
          const key = `${item.id}-${item.selectedSize || ""}`;
          const qty = Number(quantities[key]) || Number(item.quantity) || 1;

          return (
            <div
              className="col-12 d-flex gap-2 justify-content-start align-items-center pb-4"
              key={key}
            >
              <button onClick={() => handleRemove(item)} title="Remove item">
                <MdDeleteForever />
              </button>

              <img src={item.pimage} alt={item.pName} height={70} />

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
                  <button onClick={() => dec(item)}>-</button>
                  <span style={{ margin: "0 8px" }}>{qty}</span>
                  <button onClick={() => inc(item)}>+</button>
                </span>

                <div style={{ marginTop: 8 }}>
                  <button onClick={() => handleUpdate(item)}>update</button>
                </div>
              </div>

              <div>
                <p>subtotal</p>
                <span>Rs {Number(qty) * Number(item.sPrice || 0)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartProductUpdater;
