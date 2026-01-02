import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser, FaTrash } from "react-icons/fa";
import logo from "../assets/eClothLogo.png";
import style from "../css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../store/Context";

function TopHeader() {
  const {
    bagProducts,
    removeBagProduct,
    setOpenSearchModal,
    setSearchedProduct,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSearchButton = () => {
    setOpenSearchModal(true);
  };

  const onHandleFavBtn = () => {
    navigate("/favproducts");
  };

  const onHandleLogo = () => {
    navigate("/");
  };

  const onHandleViewcart = () => {
    navigate("/cart");
  };
  const onHandleUserBtn = () => {
    navigate("/account");
  };

  const onHandleBagBtn = () => {
    const offcanvasEl = document.getElementById("offcanvasRight");
    if (!offcanvasEl) return console.error("Offcanvas element not found");

    if (
      window &&
      window.bootstrap &&
      typeof window.bootstrap.Offcanvas === "function"
    ) {
      const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.show();
    } else {
      console.error(
        "Bootstrap JS not loaded. Add import 'bootstrap/dist/js/bootstrap.bundle.min.js'"
      );
    }
  };

  return (
    <>
      <header className={`position-sticky ${style.costumTopHeader}`}>
        <nav className="container py-2">
          <div className="row align-items-center">
            <div className="col-3">
              <img
                src={logo}
                onClick={onHandleLogo}
                alt="E-logo"
                width={100}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={`col-6 d-flex ${style.custumSearch}`}>
              <input
                type="search"
                onChange={(e) => setSearchedProduct(e.target.value)}
                placeholder="Search for clothes...."
              />
              <button type="button" onClick={handleSearchButton}>
                <IoSearch />
              </button>
            </div>

            <div
              className={`col-3 d-flex align-items-center justify-content-end gap-2 ${style.customBtnGroup}`}
            >
              <button type="button" onClick={onHandleFavBtn}>
                <MdFavoriteBorder />
              </button>

              <button
                type="button"
                className="bag-button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <div className="icon-wrapper" style={{ position: "relative" }}>
                  <MdOutlineShoppingBag />
                  {bagProducts.length > 0 && (
                    <span className="costum-badge">{bagProducts.length}</span>
                  )}
                </div>
              </button>

              <button id={style.user} onClick={onHandleUserBtn} type="button">
                <FaRegUser />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          {bagProducts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="mb-3">
                {bagProducts.map((item) => (
                  <div key={item.id} className="d-flex align-items-center mb-3">
                    <img
                      src={item.pimage}
                      alt={item.pName}
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        marginRight: 10,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14 }}>{item.pName}</div>
                      <div style={{ fontSize: 12, color: "#666" }}>
                        Qty: {item.quantity || 1}
                      </div>
                    </div>

                    <div style={{ marginLeft: 8, whiteSpace: "nowrap" }}>
                      NPR {Number(item.quantity) * Number(item.sPrice)}
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => removeBagProduct(item.id)}
                      title="Remove item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaTrash style={{ fontSize: "0.9rem" }} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="d-grid gap-2">
                <button
                  onClick={onHandleViewcart}
                  className={`${style.viewCartBtn}`}
                >
                  View Cart
                </button>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => {
                    const closeBtn = document.querySelector(
                      "#offcanvasRight .btn-close"
                    );
                    if (closeBtn) closeBtn.click();
                    navigate("/checkout");
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TopHeader;
