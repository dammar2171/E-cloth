import style from "../css/Header.module.css";
function BottomHeader() {
  return (
    <header className="shadow-lg">
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-3"></div>
          <div className="col-6 ">
            <div className={`${style.linkGroup}`}>
              <a href="#">Home</a>
              <a href="#">New</a>
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
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </header>
  );
}

export default BottomHeader;
