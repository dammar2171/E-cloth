import style from "../css/ProductCard.module.css";
import first from "../assets/p1.png";
import { MdOutlineShoppingBag } from "react-icons/md";
function OurProductCardList() {
  return (
    <div className="card-list">
      <div className={`card ${style.costumCard}`} style={{ width: "20rem" }}>
        <img src={first} className="card-img-top" alt="..." />
        <div className={`card-body ${style.costumCardBody}`}>
          <h5 className="card-title">
            BY <span>title</span>
          </h5>
          <p className="card-text">Some quick</p>
          <div className="row">
            <div className="col-8 d-flex gap-2">
              <strike className={`${style.Mprice}`}>12</strike>
              <span className={`${style.Rprice}`}>NPR13</span>
            </div>
            <div className="col-4">
              <a href="#" className={`btn  ${style.productBagBtn}`}>
                <MdOutlineShoppingBag />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProductCardList;
