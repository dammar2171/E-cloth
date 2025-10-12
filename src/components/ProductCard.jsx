import style from "../css/ProductCard.module.css";
import { useContext, useEffect } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { AppContext } from "../store/Context";
function ProductCard({ item }) {
  const { favoriteProducts, toggleFavoriteProduct } = useContext(AppContext);
  const isFavorited = favoriteProducts.some((p) => p.id === item.id);
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className={`card ${style.costumCard}`} style={{ width: "20rem" }}>
      <button
        type="button"
        onClick={() => {
          toggleFavoriteProduct(item);
        }}
        className={`${style.productFavBtn}`}
      >
        {isFavorited ? (
          <MdFavorite style={{ color: "red" , fontSize:"1.6rem"}} />
        ) : (
          <MdFavoriteBorder style={{fontSize:"1.6rem"}}/>
        )}
      </button>
      <img src={item.pimage} className="card-img-top" alt="..." />
      <div className={`card-body ${style.costumCardBody}`}>
        <h5 className="card-title">
          BY <span>{item.pCreater}</span>
        </h5>
        <p className="card-text">{item.pName}</p>
        <div className="row">
          <div className="col-8 d-flex gap-2">
            <strike className={`${style.Mprice}`}>{item.mPrice}</strike>
            <span className={`${style.Rprice}`}>{item.sPrice}</span>
          </div>
          <div className="col-4">
            <button
              type="button"
              className={`${style.productBagBtn}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="add to cart"
            >
              <MdOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
