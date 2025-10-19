import { useNavigate } from "react-router";
import notFound from "../assets/product-not-found.webp";
function NotFound() {
  const navigate = useNavigate();
  const onHandleShopping = () => {
    navigate("/");
  };
  return (
    <section className="container-fluid costumNotFound">
      <img src={notFound} alt="product not found" />
      <p>Product Not Found!</p>
      <button
        onClick={onHandleShopping}
        style={{
          backgroundColor: "#BD0028",
          border: "none",
          borderRadius: "0.3rem",
          width: "18rem",
          padding: "0.4rem 0",
          color: "white",
          fontSize: "1.2rem",
        }}
      >
        Back to shopping
      </button>
    </section>
  );
}

export default NotFound;
