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
        </div>
        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100 "
            alt="image2"
            height={500}
          />
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
