import { FaPeopleCarry } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
function Features() {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-4 costumFeature">
            <FaPeopleCarry className="icon-i" />
            <div className="feature-content">
              <h6>Free Shipping</h6>
              <p>FREE Next Day Delivery Orders Over in Nepal.</p>
            </div>
          </div>
          <div className="col-4 costumFeature">
            <TbTruckDelivery className="icon-i" />
            <div className="feature-content">
              <h6>Delivery within 24 hours</h6>
              <p>For All Orders Placed Before 6PM condition apply.</p>
            </div>
          </div>
          <div className="col-4 costumFeature">
            <BsPatchCheck className="icon-i" />
            <div className="feature-content">
              <h6>Easy Payment</h6>
              <p>Cash Payment or Bank Transfer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
