import image1 from "../assets/c1.webp";
import image2 from "../assets/c2.webp";

function HomeCrousal() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={image1}
            className="d-block w-100 "
            alt="image1"
            height={500}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>🧢 Urban Edge</h1>
            <p>
              Bold cuts and street-smart layers designed to keep you moving in
              style.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100 "
            alt="image2"
            height={500}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>👗 Effortless Elegance</h1>
            <p>
              Discover flowy silhouettes and soft fabrics that make everyday
              dressing feel luxurious
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCrousal;
