import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../assets/eClothLogo.png";
import style from "../css/Header.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AppContext } from "../store/Context";
function TopHeader() {
  const { bagProducts } = useContext(AppContext);
  const navigate = useNavigate();

  const onHandleFavBtn = () => {
    navigate("/favproducts");
  };

  const onHandleLogo = () => {
    navigate("/");
  };
  return (
    <header className={`postion-sticky ${style.costumTopHeader}`}>
      <nav className="container py-2">
        <div className="row">
          <div className="col-3">
            <img src={logo} onClick={onHandleLogo} alt="E-logo" width={100} />
          </div>
          <div className={`col-6 d-flex ${style.custumSearch}`}>
            <input type="search" placeholder="Search for clothes...." />
            <button>
              <IoSearch />
            </button>
          </div>
          <div
            className={`col-3 d-flex align-items-center justify-content-end gap-2 ${style.customBtnGroup}`}
          >
            <button onClick={onHandleFavBtn}>
              <MdFavoriteBorder />
            </button>
            <button className="bag-button">
              <div className="icon-wrapper">
                <MdOutlineShoppingBag />
                {bagProducts.length != 0 && (
                  <span className="costum-badge">{bagProducts.length}</span>
                )}
              </div>
            </button>
            <button id={`${style.user}`}>
              <FaRegUser />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopHeader;
