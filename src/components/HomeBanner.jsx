import "../css/HomeBanner.css";
const HomeBanner = () => {
  return (
    <section className="container-fluid py-4">
      <div className="container homeBanner ">
        <div className="row">
          <div className="col-6">
            <h1>The Future of Clothing Starts Here</h1>
            <p>
              Experience innovation, quality, and style in every product we
              offer. Join thousands of satisfied customers across Nepal.
            </p>
            <button className="btn">Shop Now</button>
          </div>
          <div className="col-6">
            <div className="homeBannerStats">
              <span>
                <h3>2+</h3>
                <p>Products</p>
              </span>
              <span>
                <h3>18+</h3>
                <p>Orders</p>
              </span>
              <span>
                <h3>24/7</h3>
                <p>Available</p>
              </span>
              <span>
                <h3>Free</h3>
                <p>Shipping</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
