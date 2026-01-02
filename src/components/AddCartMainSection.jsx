import { IoIosArrowBack } from "react-icons/io";
import style from "../css/Cart.module.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../store/Context";
import NavTab from "./NavTab.jsx";

function AddCartMainSection({ product }) {
  console.log(product);

  const { productQuantity, setProductQuantity, addProducts } =
    useContext(AppContext);

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setProductQuantity(1);
    setSelectedSize("");
  }, [product, setProductQuantity]);

  const onHandleMinus = () => {
    if (productQuantity > 1) setProductQuantity(productQuantity - 1);
  };

  const onHandlePlus = () => {
    setProductQuantity(productQuantity + 1);
  };

  const onHandleAddToCart = () => {
    if (typeof addProducts !== "function") {
      console.error("addProducts is not available in AppContext");
      return;
    }

    const payload = {
      ...product,
      quantity: Number(productQuantity) || 1,
      selectedSize,
    };

    addProducts(payload);
  };

  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={product.pimage} alt="" height={400} />
          </div>

          <div className="col-8">
            <div className={style.costumCartRight}>
              <Link to="/">
                <IoIosArrowBack /> Home
              </Link>

              <h5>BY {product.pCreater}</h5>
              <span className={style.productName}>{product.pName}</span>

              <div className="d-flex align-items-center gap-3 py-1">
                <span className={style.mprice}>NPR {product.mPrice}</span>
                <span className={style.sprice}>NPR {product.sPrice}</span>
                <span className={style.savedPrice}>
                  NPR {product.savedPrice}
                </span>
              </div>
              <hr className="pt-2" />

              <span className={style.size}>Size</span>
              <select
                className="form-select mt-2"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">{product.size[0]}</option>
                <option value="1">{product.size[1]}</option>
                <option value="2">{product.size[2]}</option>
              </select>

              <div className="d-flex align-items-center gap-2 py-5">
                <button className={style.upDown} onClick={onHandleMinus}>
                  -
                </button>
                <span className={style.number}>{productQuantity}</span>
                <button className={style.upDown} onClick={onHandlePlus}>
                  +
                </button>

                <button
                  className={style.AddCartBtn}
                  onClick={onHandleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <NavTab description={product.description} product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddCartMainSection;
