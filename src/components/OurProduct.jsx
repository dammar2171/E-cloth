import OurProductCardList from "./OurProductCardList";

const OurProduct = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 fs-5 mb-3">Our Products</div>
        </div>
        <OurProductCardList />
      </div>
    </div>
  );
};
export default OurProduct;
