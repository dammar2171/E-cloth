import style from "../css/Header.module.css";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
function BottomHeader() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="shadow-lg">
        <div className="container-fluid">
          <div className="row py-3">
            <div className="col-3">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="border border-0 fs-2 bg-white d-block d-md-none"
              >
                <FaBars />
              </button>
            </div>
            <div className="col-6 d-none d-md-block ">
              <div className={`${style.linkGroup}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/newcloth"}>New</Link>
                <div className={`dropdown ${style.costumDropdown}`}>
                  <a
                    className="btn  dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Top
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        T-shirt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hoodies
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="btn  dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Bottom
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Joggers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cargo Pant
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#">Accessories</a>
                <a href="#">Shoes</a>
                <a href="#">Sale</a>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </header>

      {showMenu && (
        <div
          className="offcanvas offcanvas-start show w-75"
          tabIndex={-1}
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Ecloth
            </h5>
            <button
              onClick={() => setShowMenu(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-column gap-3">
              <Link
                to={"/"}
                onClick={() => setShowMenu(false)}
                className="text-decoration-none text-dark fs-5"
              >
                Home
              </Link>
              <Link
                to={"/newcloth"}
                onClick={() => setShowMenu(false)}
                className="text-decoration-none text-dark fs-5"
              >
                New
              </Link>
              <div className="dropdown">
                <a
                  className="dropdown-toggle text-decoration-none text-dark fs-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Top
                </a>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      T-shirt
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sweatshirts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hoodies
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <a
                  className="dropdown-toggle text-decoration-none text-dark fs-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bottom
                </a>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Joggers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cargo Pant
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className="text-decoration-none text-dark fs-5"
                onClick={() => setShowMenu(false)}
              >
                Accessories
              </a>
              <a
                href="#"
                className="text-decoration-none text-dark fs-5"
                onClick={() => setShowMenu(false)}
              >
                Shoes
              </a>
              <a
                href="#"
                className="text-decoration-none text-dark fs-5"
                onClick={() => setShowMenu(false)}
              >
                Sale
              </a>
              <NavLink
                to="/contact"
                className="text-decoration-none text-dark fs-5"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomHeader;
