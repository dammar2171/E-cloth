import { useContext } from "react";
import { AppContext } from "../store/Context";
import ProductCard from "./ProductCard";

const SearchModal = () => {
  const { setOpenSearchModal, searchedProduct, products } =
    useContext(AppContext);

  console.log(products);

  const filteredProducts = products.filter(
    (p) =>
      p.pName.toLowerCase().includes(searchedProduct.toLowerCase()) ||
      p.category.toLowerCase().includes(searchedProduct.toLowerCase())
  );
  console.log(filteredProducts);

  const handleClose = () => {
    setOpenSearchModal(false);
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Searched Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              />
            </div>

            <div className="modal-body d-flex justify-content-center">
              {filteredProducts.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
