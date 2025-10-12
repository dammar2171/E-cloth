import OurProductCardList from "./OurProductCardList";

const OurProduct = ({items,text}) => {
  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 fs-5 mb-3">{text}</div>
        </div>
        <OurProductCardList items={items}/>
      </div>
    </div>
  );
};
export default OurProduct;
