import { IoIosArrowBack } from "react-icons/io";
import style from "../css/Cart.module.css";
import { Link } from "react-router";
function AddCartMainSection({ product }) {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={product.pimage} alt="" height={400} />
          </div>
          <div className="col-8">
            <div className={`${style.costumCartRight}`}>
              <Link to="/">
                <IoIosArrowBack />
                Home
              </Link>
              <h5>BY {product.pCreater}</h5>
              <span className={`${style.productName}`}>{product.pName}</span>
              <div className="d-flex align-items-center gap-3 py-1">
                <span className={`${style.mprice}`}>NPR {product.mPrice}</span>
                <span className={`${style.sprice}`}>NPR {product.sPrice}</span>
                <span className={`${style.savedPrice}`}>
                  NPR {product.savedPrice}
                </span>
              </div>
              <p>{product.description} </p>
              <hr className="pt-2" />
              <span className={`${style.size}`}>Size</span>
              <select
                className="form-select mt-2"
                aria-label="Default select example"
              >
                <option selected="">{product.size.first}</option>
                <option value={1}>{product.size.second}</option>
                <option value={2}>{product.size.third}</option>
              </select>
              <div className="d-flex align-items-center gap-2 py-5">
                <button className={`${style.upDown}`}>+</button>
                <span className={`${style.number}`}>0</span>
                <button className={`${style.upDown}`}>-</button>
                <button className={`${style.AddCartBtn}`}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddCartMainSection;
