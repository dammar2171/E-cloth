import { useContext } from "react";
import OurProductCardList from "./OurProductCardList.jsx";
import { AppContext } from "../store/Context";
const NavTab = ({ description, product }) => {
  const { products, newProducts } = useContext(AppContext);
  if (!product) return null;

  const sourceType = product.type
    ? product.type 
    : newProducts.some((p) => p.id === product.id)
    ? "NewArrival"
    : "Featured";

  const sourceArray = sourceType === "NewArrival" ? newProducts : products;

  const related = sourceArray.filter(
    (p) =>
      String(p.id) !== String(product.id) && p.category === product.category
  );
  const relatedFallback =
    related.length > 0
      ? related
      : sourceArray
          .filter((p) => String(p.id) !== String(product.id))
          .slice(0, 4);

  return (
    <>
      <nav>
        <div className="nav nav-tabs " id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-description-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-description"
            type="button"
            role="tab"
            aria-controls="nav-description"
            aria-selected="true"
          >
            Description
          </button>
          <button
            className="nav-link"
            id="nav-related-products-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-related-products"
            type="button"
            role="tab"
            aria-controls="nav-related-products"
            aria-selected="false"
          >
            Related Products
          </button>
        </div>
      </nav>
      <div className="tab-content pt-3" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-description"
          role="tabpanel"
          aria-labelledby="nav-description-tab"
          tabIndex={0}
        >
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div
          className="tab-pane fade pt-3"
          id="nav-related-products"
          role="tabpanel"
          aria-labelledby="nav-related-products-tab"
          tabIndex={0}
        >
          <h3>Related Products</h3>
          <OurProductCardList items={relatedFallback} />
        </div>
      </div>
    </>
  );
};
export default NavTab;
